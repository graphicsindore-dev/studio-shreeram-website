import Link from "next/link";

const offices = [
  "Indore",
  "Bhopal",
  "Mumbai",
  "Raipur",
  "Gwalior",
  "Jabalpur",
];

const services = [
  "Digital Marketing",
  "New Digital Platforms",
  "Outdoor / OOH / DOOH",
  "TV + Radio + Cinema",
  "Print Media",
  "Brand Strategy",
];

export default function Footer() {
  return (
    <footer
  id="contact"
  className="border-t border-white/10"
>
      {/* CTA SECTION */}
      <div className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-lime-300">
            Let's Connect
          </p>

          <h2 className="mx-auto max-w-5xl text-4xl leading-tight md:text-7xl">
            Ready To Build Your
            <br />
            Next Big Campaign?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            From digital-first campaigns to nationwide media planning,
            Shreeram Communications helps brands create meaningful
            visibility across every major touchpoint.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
  href="mailto:contact@shreeramadvertising.com"
  className="rounded-full bg-lime-300 px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,244,0,0.35)]"
>
  Start A Conversation
</a>

            <Link
              href="/portfolio"
              className="rounded-full border border-white/10 px-8 py-4 transition hover:border-lime-300/40"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="border-t border-white/10 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">
              Shreeram Communications
            </h3>

            <p className="mt-6 max-w-xl leading-8 text-zinc-400">
              Building brands, driving visibility and delivering
              integrated communication solutions across India since 2002.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {offices.map((office) => (
                <span
                  key={office}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400"
                >
                  {office}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Services
            </h4>

            <ul className="space-y-4 text-zinc-400">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="transition hover:text-lime-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
              Contact
            </h4>

            <div className="space-y-8">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Direct Line
                </p>

                <p className="text-zinc-300">
                  0755-4231220-21-22
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Email Support
                </p>

                <a
                  href="mailto:contact@shreeramadvertising.com"
                  className="text-zinc-300 transition hover:text-lime-300"
                >
                  contact@shreeramadvertising.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Shreeram Communications. All rights reserved.
          </p>

          <p>
            Advertising • Branding • Media • Digital • Production
          </p>
        </div>
      </div>
    </footer>
  );
}