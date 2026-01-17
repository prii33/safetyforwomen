import React, { useEffect, useMemo, useRef, useState } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  sources?: { title: string; url: string }[];
};

const API_BASE_URL =
  (import.meta as ImportMeta & { env?: Record<string, string> }).env?.VITE_API_BASE_URL ||
  "https://safety-api.prii33.workers.dev";

interface ChatWidgetProps {
  isInline?: boolean;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isInline = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! Ask me anything about the Safety for Women website, our initiatives, or how to get involved.",
    },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  const chatEndpoint = useMemo(() => `${API_BASE_URL}/api/chat`, []);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) {
      return;
    }

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setIsLoading(true);

    try {
      const response = await fetch(chatEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Chat service error (${response.status})`);
      }

      const data = (await response.json()) as { answer: string; sources?: ChatMessage["sources"] };
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer || "Sorry, I could not find that on the site.",
          sources: data.sources ?? [],
        },
      ]);
    } catch (error) {
      const fallback =
        error instanceof Error && error.message
          ? `Chat service error: ${error.message}`
          : "Sorry, I could not reach the chat service right now. Please try again soon.";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: fallback,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const getSourceHref = (url: string) => {
    if (url.startsWith("http")) {
      return url;
    }
    if (url.startsWith("/")) {
      return `/#${url}`;
    }
    return url;
  };

  const renderMessageContent = (content: string, isUser: boolean) => {
    const lines = content.split("\n");
    const blocks: JSX.Element[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length === 0) {
        return;
      }
      blocks.push(
        <ul key={`list-${blocks.length}`} className="ml-4 space-y-1.5 mt-2">
          {listItems.map((item, idx) => (
            <li key={`item-${idx}`} className="text-[13px] leading-relaxed flex gap-2">
              <span className={isUser ? "text-white/70 mt-0.5" : "text-white/40 mt-0.5"}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      listItems = [];
    };

    lines.forEach((rawLine, idx) => {
      const line = rawLine.trim();
      if (!line) {
        flushList();
        return;
      }

      if (line.startsWith("- ")) {
        listItems.push(line.slice(2));
        return;
      }

      flushList();
      if (line.endsWith(":")) {
        blocks.push(
          <p key={`heading-${idx}`} className={`text-xs font-bold uppercase tracking-wider mt-3 first:mt-0 ${isUser ? "text-white/80" : "text-white/70"}`}>
            {line.slice(0, -1)}
          </p>
        );
        return;
      }

      blocks.push(
        <p key={`line-${idx}`} className="text-[13px] leading-relaxed">
          {line}
        </p>
      );
    });

    flushList();
    return blocks;
  };

  return (
    <div className={isInline ? "relative z-50 font-sans flex flex-col items-center" : "fixed bottom-20 right-4 z-50 font-sans flex flex-col items-end"}>
      {/* Chat Panel */}
      <div
        className={`w-[340px] sm:w-[400px] rounded-2xl overflow-hidden transition-all duration-300 ease-out border border-[#5a2301] ${
          isInline ? "absolute bottom-full right-0 mb-2 origin-bottom" : "mb-3 origin-bottom-right"
        } ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "#271111",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 30px -10px rgba(90, 35, 1, 0.3)",
        }}
      >
        {/* Header */}
        <div
          className="relative px-5 py-4"
          style={{
            background: "#271111",
            borderBottom: "1px solid #5a2301",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-brand-red"
                style={{
                  background: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)",
                  boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)",
                }}
              >
                <HiSparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-white tracking-tight">Safety Assistant</p>
                <p className="text-[11px] text-[#e1d5d5] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online • Powered by AI
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-xl flex items-center justify-center text-[#8a4a3b] hover:text-brand-red hover:bg-white/5 transition-all duration-200"
              aria-label="Close chat"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={listRef}
          className="h-[340px] overflow-y-auto px-4 py-4 space-y-4"
          style={{
            background: "#271111",
            scrollbarWidth: "thin",
            scrollbarColor: "#5a2301 #271111",
          }}
        >
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "rounded-br-md"
                    : "rounded-bl-md"
                }`}
                style={
                  message.role === "user"
                    ? {
                        background: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)",
                        color: "#ffffff",
                        boxShadow: "0 4px 15px -3px rgba(220, 38, 38, 0.4)",
                      }
                    : {
                        background: "linear-gradient(135deg, #0a0a0a 0%, #000000 100%)",
                        color: "#f5f5f5",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: "0 4px 20px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.02) inset",
                      }
                }
              >
                <div className="space-y-1">
                  {renderMessageContent(message.content, message.role === "user")}
                </div>
                {message.sources && message.sources.length > 0 && (
                  <div
                    className="mt-3 pt-3 space-y-1.5"
                    style={{ borderTop: message.role === "user" ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0.1)" }}
                  >
                    <p className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: message.role === "user" ? "rgba(255,255,255,0.7)" : "rgba(255, 255, 255, 0.5)" }}>
                      Sources
                    </p>
                    {message.sources.map((source) => (
                      <a
                        key={`${source.title}-${source.url}`}
                        href={getSourceHref(source.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs transition-colors truncate hover:underline"
                        style={{ color: message.role === "user" ? "#ffffff" : "#DC2626" }}
                      >
                        → {source.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div
                className="rounded-2xl rounded-bl-md px-4 py-3"
                style={{
                  background: "linear-gradient(135deg, #0a0a0a 0%, #000000 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 4px 20px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.02) inset",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-brand-red animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-brand-red animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-brand-red animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span className="text-xs text-[#f5f5f5]">Thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div
          className="px-4 py-4"
          style={{
            background: "#271111",
            borderTop: "1px solid #5a2301",
          }}
        >
          <div className="flex items-end gap-2">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Ask anything..."
                className="w-full resize-none rounded-xl px-4 py-3 pr-12 text-sm outline-none transition-all duration-200 placeholder-[#8a4a3b]"
                style={{
                  background: "#1a0a0a",
                  color: "#e1d5d5",
                  border: "1px solid #5a2301",
                  minHeight: "48px",
                  maxHeight: "120px",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#DC2626";
                  e.target.style.boxShadow = "0 0 0 2px rgba(220, 38, 38, 0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#5a2301";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 bottom-2 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: input.trim() ? "#DC2626" : "#5a2301",
                  boxShadow: input.trim() ? "0 0 10px rgba(220, 38, 38, 0.4)" : "none",
                }}
              >
                <FiSend className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          <p className="mt-3 text-[10px] text-[#8a4a3b] text-center">
            Answers are based on website content only
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      {isInline ? (
        <div className="chat-widget-inline-icon">
          <a
            onClick={(e) => {
              e.preventDefault();
              setIsOpen((prev) => !prev);
            }}
            data-label="AI Chat"
          >
            <i>
              <FiMessageCircle style={{ width: '1em', height: '1em' }} />
            </i>
            {!isOpen && (
              <span
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                style={{ pointerEvents: 'none' }}
              />
            )}
          </a>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group relative flex items-center justify-center transition-all duration-300"
          aria-label="Open chat"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 border-2 border-brand-red"
            style={{
              background: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)",
              boxShadow: isOpen
                ? "0 0 15px rgba(220, 38, 38, 0.5)"
                : "0 0 25px rgba(220, 38, 38, 0.6), 0 8px 25px -5px rgba(0, 0, 0, 0.4)",
            }}
          >
            {isOpen ? (
              <FiX className="w-6 h-6 text-white transition-transform duration-300" />
            ) : (
              <FiMessageCircle className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
            )}
          </div>
          {!isOpen && (
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#991B1B] animate-pulse"
            />
          )}
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
