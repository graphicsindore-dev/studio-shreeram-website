
import React from 'react';
import { motion } from 'framer-motion';
import { AWARDS } from '../constants';

const Recognition: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
          Award-Winning <br /><span className="text-blue-600 font-script text-5xl md:text-6xl">Creativity</span>
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Excellence isn't just a goal; it's our standard. We're proud to be recognized by leading industry bodies for our impactful work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {AWARDS.map((award, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 group shadow-sm hover:shadow-2xl transition-all"
          >
            <div className="h-56 overflow-hidden relative">
              <img src={award.image} alt={award.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute top-4 right-4 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-trophy"></i>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-black text-slate-900 mb-1">{award.title}</h4>
              <p className="text-blue-600 font-bold text-sm mb-4">{award.org}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">{award.year}</span>
                <i className="fas fa-medal text-slate-200 group-hover:text-blue-100 transition-colors text-2xl"></i>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Recognition;
