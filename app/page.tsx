"use client";
import { useChat } from "ai/react";

import GPTLogo from "@/app/components/GPTLogo";
import UserLogo from "@/app/components/UserLogo";
export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, stop } = useChat();
  return (
    <div className="pt-4 pb-32 flex flex-col">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`border-t border-black/10 ${
            message.role === "assistant" && "bg-gray-200 "
          }`}
        >
          <div className="max-w-2xl mx-auto py-6 px- 6 flex ">
            {(message.role === "assistant" && <GPTLogo />) ||
              (message.role === "user" && <UserLogo />)}
            <span className="ml-3 px-6 justify-center">{message.content}</span>
          </div>
        </div>
      ))}

      <form className="fixed inset-x-0 bottom-10 flex  align-middle " onSubmit={handleSubmit}>
        <input
          className="max-w-3xl shadow-slate-50 w-full mx-auto py-8 flex flex-col h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background"
          placeholder="Ask me something"
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2  bottom-10 px-5 rounded-full"
          onClick={stop}
        >
          Pause
        </button>
      </form>
    </div>
  );
}
