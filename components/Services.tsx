
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const activeService = SERVICES.find(s => s.id === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Expertise Ecosystem
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black mb-0 leading-[1.1]">
            Our Masterful <br /><span className="text-blue-600 font-script text-6xl md:text-8xl">Creative Suite</span>
          </h2>
        </div>
        <p className="text-slate-500 text-xl max-w-sm mb-4 font-medium leading-relaxed">
          From tangible prints to digital whispers, we master every medium with precision.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:w-1/3 w-full space-y-3"
        >
          {SERVICES.map((service) => (
            <motion.button
              key={service.id}
              variants={itemVariants}
              onClick={() => setActiveTab(service.id)}
              className={`group w-full flex items-center justify-between p-7 rounded-[2rem] transition-all duration-500 ${
                activeTab === service.id 
                  ? 'bg-blue-600 text-white shadow-[0_25px_50px_-12px_rgba(37,99,235,0.4)] scale-[1.03]' 
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-transparent hover:border-slate-100 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 ${
                  activeTab === service.id ? 'bg-white/20 text-white rotate-6' : 'bg-slate-100 text-blue-600 group-hover:rotate-6'
                }`}>
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <span className="font-black text-xl tracking-tight">{service.title}</span>
              </div>
              <i className={`fas fa-chevron-right text-xs transition-transform duration-500 ${
                activeTab === service.id ? 'translate-x-0' : '-translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
              }`}></i>
            </motion.button>
          ))}
        </motion.div>

        <div className="lg:w-2/3 w-full bg-white p-10 md:p-20 rounded-[3rem] shadow-2xl border border-slate-50 relative overflow-hidden group min-h-[600px]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full -mr-40 -mt-40 blur-[100px] opacity-40 group-hover:bg-blue-200 transition-colors"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="relative z-10"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="h-px flex-grow bg-slate-100"></div>
                <h3 className="text-4xl font-black whitespace-nowrap">{activeService?.title}</h3>
                <div className="h-px flex-grow bg-slate-100"></div>
              </div>

              <p className="text-slate-600 text-2xl leading-relaxed mb-12 italic font-medium">
                "{activeService?.description}"
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                {activeService?.features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 group/item"
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform">
                      <i className="fas fa-check text-blue-600 text-[10px]"></i>
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl"
                >
                  Start Campaign
                </motion.button>
                <button className="flex items-center gap-3 text-blue-600 font-black text-lg group/link">
                  View Success Stories
                  <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Services;
