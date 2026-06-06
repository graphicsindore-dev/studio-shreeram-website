"use client";

import { motion } from "framer-motion";

const locations = [
  {
    city: "Mumbai",
    left: 17.15,
    top: 63.08,
  },
  {
    city: "Indore",
    left: 26.03,
    top: 49.71,
  },
  {
    city: "Bhopal",
    left: 31.37,
    top: 47.55,
  },
  {
    city: "Gwalior",
    left: 34.06,
    top: 39.79,
  },
  {
    city: "Jabalpur",
    left: 40.35,
    top: 48.27,
  },
  {
    city: "Raipur",
    left: 46.89,
    top: 54.52,
  },
];

export default function IndiaMap() {
  return (
    <div className="relative mx-auto w-full max-w-[900px]">
      {/* Map */}
      <img
        src="/maps/india.svg"
        alt="India"
        className="w-full"
      />

      {/* Pins */}
      {locations.map((location) => (
        <motion.div
          key={location.city}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{
  left: `${location.left}%`,
  top: `${location.top}%`,
}}
          animate={{
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="relative">
            <div className="h-2.5 w-2.5 md:h-4 md:w-4 rounded-full bg-lime-300 shadow-[0_0_25px_rgba(212,244,0,0.9)]" />

            <div className="absolute inset-0 rounded-full bg-lime-300 blur-lg opacity-60" />

            <div className="absolute left-1/2 top-4 md:top-6 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-white group-hover:block">
              {location.city}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}