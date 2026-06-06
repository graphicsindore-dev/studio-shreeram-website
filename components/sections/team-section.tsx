"use client";

import OrbitRing from "@/components/team/orbit-ring";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="overflow-hidden px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-lime-300">
            Our Team
          </p>

          <h2 className="text-4xl md:text-6xl">
            The People Behind
            <br />
            Every Great Campaign
          </h2>
        </div>

        <OrbitRing />
      </div>
    </section>
  );
}