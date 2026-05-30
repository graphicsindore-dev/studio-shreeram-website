import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">

      {/* ORIGIN STORY */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-6">
          <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm">Our Origin Story</span>
          <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
          From 150 Sq.Ft. to{' '}
          <span className="text-blue-600 font-script text-5xl md:text-6xl italic">Market Leadership</span>
        </h2>

        <div className="space-y-8 text-slate-600 text-lg md:text-xl leading-relaxed mb-16">
          <p>
            <strong>Shreeram Communications started in 2002 with just 2 visionaries.</strong>{' '}
            Today, we are a diversified communication giant with a workforce of 70+ top-tier professionals
            across Central India and Mumbai.
          </p>
          <p>
            Our journey is defined by our ability to present new dynamics in creative thinking. We don't
            just follow trends; we set them, ensuring our clients stay ahead in an ever-evolving market.
          </p>
        </div>

        {/* Stats */}
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

      {/* DIRECTOR SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 max-w-5xl mx-auto"
      >
        {/* Leadership label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm">Leadership</span>
        </div>

        {/* Two column — photo left, content right */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">

          {/* LEFT — PNG transparent photo, NO shadow, NO box, NO background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            {/* ✅ No shadow, no box, no bg — clean transparent PNG */}
            <img
              src="assets/director.png"
              alt="Sunil Garg — Managing Director"
              style={{ width: '320px', height: '440px' }}
              className="object-contain object-bottom grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
            />
          </motion.div>

          {/* RIGHT — Director Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            {/* 📌 Replace name if needed */}
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
              SUNIL GARG
            </h3>

            <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-8">
              Managing Director, Shreeram Communications
            </p>

            {/* 📌 Replace bio if needed */}
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg">
              With over two decades of transformative leadership, our Director has
              steered Shreeram Communications from a 150 sq. ft. office into one of
              Central India's most respected advertising powerhouses — driven by an
              unrelenting vision for creative excellence and measurable impact.
            </p>

            {/* ✅ Stats boxes REMOVED as requested */}

          </motion.div>

        </div>
      </motion.div>

    </div>
  );
};

export default About;