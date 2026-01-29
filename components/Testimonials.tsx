
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Working with Shreeram Advertising was a game-changer. Their strategic approach for our launch campaign was flawless, resulting in a significant boost in our market presence.",
      author: "A. Kumar",
      role: "Marketing Head, Real Estate Group",
      initials: "AK"
    },
    {
      text: "Their understanding of the FMCG market is unparalleled. Their OOH campaigns were not only creative but also drove tangible results in our target regions. Highly recommended!",
      author: "S. Verma",
      role: "Director, Leading FMCG Product",
      initials: "SV"
    },
    {
      text: "For our student admission campaign, Shreeram Advertising delivered a strategy that truly resonated. Professionalism and dedication are commendable.",
      author: "Dr. R. Pandey",
      role: "Chairman, Education Group",
      initials: "RP"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          What Our <span className="text-blue-600 font-script text-5xl md:text-6xl">Clients</span> Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ 
              y: -12,
              transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-16 md:p-20 rounded-[4rem] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.06)] border border-slate-50 relative flex flex-col items-center text-center min-h-[520px] transition-all cursor-default hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.12)] hover:border-blue-50"
          >
            {/* Quote Icon - Moved higher and right */}
            <div className="absolute top-2 right-10 text-9xl text-blue-600/5 pointer-events-none select-none">
              <i className="fas fa-quote-right"></i>
            </div>
            
            <p className="text-slate-600 text-xl md:text-2xl leading-relaxed mb-12 relative z-10 italic font-medium">
              "{t.text}"
            </p>

            <div className="mt-auto flex flex-col items-center gap-4 relative z-10">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center font-black text-blue-600 text-3xl border-4 border-white shadow-xl transition-transform"
              >
                {t.initials}
              </motion.div>
              <div>
                <h4 className="font-black text-slate-900 text-2xl leading-none mb-1">{t.author}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
