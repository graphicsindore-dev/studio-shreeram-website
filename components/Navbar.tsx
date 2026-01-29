
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Presence', href: '#presence' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#home" 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
             <img 
               src={scrolled ? "assets/logo.png" : "assets/logo-white.png"} 
               alt="Shreeram Logo" 
               className="h-10 md:h-12 w-auto transition-all duration-500"
             />
          </motion.a>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className={`font-black text-xs uppercase tracking-[0.25em] transition-colors relative group ${scrolled ? 'text-slate-800' : 'text-white/90'}`}
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all"
            >
              Let's Connect
            </motion.a>
          </div>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden text-2xl ${scrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="fas fa-bars-staggered"></i>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] bg-slate-950 text-white flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <img src="assets/logo-white.png" alt="Logo" className="h-10" />
              <button className="text-3xl text-white/50 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  href={link.href}
                  className="text-5xl font-black hover:text-blue-500 transition-colors uppercase tracking-tighter"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.5em] mb-6">Contact Us</p>
              <a href="mailto:info@shreeram.com" className="text-2xl font-bold hover:text-blue-500 transition-colors">hello@shreeram.agency</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
