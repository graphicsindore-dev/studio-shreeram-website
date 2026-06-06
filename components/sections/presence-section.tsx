"use client";

import IndiaMap from "@/components/maps/india-map";

const OFFICES = [
  {
    city: "Mumbai",
    x: 104.95,
    y: 438.85,
  },
  {
    city: "Indore",
    x: 159.29,
    y: 345.85,
  },
  {
    city: "Bhopal",
    x: 191.95,
    y: 330.85,
  },
  {
    city: "Gwalior",
    x: 208.45,
    y: 276.85,
  },
  {
    city: "Jabalpur",
    x: 246.95,
    y: 335.85,
  },
  {
    city: "Raipur",
    x: 286.95,
    y: 379.35,
  },
];

export default function PresenceSection() {
  return (
    <section
      id="presence"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-lime-300">
            Our Presence
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl md:text-6xl">
            Strong Presence Across India
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Strategic offices and execution
            capabilities across key markets
            enabling seamless campaign
            delivery nationwide.
          </p>
        </div>

        <div className="rounded-[40px] border border-white/10 bg-white/[0.02] p-6 md:p-12">
          <IndiaMap />

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3"
              >
                {office.city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}