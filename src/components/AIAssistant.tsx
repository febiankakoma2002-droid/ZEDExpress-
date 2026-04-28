import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, User, Loader2 } from 'lucide-react';
import { askAssistant } from '../services/geminiService';
import { MOCK_SHOPS, MOCK_PRODUCTS } from '../constants';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; content: string }[]>([
    { role: 'ai', content: "Hello! I'm your ZED Express assistant. Looking for something specific in Kabwe?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    const context = `Shops: $\{MOCK_SHOPS.map(s => s.name).join(', ')\}. Recent Products: $\{MOCK_PRODUCTS.slice(0, 5).map(p => p.name).join(', ')\}.`;
    
    try {
        const response = await askAssistant(userMsg, context);
        setMessages(prev => [...prev, { role: 'ai', content: response }]);
    } catch (err) {
        setMessages(prev => [...prev, { role: 'ai', content: "Oops, something went wrong. Try again!" }]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[350px] sm:w-[400px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-zed-black text-white p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zed-green rounded-xl flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="font-bold">ZED Assistant</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Always Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4 no-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={msg.role === 'ai' ? 'flex items-start gap-3' : 'flex items-start gap-3 flex-row-reverse'}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-zed-green/10 text-zed-green' : 'bg-zed-orange/10 text-zed-orange'}`}>
                    {msg.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'ai' ? 'bg-gray-50 text-gray-700' : 'bg-zed-orange text-white'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-gray-400 italic text-xs animate-pulse">
                  <Loader2 size={12} className="animate-spin" />
                  ZED Assistant is thinking...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-gray-50">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center bg-gray-50 rounded-2xl px-4 py-2"
              >
                <input 
                  type="text" 
                  placeholder="Ask me anything..." 
                  className="bg-transparent flex-grow outline-none text-sm py-2"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="p-2 bg-zed-black text-white rounded-xl hover:bg-zed-green disabled:bg-gray-300 transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${isOpen ? 'bg-zed-black text-white' : 'bg-zed-green text-white hover:bg-zed-black'}`}
      >
        {isOpen ? <X size={24} /> : <Bot size={28} />}
      </motion.button>
    </div>
  );
}
