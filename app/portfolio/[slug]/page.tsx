import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import Link from "next/link";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const study = caseStudies.find(
    (item) => item.slug === slug
  );

  if (!study) {
    notFound();
  }

  return (
    <main className="bg-black text-white">
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={study.coverImage}
          alt={study.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-7xl px-6 pb-16">
<Link
  href="/"
  className="mb-10 inline-flex text-sm text-lime-300"
>
  ← Back Home
</Link>

            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-lime-300">
              {study.category}
            </p>

            <h1 className="max-w-5xl text-5xl font-bold tracking-[-0.04em] md:text-7xl">
              {study.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-4">
          {study.metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3"
            >
              {metric}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}