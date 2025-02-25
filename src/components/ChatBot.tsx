import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import docGenie from "../img/docgenie.jpg";

// Botpress Webchat Integration
declare global {
  interface Window {
    botpressWebChat?: any;
  }
}

interface Message {
  text: string;
  isBot: boolean;
}

interface QuickOption {
  text: string;
  query: string;
}

export default function ChatBot() {
  const quickOptions: QuickOption[] = [
    { text: "🛂 Passport Services", query: "How to apply for passport?" },
    {
      text: "🚗 Driver's License",
      query: "Driver's license application process",
    },
    { text: "💰 Income Tax Filing", query: "How to file income tax?" },
    { text: "📋 Birth Certificate", query: "Birth certificate application" },
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hello! I'm DocGenie, your AI assistant for government services. I can help you navigate through various government services and provide official website links.\n\nHere are some popular topics I can assist you with, or feel free to ask about any other government service:",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (window.botpressWebChat) {
      window.botpressWebChat.init({
        composerPlaceholder: "Ask about any government service...",
        botId: "3fe03e31-6aee-4f21-8b03-0d6157a9d470",
        host: "https://cdn.botpress.cloud/webchat/v2.2",
        messagingUrl: "https://messaging.botpress.cloud",
        botName: "DocGenie",
        hideWidget: false,
        enableTranscriptDownload: true,
      });

      window.botpressWebChat.onEvent(
        (event: any) => {
          if (event.type === "message") {
            setMessages((prev) => [
              ...prev,
              { text: event.payload.text, isBot: true },
            ]);
          }
        },
        ["message"]
      );
    }
  }, []);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { text, isBot: false }]);

    if (window.botpressWebChat) {
      window.botpressWebChat.sendPayload({ type: "text", text });
    }

    setInput("");
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-2xl">
      <div className="flex items-center p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-t-xl">
        <img src={docGenie} alt="DocGenie" className="h-8 w-8 rounded-full" />
        <h2 className="ml-2 text-xl font-bold text-white">DocGenie</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-center justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative"
          >
            <img
              src={docGenie}
              alt="DocGenie Bot"
              className="h-24 w-24 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-2"
            >
              <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>

        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${
              message.isBot ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-xl ${
                message.isBot
                  ? "bg-gray-100 text-gray-800"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
              }`}
            >
              <p className="whitespace-pre-wrap">{message.text}</p>
            </div>
          </motion.div>
        ))}

        {messages.length === 1 && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {quickOptions.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleSend(option.query)}
                className="p-3 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {option.text}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about any government service..."
            className="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleSend()}
            className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
