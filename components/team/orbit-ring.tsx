"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import OrbitMember from "./orbit-member";
import { TEAM_MEMBERS } from "./team-data";

export default function OrbitRing() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rotationValue = useMotionValue(0);

  const smoothRotation = useSpring(rotationValue, {
    stiffness: 40,
    damping: 20,
  });

  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  const restartRef = useRef<NodeJS.Timeout | null>(null);

  const isInteracting = useRef(false);

  const angleStep = 360 / TEAM_MEMBERS.length;

  const radius = 340;

  useEffect(() => {
    startAutoRotate();

    const unsubscribe = smoothRotation.on(
      "change",
      (latest) => {
        const normalized = latest % 360;

        const index =
          Math.round(-normalized / angleStep) %
          TEAM_MEMBERS.length;

        const corrected =
          (index + TEAM_MEMBERS.length) %
          TEAM_MEMBERS.length;

        setActiveIndex(corrected);
      }
    );

    return () => {
      unsubscribe();

      stopAutoRotate();
    };
  }, []);

  const startAutoRotate = () => {
    if (autoRotateRef.current) return;

    autoRotateRef.current = setInterval(() => {
      if (!isInteracting.current) {
        rotationValue.set(
          rotationValue.get() - angleStep
        );
      }
    }, 4000);
  };

  const stopAutoRotate = () => {
    if (!autoRotateRef.current) return;

    clearInterval(autoRotateRef.current);

    autoRotateRef.current = null;
  };

  const handlePan = (
    _: any,
    info: {
      delta: {
        x: number;
      };
    }
  ) => {
    isInteracting.current = true;

    stopAutoRotate();

    if (restartRef.current) {
      clearTimeout(restartRef.current);
    }

    rotationValue.set(
      rotationValue.get() + info.delta.x * 0.4
    );
  };

  const handlePanEnd = () => {
    isInteracting.current = false;

    const current = rotationValue.get();

    const snapped =
      Math.round(current / angleStep) * angleStep;

    rotationValue.set(snapped);

    restartRef.current = setTimeout(() => {
      startAutoRotate();
    }, 3000);
  };

  return (
    <>
      <motion.div
        onPan={handlePan}
        onPanEnd={handlePanEnd}
        className="relative flex h-[700px] cursor-grab items-center justify-center active:cursor-grabbing"
      >
        <div className="absolute h-[500px] w-[500px] rounded-full bg-lime-300/10 blur-[140px]" />

        {TEAM_MEMBERS.map((member, index) => {
          const angle =
            index * angleStep;

          const current =
            smoothRotation.get();

          const radian =
            ((angle + current) * Math.PI) / 180;

          const x =
            Math.sin(radian) * radius;

          const z =
            Math.cos(radian) * radius;

          const depth =
            (z + radius) /
            (2 * radius);

          return (
            <OrbitingItem
              key={member.name}
              member={member}
              index={index}
              radius={radius}
              angleStep={angleStep}
              smoothRotation={smoothRotation}
            />
          );
        })}

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="rounded-full border border-white/10 bg-white/[0.03] px-10 py-6 backdrop-blur-xl"
            >
              <h3 className="text-center text-2xl font-bold">
                {
                  TEAM_MEMBERS[activeIndex]
                    .name
                }
              </h3>

              <p className="mt-1 text-center text-sm uppercase tracking-[0.25em] text-lime-300">
                {
                  TEAM_MEMBERS[activeIndex]
                    .role
                }
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <p className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-zinc-500">
        Drag Horizontally To Explore
      </p>
    </>
  );
}

function OrbitingItem({
  member,
  index,
  radius,
  angleStep,
  smoothRotation,
}: any) {
  const [styles, setStyles] = useState({
    x: 0,
    z: 0,
    scale: 1,
    opacity: 1,
    rotateY: 0,
  });

  useEffect(() => {
    return smoothRotation.on(
      "change",
      (latest: number) => {
        const angle =
          index * angleStep + latest;

        const radian =
          (angle * Math.PI) / 180;

        const x =
          Math.sin(radian) * radius;

        const z =
          Math.cos(radian) * radius;

        const depth =
          (z + radius) /
          (2 * radius);

        setStyles({
          x,
          z,
          scale: 0.65 + depth * 0.7,
          opacity: 0.2 + depth * 0.8,
          rotateY:
            -latest -
            index * angleStep,
        });
      }
    );
  }, []);

  return (
    <OrbitMember
      member={member}
      styles={styles}
    />
  );
}