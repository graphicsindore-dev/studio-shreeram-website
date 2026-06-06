import Image from "next/image";

const clients = [
  "/clients/lg.svg",
  "/clients/sony.svg",
  "/clients/panasonic.svg",
  "/clients/godrej.svg",
  "/clients/xiaomi.svg",
  "/clients/amazon.svg",
  "/clients/croma.svg",
  "/clients/reliancedigital.svg",
  "/clients/tatasalt.svg",
  "/clients/suzuki.svg",
  "/clients/hilton.svg",
  "/clients/mitsubishi.svg",
  "/clients/pantaloons.svg",
  "/clients/trends.svg",
  "/clients/vit.svg",
  "/clients/symbiosis.svg",
];

export default function ClientMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-16">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-black via-black/80 to-transparent" />

      <div className="animate-marquee flex items-center gap-20">
        {[...clients, ...clients].map((logo, index) => (
          <div
            key={index}
            className="group relative h-16 w-44 shrink-0 transition-all duration-500"
          >
            <Image
              src={logo}
              alt="Client Logo"
              fill
              className="
                object-contain
                opacity-40
                grayscale
                transition-all
                duration-500
                group-hover:opacity-100
                group-hover:grayscale-0
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}