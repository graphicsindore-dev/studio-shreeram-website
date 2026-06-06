"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 pt-5">
          <div className="flex h-20 items-center justify-between rounded-full border border-white/10 bg-black/40 px-8 backdrop-blur-2xl">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/shreeram-logo.png"
                alt="Shreeram Communications"
                width={250}
                height={168}
                priority
                className="h-11 w-auto md:h-12"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-10 md:flex">
              <a
                href="#about"
                className="text-sm font-medium tracking-wide text-zinc-400 transition-all duration-300 hover:text-white"
              >
                About
              </a>

              <a
                href="#services"
                className="text-sm font-medium tracking-wide text-zinc-400 transition-all duration-300 hover:text-white"
              >
                Services
              </a>

              <a
                href="#team"
                className="text-sm font-medium tracking-wide text-zinc-400 transition-all duration-300 hover:text-white"
              >
                Team
              </a>

              <Link
                href="/portfolio"
                className="text-sm font-medium tracking-wide text-zinc-400 transition-all duration-300 hover:text-white"
              >
                Portfolio
              </Link>

              <a
                href="#contact"
                className="text-sm font-medium tracking-wide text-zinc-400 transition-all duration-300 hover:text-white"
              >
                Contact
              </a>
            </nav>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden rounded-full border border-lime-300/20 bg-lime-300 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,244,0,0.35)] md:flex"
            >
              Let's Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <div className="flex h-full flex-col px-8 py-8">

              {/* Top */}
              <div className="mb-20 flex items-center justify-between">
                <Image
                  src="/logo/shreeram-logo.png"
                  alt="Shreeram Communications"
                  width={200}
                  height={120}
                  className="h-10 w-auto"
                />

                <button
                  onClick={closeMenu}
                  className="text-3xl text-white"
                >
                  ×
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-1 flex-col justify-center gap-8">

                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/#about" },
                  { label: "Services", href: "/#services" },
                  { label: "Team", href: "/#team" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Contact", href: "/#contact" },
                ].map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.08,
                      },
                    }}
                    className="text-4xl font-semibold text-white"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <a
                href="/#contact"
                onClick={closeMenu}
                className="mt-10 flex items-center justify-center rounded-full bg-lime-300 px-8 py-4 font-semibold text-black"
              >
                Discuss Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}