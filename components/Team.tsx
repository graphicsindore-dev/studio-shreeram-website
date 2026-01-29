
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Current target rotation (in degrees)
  const rotationValue = useMotionValue(0);
  // Smoothly interpolated rotation for the visuals
  const smoothRotation = useSpring(rotationValue, { stiffness: 40, damping: 20 });
  
  const autoRotateRef = useRef<number | null>(null);
  const restartTimeoutRef = useRef<number | null>(null);
  const isInteracting = useRef(false);

  const members = TEAM;
  const angleStep = 360 / members.length;
  const radius = 350; // Distance from center

  useEffect(() => {
    startAutoRotate();
    
    // Track rotation to update the active index based on proximity to the front (0 degrees)
    const unsubscribe = smoothRotation.on("change", (latest) => {
      const normalized = latest % 360;
      const index = Math.round(-normalized / angleStep) % members.length;
      const correctedIndex = (index + members.length) % members.length;
      if (correctedIndex !== activeIndex) {
        setActiveIndex(correctedIndex);
      }
    });

    return () => {
      stopAutoRotate();
      unsubscribe();
    };
  }, [activeIndex]);

  const startAutoRotate = () => {
    if (autoRotateRef.current) return;
    autoRotateRef.current = window.setInterval(() => {
      if (!isInteracting.current) {
        const current = rotationValue.get();
        rotationValue.set(current - angleStep);
      }
    }, 4000);
  };

  const stopAutoRotate = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  const handlePan = (_: any, info: { delta: { x: number } }) => {
    isInteracting.current = true;
    stopAutoRotate();
    if (restartTimeoutRef.current) clearTimeout(restartTimeoutRef.current);

    const current = rotationValue.get();
    // Sensitivity: 0.2 degrees per pixel of movement
    rotationValue.set(current + info.delta.x * 0.4);
  };

  const handlePanEnd = () => {
    isInteracting.current = false;
    
    // Snapping logic: find the closest multiple of angleStep
    const current = rotationValue.get();
    const snapped = Math.round(current / angleStep) * angleStep;
    rotationValue.set(snapped);

    // Resume auto-rotation after a 3s delay
    restartTimeoutRef.current = window.setTimeout(() => {
      startAutoRotate();
    }, 3000);
  };

  return (
    <div className="container mx-auto px-6 overflow-hidden py-10">
      <div className="text-center mb-16 relative z-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
        >
          Our Internal Engine
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          The <span className="text-blue-600 font-script text-5xl md:text-7xl">Visionaries</span>
        </h2>
      </div>

      <motion.div 
        onPan={handlePan}
        onPanEnd={handlePanEnd}
        className="relative h-[650px] w-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing preserve-3d"
      >
        {/* Central Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* The Orbiting Container */}
        {members.map((member, i) => (
          <OrbitingMember 
            key={i}
            member={member}
            index={i}
            total={members.length}
            radius={radius}
            angleStep={angleStep}
            smoothRotation={smoothRotation}
          />
        ))}

        {/* High-End Label for Active Member */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white/90 backdrop-blur-2xl px-12 py-6 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-white/50 text-center min-w-[300px]"
            >
              <h4 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                {members[activeIndex].name}
              </h4>
              <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em]">
                {members[activeIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="text-center mt-6">
        <p className="text-slate-400 font-bold text-[9px] uppercase tracking-[0.4em] animate-pulse">
          Drag horizontally to explore the orbit
        </p>
      </div>
    </div>
  );
};

interface OrbitingMemberProps {
  member: any;
  index: number;
  total: number;
  radius: number;
  angleStep: number;
  smoothRotation: any;
}

const OrbitingMember: React.FC<OrbitingMemberProps> = ({ member, index, radius, angleStep, smoothRotation }) => {
  const [styles, setStyles] = useState({ x: 0, z: 0, scale: 0, opacity: 0, rotateY: 0 });

  // Use the smooth rotation value to calculate the specific 3D position for this member
  useEffect(() => {
    return smoothRotation.on("change", (latest: number) => {
      const myAngle = (index * angleStep) + latest;
      const radian = (myAngle * Math.PI) / 180;
      
      const x = Math.sin(radian) * radius;
      const z = Math.cos(radian) * radius;
      
      // Calculate depth-based effects
      // Z goes from -radius (back) to +radius (front)
      // Normalize to 0 to 1
      const depth = (z + radius) / (2 * radius); 
      
      setStyles({
        x,
        z,
        scale: 0.6 + (depth * 0.7), // Scale up as it comes forward
        opacity: 0.2 + (depth * 0.8), // Fade out as it goes back
        rotateY: -latest - (index * angleStep) // Keep it facing forward
      });
    });
  }, [index, radius, angleStep, smoothRotation]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        x: styles.x,
        z: styles.z,
        scale: styles.scale,
        opacity: styles.opacity,
        rotateY: styles.rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="flex flex-col items-center justify-center pointer-events-none"
    >
      <div className={`
        relative w-40 h-40 md:w-56 md:h-56 rounded-[2.5rem] p-1.5 transition-all duration-500
        ${styles.scale > 1.1 ? 'border-4 border-blue-600 shadow-2xl shadow-blue-600/30' : 'border-2 border-slate-200/50 grayscale'}
      `}>
        <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-slate-100 shadow-inner">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Soft reflection/overlay */}
        <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Visual Indicator of ground position */}
      <div className="w-16 h-1.5 bg-slate-900/5 blur-md rounded-full mt-10 scale-x-150"></div>
    </motion.div>
  );
};

export default Team;
