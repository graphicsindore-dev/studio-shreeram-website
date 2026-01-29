
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

interface GeminiWriterProps {
  name: string;
  idea: string;
  onUpdate: (msg: string) => void;
}

const GeminiWriter: React.FC<GeminiWriterProps> = ({ name, idea, onUpdate }) => {
  const [loading, setLoading] = useState(false);

  const generateDraft = async () => {
    if (!name || !idea) {
      alert("Please fill in your name and project goal first so I can help you better!");
      return;
    }

    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a professional assistant writing on behalf of a user for an advertising agency's contact form.
        User Name: "${name}"
        Goal/Idea: "${idea}"
        
        Write a concise, high-impact, and professional introductory message (approx 50-80 words).
        Be creative but keep it business-ready.`
      });

      const text = response.text || "Draft could not be generated.";
      onUpdate(text);
    } catch (error) {
      console.error("Gemini Error:", error);
      alert("Something went wrong with the AI assistant. Please try manually.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={generateDraft}
      disabled={loading}
      className={`w-full py-3 rounded-2xl border-2 border-slate-100 font-bold flex items-center justify-center gap-3 transition-all ${
        loading ? 'bg-slate-50 cursor-not-allowed text-slate-400' : 'bg-white hover:bg-slate-50 text-blue-600 hover:border-blue-100'
      }`}
    >
      {loading ? (
        <>
          <i className="fas fa-circle-notch animate-spin"></i>
          Magic is happening...
        </>
      ) : (
        <>
          <span className="text-xl">✨</span>
          AI: Help Me Write a Better Message
        </>
      )}
    </button>
  );
};

export default GeminiWriter;
