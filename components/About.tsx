
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-6">
          <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm">Our Origin Story</span>
          <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
          From 150 Sq.Ft. to <br /><span className="text-blue-600 font-script text-5xl md:text-6xl italic">Market Leadership</span>
        </h2>
        
        <div className="space-y-8 text-slate-600 text-lg md:text-xl leading-relaxed mb-16">
          <p>
            <strong>Shreeram Communications started in 2002 with just 2 visionaries.</strong> 
            Today, we are a diversified communication giant with a workforce of 70+ top-tier professionals across Central India and Mumbai.
          </p>
          <p>
            Our journey is defined by our ability to present new dynamics in creative thinking. We don't just follow trends; we set them, ensuring our clients stay ahead in an ever-evolving market.
          </p>
        </div>

        {/* Stats centered */}
        <div className="flex flex-wrap justify-center items-center gap-12 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-sm w-full">
           <div className="text-center">
             <div className="text-4xl font-black text-slate-900">70+</div>
             <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mt-2">Experts</div>
           </div>
           <div className="hidden md:block w-[1px] h-12 bg-slate-200"></div>
           <div className="text-center">
             <div className="text-4xl font-black text-slate-900">10k+</div>
             <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mt-2">Sq. Ft. Hub</div>
           </div>
           <div className="hidden md:block w-[1px] h-12 bg-slate-200"></div>
           <div className="text-center">
             <div className="text-4xl font-black text-slate-900">6</div>
             <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mt-2">City Hubs</div>
           </div>
        </div>
      </div>

      <div className="mt-20 relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.img 
          whileHover={{ scale: 1.02 }}
          src="assets/life-team-brainstorm.jpg" 
          alt="Team Brainstorm" 
          className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover" 
        />
        <motion.img 
          whileHover={{ scale: 1.02 }}
          src="assets/life-office-fun.jpg" 
          alt="Office Culture" 
          className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover md:mt-12" 
        />
      </div>
    </div>
  );
};

export default About;
