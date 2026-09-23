"use client";

import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Residency", href: "#residency" },
  { label: "Membership", href: "#membership" },
  { label: "Committee", href: "#committee" },
  { label: "Voices", href: "#voices" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1A2F26]/95 backdrop-blur-md py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B8924A]/60 text-[#B8924A] transition-transform group-hover:rotate-12">
            <BookOpen className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif-display text-xl font-bold tracking-tight text-[#F7F2E8]">
              Thought<span className="text-[#B8924A]">Readers</span>Club
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B8924A]/80">
              A Private Literary Society
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-[#F7F2E8]/85 transition-colors hover:text-[#B8924A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#B8924A] px-5 py-2.5 text-sm font-semibold text-[#1A2F26] transition-all hover:bg-[#D4AF6E] hover:shadow-lg hover:shadow-[#B8924A]/30"
          >
            Apply for 2026
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#F7F2E8]"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#1A2F26] border-t border-[#B8924A]/20 px-5 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#F7F2E8]/85 transition-colors hover:text-[#B8924A]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#B8924A] px-5 py-3 text-sm font-semibold text-[#1A2F26]"
            >
              Apply for 2026
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
