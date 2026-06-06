import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies";

export default function PortfolioPage() {
  const portfolioCategories = [
    {
      title: "Digital Media",
      count: "15+ Campaigns",
    },
    {
      title: "DOOH",
      count: "50+ Screens",
    },
    {
      title: "Outdoor Media",
      count: "200+ Locations",
    },
    {
      title: "Cinema",
      count: "Multiplex Networks",
    },
    {
      title: "Radio",
      count: "FM Partnerships",
    },
    {
      title: "Print Media",
      count: "Regional & National",
    },
    {
      title: "Activations",
      count: "On-Ground Experiences",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 pt-40 pb-24">
        <div className="mx-auto max-w-7xl">
<Link
  href="/"
  className="mb-10 inline-flex text-sm text-lime-300"
>
  ← Back Home
</Link>

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-lime-300">
            Portfolio
          </p>

          <h1 className="max-w-5xl text-5xl font-bold tracking-[-0.04em] md:text-7xl">
            Campaigns Built For Visibility, Attention & Growth.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Explore selected campaigns executed across digital,
            outdoor, cinema, radio and integrated media platforms.
          </p>
        </div>
      </section>
      {/* Grid */}
      <section className="px-6 py-20 border-b border-white/10">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {portfolioCategories.map((category) => (
        <div
          key={category.title}
          className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-lime-300/30 hover:bg-white/[0.04]"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
            Category
          </p>

          <h3 className="mt-6 text-3xl font-semibold transition group-hover:text-lime-300">
            {category.title}
          </h3>

          <p className="mt-4 text-zinc-400">
            {category.count}
          </p>

          <div className="mt-10 text-lime-300">
            Explore →
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}