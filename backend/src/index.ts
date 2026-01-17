import { KNOWLEDGE_BASE, type KnowledgeDoc } from "./knowledgeBase";

export interface Env {
  DB: D1Database;
}

type ChatRequest = {
  message?: string;
};

type ChatSource = {
  title: string;
  url: string;
};

type ChatResponse = {
  answer: string;
  sources: ChatSource[];
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "for",
  "from",
  "has",
  "have",
  "in",
  "is",
  "it",
  "its",
  "of",
  "on",
  "or",
  "that",
  "the",
  "their",
  "there",
  "this",
  "to",
  "was",
  "were",
  "with",
  "you",
  "your",
]);

const tokenize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((token) => !STOP_WORDS.has(token));

const buildDocVectors = (docs: KnowledgeDoc[]) => {
  const tokenized = docs.map((doc) => tokenize(`${doc.title} ${doc.content}`));
  const docCount = docs.length;
  const df = new Map<string, number>();

  tokenized.forEach((tokens) => {
    const unique = new Set(tokens);
    unique.forEach((token) => {
      df.set(token, (df.get(token) ?? 0) + 1);
    });
  });

  const idf = (token: string) => Math.log((docCount + 1) / ((df.get(token) ?? 0) + 1)) + 1;

  return docs.map((doc, index) => {
    const tf = new Map<string, number>();
    tokenized[index].forEach((token) => {
      tf.set(token, (tf.get(token) ?? 0) + 1);
    });

    const weights = new Map<string, number>();
    let norm = 0;
    tf.forEach((count, token) => {
      const weight = (1 + Math.log(count)) * idf(token);
      weights.set(token, weight);
      norm += weight * weight;
    });

    return {
      doc,
      weights,
      norm: Math.sqrt(norm),
    };
  });
};

const DOC_VECTORS = buildDocVectors(KNOWLEDGE_BASE);

const rankDocuments = (query: string) => {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) {
    return [];
  }

  const tf = new Map<string, number>();
  queryTokens.forEach((token) => {
    tf.set(token, (tf.get(token) ?? 0) + 1);
  });

  const queryWeights = new Map<string, number>();
  let queryNorm = 0;
  tf.forEach((count, token) => {
    const weight = 1 + Math.log(count);
    queryWeights.set(token, weight);
    queryNorm += weight * weight;
  });

  queryNorm = Math.sqrt(queryNorm);
  if (queryNorm === 0) {
    return [];
  }

  return DOC_VECTORS.map((vector) => {
    let dot = 0;
    queryWeights.forEach((weight, token) => {
      const docWeight = vector.weights.get(token);
      if (docWeight) {
        dot += weight * docWeight;
      }
    });

    const score = vector.norm > 0 ? dot / (vector.norm * queryNorm) : 0;
    return { doc: vector.doc, score };
  })
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score);
};

const buildSnippet = (content: string) => {
  const sentences = content.split(". ");
  if (sentences.length <= 2) {
    return content;
  }
  return `${sentences.slice(0, 2).join(". ")}.`;
};

const buildChatResponse = (matches: { doc: KnowledgeDoc; score: number }[], query: string): ChatResponse => {
  if (matches.length === 0 || matches[0].score < 0.08) {
    return {
      answer:
        "I can only answer questions based on Safety for Women website content, and I could not find a good match for that yet. Try asking about the movement, initiatives, how to get involved, or contact details.",
      sources: [],
    };
  }

  const topMatches = matches.slice(0, 3);
  const snippets = topMatches
    .map((match) => `- ${match.doc.title}: ${buildSnippet(match.doc.content)}`)
    .join("\n");

  return {
    answer: `Here is what I found on the site about "${query}":\n${snippets}`,
    sources: topMatches.map((match) => ({ title: match.doc.title, url: match.doc.url })),
  };
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    const url = new URL(request.url);
    if (url.pathname === "/api/pledge") {
      try {
        const data = await request.json() as any;
        const { name, mobileNumber, pinCode, state } = data;

        if (!name || !mobileNumber || !pinCode || !state) {
          return new Response(JSON.stringify({ error: "Missing required fields" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const query = `
          INSERT INTO pledge ("Name", "Mobile Number", "Pin code", "State")
          VALUES (?, ?, ?, ?)
        `;

        const { success } = await env.DB.prepare(query)
          .bind(name, mobileNumber, pinCode, state)
          .run();

        if (success) {
          return new Response(JSON.stringify({ message: "Pledge submitted successfully" }), {
            status: 201,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        } else {
          throw new Error("Failed to insert into database");
        }
      } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    if (url.pathname === "/api/chat") {
      try {
        const data = (await request.json()) as ChatRequest;
        const message = data?.message?.toString().trim();

        if (!message) {
          return new Response(JSON.stringify({ error: "Message is required" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }

        const matches = rankDocuments(message);
        const response = buildChatResponse(matches, message);

        return new Response(JSON.stringify(response), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    return new Response("Not Found", { status: 404, headers: corsHeaders });
  },
};
