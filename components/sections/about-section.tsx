"use client";

import { motion } from "framer-motion";

const STATS = [
  {
    value: "23+",
    label: "Years of Excellence",
  },
  {
    value: "70+",
    label: "Professionals",
  },
  {
    value: "500+",
    label: "Brands Served",
  },
  {
    value: "6",
    label: "Cities Presence",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-300/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-lime-300">
              About Shreeram
            </p>

            <h2 className="max-w-3xl text-5xl font-light leading-tight md:text-7xl">
              Building Brands.
              <br />
              Creating
              <span className="text-lime-300"> Impact.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-zinc-400">
              Since 2002, Shreeram Communications has evolved into
              one of Central India's most trusted integrated
              communication agencies, delivering powerful brand
              experiences through creativity, media intelligence,
              production excellence and strategic execution.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-zinc-500">
              From regional businesses to national brands,
              educational institutions, real estate leaders,
              government campaigns and corporate enterprises,
              we create communication that drives measurable
              growth.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[28px] border border-white/10 bg-black/20 p-8"
                  >
                    <div className="text-4xl font-semibold text-lime-300 md:text-6xl">
                      {item.value}
                    </div>

                    <div className="mt-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] border border-lime-300/10 bg-lime-300/5 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-lime-300">
                  Established
                </p>

                <h3 className="mt-3 text-4xl font-light">
                  2002
                </h3>

                <p className="mt-4 text-zinc-400">
                  Started from Bhopal and today delivering
                  integrated communication solutions across
                  multiple cities and industries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}