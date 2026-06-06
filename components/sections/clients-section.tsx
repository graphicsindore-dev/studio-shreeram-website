"use client";

import { motion } from "framer-motion";

const clients = [
  "LG",
  "Sony",
  "Panasonic",
  "IFB",
  "Daikin",
  "Hitachi",
  "Godrej",
  "Xiaomi",
  "Lloyd",
  "People's University",
  "RKDF",
  "SAGE",
  "VIT",
  "Oriental",
  "Shakti Pumps",
  "Pantaloons",
  "Ola",
  "FoodPanda",
  "Exim Bank",
  "NBCC",
];

export default function ClientsSection() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-lime-300">
            Trusted By
          </p>

          <h2 className="text-4xl font-light md:text-6xl">
            Brands That Trust
            <span className="block font-semibold text-white">
              Shreeram Communications
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
              }}
              className="group flex h-28 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-lime-300/30 hover:bg-white/[0.05]"
            >
              <span className="text-center text-sm font-medium tracking-wide text-zinc-400 transition-all duration-300 group-hover:text-white">
                {client}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-zinc-500">
            500+ Brands • 20+ Years • Nationwide Execution
          </p>
        </div>

      </div>
    </section>
  );
}