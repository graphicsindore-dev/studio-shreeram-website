import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "New Digital Platforms",
    image: "/services/new-digital-platforms-new.jpg",
    description:
      "Reach audiences inside PhonePe, Truecaller, Rapido, Uber, Zomato, Blinkit and emerging digital ecosystems with high-impact native advertising solutions.",
  },
  {
    title: "Digital Marketing",
    image: "/services/digital-marketing-new.jpg",
    description:
      "Performance marketing, social media, search campaigns, lead generation, remarketing and full-funnel digital growth strategies.",
  },
  {
    title: "Outdoor / OOH / DOOH",
    image: "/services/outdoor-ooh-dooh-new.jpg",
    description:
      "Premium hoardings, transit media, digital outdoor screens and large-scale visibility campaigns across India.",
  },
  {
    title: "TV + Radio + Cinema",
    image: "/services/tv-radio-cinema-new.jpg",
    description:
      "Mass reach media planning and buying across television networks, FM radio stations and cinema advertising platforms.",
  },
  {
    title: "Print Media",
    image: "/services/print-media-new.jpg",
    description:
      "Strategic newspaper and magazine advertising with regional and national publication coverage.",
  },
  {
    title: "Brand Strategy",
    image: "/services/brand-strategy.jpg",
    description:
      "Positioning, communication planning, campaign architecture and long-term brand building initiatives.",
  },
  {
    title: "E-Commerce Advertising",
    image: "/services/ecommerce-advertising-new.jpg",
    description:
      "Marketplace growth solutions for Amazon, Flipkart and quick-commerce platforms with performance-driven campaigns.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-10 inline-flex text-sm text-lime-300"
          >
            ← Back Home
          </Link>

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-lime-300">
            Services
          </p>

          <h1 className="max-w-4xl text-5xl md:text-7xl">
            Integrated Communication Solutions
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            From digital-first campaigns to nationwide media planning,
            Shreeram Communications delivers end-to-end advertising
            solutions across every major touchpoint.
          </p>

          <div className="mt-24 space-y-32">
            {services.map((service, index) => (
              <section
                key={service.title}
                className={`grid items-center gap-14 lg:grid-cols-2 ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                {/* Content */}
                <div>
                  <div className="mb-6 text-sm tracking-[0.3em] text-lime-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h2 className="text-4xl font-semibold md:text-6xl">
                    {service.title}
                  </h2>

                  <p className="mt-8 text-lg leading-8 text-zinc-400">
                    {service.description}
                  </p>

                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
                      Strategy
                    </span>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
                      Planning
                    </span>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400">
                      Execution
                    </span>
                  </div>

                  <div className="mt-10">
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-3 rounded-full bg-lime-300 px-7 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,244,0,0.35)]"
                    >
                      Discuss This Service
                      <span>↗</span>
                    </a>
                  </div>
                </div>

                {/* Showcase Placeholder */}
                <div className="group relative aspect-[16/10] overflow-hidden rounded-[36px] border border-white/10">
  <Image
    src={service.image}
    alt={service.title}
    fill
    className="object-cover transition duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

  <div className="absolute bottom-8 left-8">
    <p className="text-xs uppercase tracking-[0.35em] text-lime-300">
      Showcase
    </p>

    <h3 className="mt-3 text-2xl font-medium text-white">
      {service.title}
    </h3>
  </div>
</div>
              </section>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-40 rounded-[40px] border border-white/10 bg-white/[0.02] px-8 py-16 text-center md:px-16">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-lime-300">
              Let's Build Together
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl md:text-6xl">
              Need a custom media strategy for your brand?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              From digital campaigns and outdoor media to integrated
              nationwide launches, our team can design the right
              communication mix for your business objectives.
            </p>

            <div className="mt-10">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full bg-lime-300 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                Start a Conversation
                <span>→</span>
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}