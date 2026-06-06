import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import Hero from "@/components/sections/Hero";
import ClientMarquee from "@/components/sections/client-marquee"; // Fallback ClientMarquee 
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import { AboutSection } from "@/components/sections/about-section";
import DirectorSection from "@/components/sections/director-section";
const TeamSection = dynamic(
  () => import("@/components/sections/team-section")
);

const PresenceSection = dynamic(
  () => import("@/components/sections/presence-section")
);
import ClientsSection from "@/components/sections/clients-section";
import Footer from "@/components/layout/footer";
import Reveal from "@/components/animations/reveal";
import dynamic from "next/dynamic";
import Counter from "@/components/animations/counter";

// in case the external component is missing
const ClientMarqueeFallback = () => (
  <div className="px-6 py-12">
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center gap-8 overflow-x-auto py-4">
        {clientLogos.map((logo) => (
          <div
            key={logo}
            className="flex h-12 min-w-[120px] items-center justify-center rounded-md bg-white/3 text-sm text-zinc-300"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 500,
    suffix: "+",
    label: "Brands Served",
  },
  {
    value: 6,
    suffix: "",
    label: "Cities Presence",
  },
  {
    value: 70,
    suffix: "+",
    label: "Professionals",
  },
];

const services = [
  "New Digital Platforms",
  "Digital Marketing",
  "Outdoor / OOH / DOOH",
  "TV + Radio + Cinema",
  "Print Media",
  "Brand Strategy",
  "E-commerce Advertising",
];

const platforms = [
  { name: "PhonePe Ads", logo: "/platforms/phonepe.svg", reach: "55M+" },
  { name: "Truecaller Ads", logo: "/platforms/truecaller.svg", reach: "75M+" },
  { name: "Rapido Ads", logo: "/platforms/rapido.svg", reach: "20M+" },
  { name: "Uber Ads", logo: "/platforms/uber.svg", reach: "100M+" },
  { name: "Zomato Ads", logo: "/platforms/zomato.svg", reach: "80M+" },
  { name: "Blinkit Ads", logo: "/platforms/blinkit.svg", reach: "30M+" },
];

const clientLogos = [
  "LG",
  "Sony",
  "Panasonic",
  "Daikin",
  "Xiaomi",
  "IFB",
  "Hitachi",
  "Godrej",
];

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <SiteHeader />

      <Hero />

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/5 pt-20 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-bold text-lime-300">
  {stat.label === "Years Experience" && (
    <Counter end={20} suffix="+" />
  )}

  {stat.label === "Brands Served" && (
    <Counter end={500} suffix="+" />
  )}

  {stat.label === "Cities Presence" && (
    <Counter end={6} />
  )}

  {stat.label === "Professionals" && (
    <Counter end={70} suffix="+" />
  )}
</div>

              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

<Reveal>
<ClientsSection />
</Reveal>

<Reveal>
<AboutSection />
</Reveal>

<Reveal>
<DirectorSection />
</Reveal>

    <Reveal>
      <section id="services" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-lime-300">
              Services
            </p>

            <h2 className="text-4xl md:text-6xl">
              Integrated media solutions across every platform.
            </h2>
          </div>

          <div className="border-t border-white/10">
            {services.map((service, index) => (
  <div
    key={service}
    className="group flex items-center justify-between border-b border-white/10 py-10"
  >
    <div className="flex items-center gap-8">
      <span className="text-zinc-600">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="text-2xl transition group-hover:text-lime-300 md:text-4xl">
        {service}
      </h3>
    </div>

    <Link
      href="/services"
      className="text-zinc-500 transition-all duration-300 hover:text-lime-300"
    >
      Explore →
    </Link>
  </div>
))}
          </div>
        </div>
      </section>
</Reveal>

<Reveal>
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-lime-300">
              New Digital Platforms
            </p>

            <h2 className="text-4xl md:text-6xl">
              Media inventory inside the platforms your audience opens daily.
            </h2>
          </div>

          <div className="grid gap-px rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center justify-between bg-black p-8"
              >
                <div className="flex items-center gap-5">
                  <div className="relative h-10 w-10">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl">{platform.name}</h3>
                </div>

                <span className="text-zinc-500">{platform.reach}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
</Reveal>


<Reveal>
      <ClientMarquee />
</Reveal>

 <Reveal>    
<section className="px-6 py-32" id="portfolio">
  <div className="mx-auto max-w-7xl">
    <div className="mb-16 flex items-end justify-between gap-8">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-lime-300">
          Featured Work
        </p>

        <h2 className="max-w-4xl text-4xl md:text-6xl">
          Campaigns built to be seen,
          remembered and measured.
        </h2>
      </div>

      <Link
        href="/portfolio"
        className="hidden rounded-full border border-white/10 px-6 py-3 text-sm transition hover:border-lime-300/30 md:block"
      >
        View All Work
      </Link>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      {caseStudies.slice(0, 2).map((study) => (
        <Link
          key={study.slug}
          href={`/portfolio/${study.slug}`}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
            <Image
  src={study.coverImage}
  alt={study.title}
  fill
  sizes="(max-width:768px) 100vw, 50vw"
  className="object-cover transition duration-700 group-hover:scale-110"
/>
          </div>

          <div className="p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-lime-300">
              {study.category}
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              {study.title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {study.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {study.metrics.slice(0, 3).map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-10 md:hidden">
      <Link
        href="/portfolio"
        className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm"
      >
        View All Work
      </Link>
    </div>
  </div>
</section>
</Reveal>

<Reveal>
<TeamSection />
</Reveal>

<Reveal>
<PresenceSection />
</Reveal>

<Reveal>
<Footer />
</Reveal>

    </main>
  );
}