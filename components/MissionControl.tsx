import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToMissionControl } from '../services/geminiService';
import { ChatMessage } from '../types';

export const MissionControl: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'ESTABLISHING UPLINK... MISSION CONTROL ONLINE. AWAITING QUERY.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    const responseText = await sendMessageToMissionControl(userText);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto border-4 border-slug-metal bg-black p-2 shadow-2xl relative">
      {/* Terminal Header */}
      <div className="bg-slug-metal text-white font-retro text-xs p-2 mb-2 flex justify-between items-center">
        <span>>> TACTICAL_COMMS_V2.0</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="h-64 overflow-y-auto font-terminal text-xl p-4 bg-black text-green-500 space-y-3 border border-green-900/30"
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`${msg.role === 'user' ? 'text-slug-gold text-right' : 'text-green-400 text-left'}`}>
            <span className="opacity-50 text-sm mr-2">[{msg.role === 'user' ? 'MINER' : 'CMD'}]</span>
            <span className="typing-effect">{msg.text}</span>
          </div>
        ))}
        {loading && (
          <div className="text-green-400 animate-pulse">
            > DECRYPTING DATA STREAM...
          </div>
        )}
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} className="mt-2 flex border-t-2 border-slug-metal pt-2">
        <span className="text-green-500 font-terminal text-2xl mr-2">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Mission Control for tips..."
          className="flex-1 bg-transparent text-green-400 font-terminal text-xl outline-none placeholder-green-900"
        />
        <button type="submit" disabled={loading} className="font-retro text-xs text-slug-gold hover:text-white px-4">
          SEND
        </button>
      </form>
      
      {/* Decorative Decals */}
      <div className="absolute top-1/2 -left-2 w-1 h-12 bg-slug-rust"></div>
      <div className="absolute top-1/2 -right-2 w-1 h-12 bg-slug-rust"></div>
    </div>
  );
};