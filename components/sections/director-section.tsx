"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DirectorSection() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-lime-300/5 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-lime-300/10 blur-[100px]" />

              <Image
                src="/director/director.png"
                alt="Managing Director"
                width={500}
                height={700}
                className="relative z-10 object-contain grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-lime-300">
              Leadership
            </p>

            <h2 className="text-5xl font-black tracking-[-0.04em] md:text-6xl">
              Sunil Garg
            </h2>

            <p className="mt-4 text-lg uppercase tracking-[0.2em] text-zinc-500">
              Managing Director
            </p>

            <div className="mt-10 space-y-6 text-lg leading-9 text-zinc-400">
              <p>
                What started in 2002 from a modest 150 sq.ft. office has
                grown into one of Central India's most respected
                communication agencies.
              </p>

              <p>
                Through vision, consistency and innovation, Shreeram
                Communications has expanded across multiple cities,
                serving leading brands, institutions and government
                organizations.
              </p>

              <p>
                Our focus has always remained simple — create meaningful
                visibility, measurable impact and long-term value for
                every client we partner with.
              </p>
            </div>

            <div className="mt-12 border-l-2 border-lime-300 pl-6">
              <p className="text-xl italic text-white">
                "Great brands aren't built by visibility alone.
                They're built by consistency, trust and relevance."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}