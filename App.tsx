import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Presence from './components/Presence';
import Recognition from './components/Recognition';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
  });

  return (
    <div className="relative min-h-screen bg-[#fcfdfe] selection:bg-blue-600 selection:text-white">

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[1000] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="overflow-x-hidden">

        <Hero />
        <Clients />

        <Section id="work" className="bg-white">
          <Work />
        </Section>

        <Section id="services" className="bg-[#f8fafc]">
          <Services />
        </Section>

        <Section id="about" className="bg-white">
          <About />
        </Section>

        <Section id="presence" className="bg-[#f8fafc]">
          <Presence />
        </Section>

        <Section id="recognition" className="bg-white">
          <Recognition />
        </Section>

        <Section id="testimonials" className="bg-blue-600/[0.01]">
          <Testimonials />
        </Section>

        <Section id="team" className="bg-white">
          <Team />
        </Section>

        <Section id="contact" className="bg-[#0a0f1c] text-white">
          <Contact />
        </Section>

      </main>

      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default App;





/* -------------------------------
   Lightweight Section Wrapper
-------------------------------- */

const Section: React.FC<{
  children: React.ReactNode;
  id: string;
  className?: string;
}> = ({ children, id, className = "" }) => {

  return (
    <section
      id={id}
      className={`py-16 lg:py-24 relative ${className}`}
    >
      {children}
    </section>
  );
};




/* -------------------------------
   Back To Top (Optimized)
-------------------------------- */

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 700);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-[100] bg-white text-blue-600 w-12 h-12 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all border border-blue-100"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};
