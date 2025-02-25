import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import docGenie from '../img/docgenie.jpg';

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
    { text: "🚗 Driver's License", query: "Driver's license application process" },
    { text: "💰 Income Tax Filing", query: "How to file income tax?" },
    { text: "📋 Birth Certificate", query: "Birth certificate application" }
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hello! I'm DocGenie, your AI assistant for government services. I can help you navigate through various government services and provide official website links.\n\nHere are some popular topics I can assist you with, or feel free to ask about any other government service:",
      isBot: true
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text, isBot: false }]);

    // Simulate bot response
    setTimeout(() => {
      const response = generateResponse(text);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);

    setInput('');
  };

  const generateResponse = (query: string) => {
    const responses = {
      passport: 'For passport services, you can visit the official Passport Seva website: <a href="https://www.passportindia.gov.in" target="_blank" class="text-blue-600 hover:underline">www.passportindia.gov.in</a>\n\nThe process involves:\n1. Creating an account\n2. Filling the application form\n3. Scheduling an appointment\n4. Paying the fees\n5. Visiting the Passport Seva Kendra',
      license: 'For driver\'s license services, please visit your state\'s transport department website. For example, Delhi\'s transport department: <a href="https://transport.delhi.gov.in" target="_blank" class="text-blue-600 hover:underline">transport.delhi.gov.in</a>\n\nThe general process includes:\n1. Applying for a learner\'s license\n2. Scheduling a driving test\n3. Obtaining the permanent license',
      tax: 'For tax filing, visit the Income Tax Department\'s official portal: <a href="https://www.incometax.gov.in" target="_blank" class="text-blue-600 hover:underline">www.incometax.gov.in</a>\n\nSteps include:\n1. Registration/Login\n2. Selecting the appropriate ITR form\n3. Filling in your details\n4. Uploading documents\n5. Verification and submission',
      birth: 'For birth certificate applications, visit your state\'s municipal website or: <a href="https://www.mcdonline.gov.in" target="_blank" class="text-blue-600 hover:underline">www.mcdonline.gov.in</a> (for Delhi)\n\nThe process typically involves:\n1. Online application submission\n2. Document upload\n3. Fee payment\n4. Certificate collection'
    };

    const query_lower = query.toLowerCase();
    if (query_lower.includes('passport')) return responses.passport;
    if (query_lower.includes('license')) return responses.license;
    if (query_lower.includes('tax')) return responses.tax;
    if (query_lower.includes('birth')) return responses.birth;

    return "I can help you with various government services including passport applications, driver's license, tax filing, birth certificates, and more. Please specify which service you're interested in, and I'll provide detailed guidance and official website links.";
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-2xl">
      <div className="flex items-center p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-t-xl">
        <img
          src={docGenie}
          alt="DocGenie"
          className="h-8 w-8 rounded-full"
        />
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
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
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
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-xl ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
              }`}
            >
              <p 
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
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
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
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
