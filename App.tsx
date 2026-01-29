
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'framer-motion';
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
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Optimized Section Wrapper
  const MemoizedSection = useMemo(() => {
    return ({ children, id, className = "" }: { children: React.ReactNode; id: string; className?: string }) => (
      <motion.section
        id={id}
        className={`py-16 lg:py-24 ${className} relative gpu`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.section>
    );
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="relative min-h-screen cursor-none selection:bg-blue-600 selection:text-white bg-[#fcfdfe]">
      <CustomCursor />
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[1000] origin-left gpu"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="overflow-x-hidden">
        <Hero />
        <Clients />

        <MemoizedSection id="work" className="bg-white">
          <Work />
        </MemoizedSection>

        <MemoizedSection id="services" className="bg-[#f8fafc]">
          <Services />
        </MemoizedSection>

        <MemoizedSection id="about" className="bg-white">
          <About />
        </MemoizedSection>

        <MemoizedSection id="presence" className="bg-[#f8fafc]">
          <Presence />
        </MemoizedSection>

        <MemoizedSection id="recognition" className="bg-white">
          <Recognition />
        </MemoizedSection>

        <MemoizedSection id="testimonials" className="bg-blue-600/[0.01]">
          <Testimonials />
        </MemoizedSection>

        <MemoizedSection id="team" className="bg-white">
          <Team />
        </MemoizedSection>

        <MemoizedSection id="contact" className="bg-[#0a0f1c] text-white">
          <Contact />
        </MemoizedSection>
      </main>

      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
};

const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.3 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = !!(target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a'));
      setIsHovering(hoverable);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-600/30 pointer-events-none z-[9999] hidden lg:block gpu"
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2 : 1
        }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-1 h-1 bg-blue-600 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
};

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        if (!visible) setVisible(true);
      } else {
        if (visible) setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-24 md:bottom-10 md:right-32 z-[100] bg-white text-blue-600 w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-blue-100 group gpu"
        >
          <i className="fas fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default App;
