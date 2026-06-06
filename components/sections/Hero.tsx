"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "VISIBILITY",
  "REACH",
  "ATTENTION",
  "INFLUENCE",
  "IMPACT",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[220px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-3 text-sm uppercase tracking-[0.35em] text-lime-300"
        >
          Legacy Architects Since 2002
        </motion.p>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mx-auto mb-10 max-w-4xl text-base font-medium text-white/80 md:text-xl"
        >
          Where Brands Become Impossible To Ignore
        </motion.p>

        {/* Hero Heading */}
        <div className="flex flex-col items-center justify-center">
          <div className="mb-1 text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl xl:text-6xl">
            WE BUILD
          </div>

          <div className="relative h-[150px] w-full max-w-[1400px] overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={words[index]}
                initial={{
                  opacity: 0,
                  y: 80,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -80,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="whitespace-nowrap text-center font-black tracking-[-0.07em] text-lime-300 text-6xl md:text-8xl xl:text-[9rem]">
                  {words[index]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Description */}

        {/* CTA */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
  <Link
    href="#services"
    className="rounded-full bg-lime-300 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,244,0,0.35)]"
  >
    Explore Services
  </Link>

  <Link
    href="#contact"
    className="rounded-full border border-white/10 px-8 py-4 text-white transition-all duration-300 hover:border-lime-300/40 hover:text-lime-300"
  >
    Let's Talk
  </Link>
</div>
      </div>
    </section>
  );
}