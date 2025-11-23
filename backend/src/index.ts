export interface Env {
  DB: D1Database;
}

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

    return new Response("Not Found", { status: 404, headers: corsHeaders });
  },
};
