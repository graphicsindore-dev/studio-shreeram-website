import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [windowSize, setWindowSize] = useState({ w: 1440, h: 900 });

  useEffect(() => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 50, stiffness: 200 };
  const moveX = useSpring(useTransform(mouseX, [0, windowSize.w], [-15, 15]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [0, windowSize.h], [-15, 15]), springConfig);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const textRevealVariants: Variants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1c]">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ x: moveX, y: moveY, scale: 1.1 }}
          className="w-full h-full gpu"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-[0.2]"
          >
            <source src="assets/hero-video.mp4" type="video/mp4" />
            <img src="assets/hero-bg.png" alt="" className="w-full h-full object-cover" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-transparent to-[#0a0f1c]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto pt-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'circOut' }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 font-black text-[10px] uppercase tracking-[0.5em] mb-10 backdrop-blur-md"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Legacy Architects Since 2002
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.span
              variants={textRevealVariants}
              className="font-script block text-blue-500 text-5xl md:text-8xl italic"
            >
              Building Your
            </motion.span>
          </div>

          {/* TIMELESS LEGACY — single line, no break */}
          <div className="overflow-hidden mb-12">
            <motion.h1
              variants={textRevealVariants}
              className="text-5xl md:text-[7rem] font-black leading-[0.85] tracking-tighter"
            >
              <span className="text-white">TIMELESS&nbsp;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500">
                LEGACY.
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-12 font-medium leading-relaxed mx-auto"
          >
            Two decades of visionary storytelling. We don't just advertise; we craft market-defining movements.
          </motion.p>

          {/* Single centered button — Collaborate removed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37,99,235,0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl transition-all"
            >
              View Portfolios
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Hero);