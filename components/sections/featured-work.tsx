import Image from "next/image";

const projects = [
  {
    category: "Outdoor Media",
    title: "Large Format Billboard Domination",
    image: "/case-studies/outdoor.jpg",
    metrics: ["12M Reach", "18 Cities", "+220% Visibility"],
  },
  {
    category: "Digital Platforms",
    title: "PhonePe + Truecaller + Rapido Campaign",
    image: "/case-studies/digital.jpg",
    metrics: ["9.5M Impressions", "4.2M Users", "+37% Recall"],
  },
];

export default function FeaturedWork() {
  return (
    <section id="portfolio" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-lime-300">
            Featured Work
          </p>

          <h2 className="max-w-5xl text-4xl md:text-6xl">
            Campaigns engineered for attention,
            reach and measurable outcomes.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[32px] border border-white/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p className="mb-4 text-sm uppercase tracking-[0.18em] text-lime-300">
                  {project.category}
                </p>

                <h3 className="max-w-xl text-2xl font-semibold md:text-4xl">
                  {project.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-lime-300/5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}