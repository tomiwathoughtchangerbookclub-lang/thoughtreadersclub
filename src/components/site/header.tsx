"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Community", href: "/#community" },
  { label: "Stories", href: "/#stories" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = solid || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? "bg-[#1A2F26]/95 backdrop-blur-md py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/#top" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="ThoughtReadersClub logo"
            width={44}
            height={44}
            className="rounded-full transition-transform group-hover:rotate-6"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif-display text-xl font-bold tracking-tight text-[#F7F2E8]">
              Thought<span className="text-[#B8924A]">Readers</span>Club
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B8924A]/80">
              A Private Literary Society
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-[#F7F2E8]/85 transition-colors hover:text-[#B8924A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#F7F2E8]/85 transition-colors hover:text-[#B8924A]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
