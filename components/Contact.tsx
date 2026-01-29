
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GeminiWriter from './GeminiWriter';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAiMessage = (msg: string) => {
    setFormData(prev => ({ ...prev, message: msg }));
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Let's Build Your <span className="text-blue-600 font-script text-5xl md:text-6xl text-white">Legacy</span> Together
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          Have a vision or just want to say hello? Our team is ready to scale your ideas into market leadership.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h4 className="text-xl font-bold uppercase tracking-widest text-blue-500">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-blue-500"></i>
                </div>
                <div>
                  <h5 className="font-bold text-lg">Bhopal (HQ)</h5>
                  <p className="text-slate-400">FF-6/10, Alaknanda Complex, Zone-I, M.P. Nagar, Bhopal - 462011</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone-alt text-blue-500"></i>
                </div>
                <div>
                  <h5 className="font-bold text-lg">Direct Line</h5>
                  <p className="text-slate-400">0755-4231220-21-22</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-blue-500"></i>
                </div>
                <div>
                  <h5 className="font-bold text-lg">Email Support</h5>
                  <p className="text-slate-400">contact@shreeramadvertising.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-blue-600 rounded-[2rem] text-white">
            <h4 className="text-xl font-black mb-2">Our Presence</h4>
            <p className="text-blue-100 font-medium">Indore | Raipur | Gwalior | Jabalpur | Mumbai</p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-slate-900">
          <h4 className="text-2xl font-black mb-8">Send Us a Message</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-100 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-100 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold"
              />
            </div>
            <input 
              type="text" 
              name="idea"
              placeholder="Briefly describe your project goal" 
              value={formData.idea}
              onChange={handleChange}
              className="w-full bg-slate-100 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold"
            />
            <textarea 
              name="message"
              placeholder="Your detailed message..." 
              rows={4} 
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-100 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none font-bold"
            ></textarea>
            
            <div className="pt-2 flex flex-col gap-4">
              <GeminiWriter 
                name={formData.name} 
                idea={formData.idea} 
                onUpdate={handleAiMessage} 
              />
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/30 hover:bg-blue-700 transition-all active:scale-95">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
