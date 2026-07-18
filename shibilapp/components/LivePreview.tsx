"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  time: string;
}

export default function LivePreview() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "user",
      content: "Can you explain the difference between your neural architecture and legacy LLMs?",
      time: "10:42 AM",
    },
    {
      role: "assistant",
      content: "Our architecture utilizes sparse-gate mixture-of-experts (MoE) combined with custom quantization, reducing latency by 40% while maintaining semantic integrity.",
      time: "10:42 AM",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessageContent = inputValue.trim();
    setInputValue("");
    setError(null);

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessages: Message[] = [
      ...messages,
      {
        role: "user",
        content: userMessageContent,
        time: currentTime,
      },
    ];

    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to get AI response.");
      }

      const data = await response.json();
      const assistantTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message.content,
          time: assistantTime,
        },
      ]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred while calling the AI model.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="px-gutter mb-section-gap-mobile">
      <div className="max-w-md mx-auto bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/10 shadow-2xl">
        {/* Chat Header */}
        <div className="p-4 bg-surface-container flex items-center gap-3 border-b border-outline-variant/5">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="font-mono text-label-mono text-on-surface-variant">AETHER_CORE_v4.0</span>
        </div>
        {/* Messages */}
        <div className="p-6 flex flex-col gap-6 h-[400px] overflow-y-auto scrollbar-none">
          {messages.map((msg, index) => {
            if (msg.role === "user") {
              return (
                <div key={index} className="flex flex-col gap-2 max-w-[85%]">
                  <div className="bg-surface-container-high p-4 rounded-2xl rounded-tl-none text-on-surface text-sm whitespace-pre-wrap break-words">
                    {msg.content}
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-label-mono">USER - {msg.time}</span>
                </div>
              );
            } else {
              return (
                <div key={index} className="flex flex-col gap-2 max-w-[85%] self-end">
                  <div className="bg-gradient-to-br from-primary-container to-secondary-container p-4 rounded-2xl rounded-tr-none text-white text-sm shadow-md whitespace-pre-wrap break-words">
                    {msg.content}
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-label-mono text-right">AETHERIAL - {msg.time}</span>
                </div>
              );
            }
          })}

          {isLoading && (
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
              <span className="font-mono text-[10px] text-on-surface-variant">Thinking...</span>
            </div>
          )}

          {error && (
            <div className="bg-error-container/20 border border-error/20 p-4 rounded-2xl text-error text-xs">
              <strong>Error:</strong> {error}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
        {/* Input */}
        <div className="p-4 bg-surface-container-low">
          <form onSubmit={handleSend} className="flex items-center bg-surface-container-lowest rounded-xl p-2 border border-outline-variant/20">
            <input
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm text-on-surface w-full px-2"
              placeholder={isLoading ? "Generating response..." : "Type a message..."}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                !inputValue.trim() || isLoading
                  ? "bg-primary/5 text-primary/30 cursor-not-allowed"
                  : "bg-primary/10 text-primary cursor-pointer hover:bg-primary/20"
              }`}
              disabled={isLoading || !inputValue.trim()}
            >
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
