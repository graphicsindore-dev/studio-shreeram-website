import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Hi! I\'m your Shreeram Assistant. How can I help build your brand legacy today?' }
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

    // Build history for Claude API (exclude the first welcome message)
    const history = messages.slice(1).map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.text
    }));

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-5',
          max_tokens: 500,
          system: `You are a professional, creative, and helpful AI assistant for Shreeram Advertising (also known as Studio Shreeram). 
We are a premier 360° advertising agency founded in 2002, now with 70+ experts across Central India and Mumbai. 
We specialize in Print Media, Television, Radio, OOH (Out-of-Home), and Online/Digital advertising.
Our offices are in Bhopal (HQ), Indore, Raipur, Gwalior, Jabalpur, and Mumbai.
Keep your tone elite, concise, and focused on building brand legacies. 
If asked about pricing, suggest scheduling a call via the contact form on the website.
Answer in 2-4 sentences max unless the user asks for detail.`,
          messages: [
            ...history,
            { role: 'user', content: userMessage }
          ]
        })
      });

      const data = await response.json();
      const replyText = data?.content?.[0]?.text ?? "I'm having trouble connecting right now. Please try our contact form!";
      
      setMessages(prev => [...prev, { role: 'assistant', text: replyText }]);
    } catch (error) {
      console.error('Chatbot Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', text: "I'm having trouble connecting right now. Please try again or use our contact form!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    // ✅ Moved up: bottom-20 on mobile, bottom-24 on desktop — avoids overlap with Back-to-Top button
    <div className="fixed bottom-20 right-6 md:bottom-24 md:right-10 z-[1001]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="mb-6 w-[92vw] md:w-[420px] h-[550px] bg-white rounded-[2.5rem] shadow-[0_40px_120px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col border border-slate-100"
          >
            {/* Header */}
            <div className="bg-blue-600 p-7 flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md relative">
                  <i className="fas fa-robot text-xl"></i>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-black text-base tracking-tight leading-none mb-1">Brand Assistant</h4>
                  <p className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Powered by Claude AI</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Chat Body */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-5 bg-slate-50/30 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-[2rem] text-[15px] leading-relaxed font-medium shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-slate-400 border border-slate-100 rounded-[2rem] rounded-tl-none p-5 text-sm font-medium shadow-sm flex gap-1 items-center">
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-slate-100">
              <div className="flex gap-3 p-2 bg-slate-100 rounded-2xl items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our legacy..."
                  className="flex-grow bg-transparent border-none outline-none px-4 py-2 text-sm font-bold text-slate-800 placeholder:text-slate-400"
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping || !input.trim()}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    !input.trim() || isTyping 
                    ? 'bg-slate-200 text-slate-400' 
                    : 'bg-blue-600 text-white hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20'
                  }`}
                >
                  <i className={`fas ${isTyping ? 'fa-circle-notch animate-spin' : 'fa-paper-plane'}`}></i>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? {} : { 
          boxShadow: ["0 0 0 0px rgba(37,99,235,0.4)", "0 0 0 20px rgba(37,99,235,0)", "0 0 0 0px rgba(37,99,235,0)"]
        }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-blue-600 text-white rounded-full shadow-[0_20px_50px_rgba(37,99,235,0.4)] flex items-center justify-center text-2xl relative z-10 transition-colors hover:bg-blue-700"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.i 
              key="close" 
              initial={{ rotate: -90, opacity: 0 }} 
              animate={{ rotate: 0, opacity: 1 }} 
              exit={{ rotate: 90, opacity: 0 }}
              className="fas fa-times"
            ></motion.i>
          ) : (
            <motion.i 
              key="open" 
              initial={{ rotate: 90, opacity: 0 }} 
              animate={{ rotate: 0, opacity: 1 }} 
              exit={{ rotate: -90, opacity: 0 }}
              className="fas fa-comment-dots"
            ></motion.i>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;