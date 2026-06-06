"use client";

import Image from "next/image";

type OrbitMemberProps = {
  member: {
    name: string;
    role: string;
    image: string;
  };
  styles: {
    x: number;
    z: number;
    scale: number;
    opacity: number;
    rotateY: number;
  };
};

export default function OrbitMember({
  member,
  styles,
}: OrbitMemberProps) {
  const active = styles.scale > 1.1;

  return (
    <div
      style={{
        position: "absolute",
        transform: `
          translateX(${styles.x}px)
          scale(${styles.scale})
          rotateY(${styles.rotateY}deg)
        `,
        opacity: styles.opacity,
        zIndex: Math.round(styles.scale * 100),
      }}
      className="pointer-events-none"
    >
      <div
        className={`
          relative overflow-hidden rounded-[32px]
          transition-all duration-500
          ${
            active
              ? "border-2 border-lime-300 shadow-[0_0_50px_rgba(212,244,0,0.35)]"
              : "border border-white/10 grayscale"
          }
        `}
      >
        <div className="relative h-[220px] w-[180px] md:h-[300px] md:w-[240px]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="h-2 w-24 rounded-full bg-black/40 blur-md" />
      </div>
    </div>
  );
}