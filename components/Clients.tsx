import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {

  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-4">
            Empowering Leading Brands
          </h3>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full opacity-30"></div>
        </motion.div>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative flex overflow-hidden"
      >
        <div className="animate-marquee flex items-center gap-16 py-4">
          {duplicatedLogos.map((logo, i) => (
            <motion.img 
              key={i}
              variants={itemVariants}
              src={logo}
              alt="Client Logo"
              loading="lazy"
              className="h-10 md:h-12 w-auto grayscale opacity-40 transition-all duration-500 object-contain flex-shrink-0 md:hover:grayscale-0 md:hover:opacity-100 md:hover:scale-110"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(Clients);
