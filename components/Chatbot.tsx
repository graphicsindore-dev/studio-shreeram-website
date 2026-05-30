import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hi! I\'m your Shreeram Assistant. How can I help build your brand legacy today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-2.0-flash',
        config: {
          systemInstruction: 'You are a professional, creative, and helpful AI assistant for Shreeram Advertising. We are an agency founded in 2002 by 2 visionaries, now with 70+ experts. We specialize in Print Media, TV, Radio, OOH, and Online advertising. We have presence in Bhopal (HQ), Indore, Raipur, Gwalior, Jabalpur, and Mumbai. Keep your tone elite, concise, and focused on building brand legacies. If asked about pricing, suggest scheduling a call via the contact form.',
        },
      });

      const responseStream = await chat.sendMessageStream({ message: userMessage });

      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        const chunkText = (chunk as GenerateContentResponse).text;
        if (chunkText) {
          fullResponse += chunkText;
          setMessages(prev => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1].text = fullResponse;
            return newMsgs;
          });
        }
      }
    } catch (error) {
      console.error('Chatbot Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again or use our contact form!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 md:bottom-28 md:right-10 z-[1001]">
      <motion.a
        href="https://api.whatsapp.com/send/?phone=919238141120&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 0 0px rgba(37,211,102,0.4)',
            '0 0 0 20px rgba(37,211,102,0)',
            '0 0 0 0px rgba(37,211,102,0)'
          ]
        }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.5)] flex items-center justify-center relative hover:bg-[#1ebe5d] transition-colors"
      >
        <i className="fab fa-whatsapp text-3xl"></i>

        {/* Pulsing notification dot */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
        </span>
      </motion.a>
    </div>
  );
};

export default Chatbot;