import React, { useState, useRef, useEffect } from 'react';
import { INITIAL_MESSAGES, BOT_RESPONSES, QUICK_QUESTIONS } from './data';
import type { ChatMessage } from './types';

interface ChatScreenProps {
  active: boolean;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ active }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([...INITIAL_MESSAGES]);
  const [input, setInput] = useState('');
  const msgsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages]);

  const sendMsg = (text?: string) => {
    const tx = text || input.trim();
    if (!tx) return;
    setMessages(prev => [...prev, { role: 'usr', text: tx }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: BOT_RESPONSES[Math.floor(Math.random() * BOT_RESPONSES.length)] }]);
    }, 900);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMsg();
  };

  return (
    <div className={`screen${active ? ' active' : ''}`} id="s-chat">
      <div className="chat-scr">
        <div className="chat-hdr">
          <div className="chat-av">🤖</div>
          <div style={{ flex: 1 }}>
            <div className="chat-av-name">AI Asisten dr. Piprim</div>
            <div className="chat-av-st"><span className="online" />Berbasis panduan IDAI &amp; WHO</div>
          </div>
          <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--text3)' }}>SpA(K)</span>
        </div>

        <div className="chat-msgs" ref={msgsRef}>
          {messages.map((m, i) => (
            <div key={i} className={`msg-wrap ${m.role === 'bot' ? 'bot' : 'usr'}`}>
              {m.role === 'bot' && <div className="msg-sndr">dr. Piprim AI 🩺</div>}
              <div className="msg-bub">{m.text}</div>
              <div className="msg-time">{m.role === 'usr' ? 'Baru saja' : '• Panduan IDAI'}</div>
            </div>
          ))}
        </div>

        <div className="chat-qk">
          {QUICK_QUESTIONS.map(q => (
            <button key={q} className="qchip" onClick={() => sendMsg(q)}>{q}</button>
          ))}
        </div>

        <div className="chat-bar">
          <input
            className="chat-inp"
            placeholder="Tanya seputar tumbuh kembang Rafi..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="send-btn" onClick={() => sendMsg()}>➤</button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
