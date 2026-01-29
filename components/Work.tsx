
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeProject]);

  // Handle body scroll lock with padding correction to prevent "jump"
  useEffect(() => {
    if (selectedProject) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedProject]);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          Where <span className="text-blue-600 font-script text-5xl md:text-6xl">Strategy</span> Meets Spectacle
        </h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          A glimpse into how we've helped our partners evolve from local entities to respected industry benchmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative h-[450px] overflow-hidden rounded-3xl shadow-xl cursor-pointer bg-slate-100"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
              <h3 className="text-white text-2xl font-black mb-4">{project.title}</h3>
              <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                <span className="text-sm font-bold uppercase">View Project</span>
                <i className="fas fa-chevron-right text-xs"></i>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="px-10 py-4 border-2 border-slate-200 rounded-full font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
          Explore All Case Studies
        </button>
      </div>

      {/* High-Resolution Project Details Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-slate-950/98 backdrop-blur-3xl flex items-center justify-center"
          >
            {/* 
                Close Controls Layer: 
                This sits behind the scrolling content but captures clicks on the background 
            */}
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={closeProject} 
            />

            {/* Fixed Navigation/Controls: Always on Top */}
            <div className="fixed top-0 left-0 w-full z-[2050] p-6 md:p-10 flex justify-between items-center pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 hidden md:block"
              >
                <h3 className="text-white font-black text-sm uppercase tracking-[0.2em]">{selectedProject.title}</h3>
              </motion.div>

              <motion.button 
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeProject}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl pointer-events-auto transition-colors hover:bg-red-500 hover:text-white ml-auto"
                aria-label="Close Project"
              >
                <i className="fas fa-times text-2xl"></i>
              </motion.button>
            </div>

            {/* Scrolling Image Container */}
            <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
              <div className="min-h-screen flex flex-col items-center py-20 md:py-32 px-4 md:px-0">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 50 }}
                  transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
                  className="w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] mb-20 relative"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                >
                  <img 
                    src={selectedProject.detailsImage} 
                    alt={`${selectedProject.title} High Resolution Details`}
                    className="w-full h-auto block select-none"
                    draggable={false}
                  />
                </motion.div>
                
                {/* Visual indicator that user has reached the end */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pb-24 text-center"
                >
                   <button 
                     onClick={closeProject}
                     className="px-12 py-5 bg-white/5 border border-white/10 text-white/60 hover:bg-white hover:text-slate-900 rounded-full transition-all font-black text-xs uppercase tracking-[0.4em] backdrop-blur-md"
                   >
                     End of Case Study • Close
                   </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
