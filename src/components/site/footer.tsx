"use client";

import { BookOpen, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Philosophy", href: "/#philosophy" },
  { label: "The Residency", href: "/#residency" },
  { label: "Membership", href: "/#membership" },
  { label: "Committee", href: "/#committee" },
  { label: "Voices", href: "/#voices" },
];

const moreLinks = [
  { label: "The Journal", href: "/#journal" },
  { label: "FAQ", href: "/#faq" },
  { label: "Become a Member", href: "/apply" },
  { label: "Books We Read", href: "/books" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F1F18] text-[#F7F2E8]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="ThoughtReadersClub logo"
                width={44}
                height={44}
                className="rounded-full"
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
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#F7F2E8]/60">
              An independent private literary society connecting brilliant
              independent authors with an elite global reading community for a
              year long journey of deep literary engagement.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Mail, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="mailto:drtomiwathoughtreadersclub@gmail.com"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F7F2E8]/15 text-[#F7F2E8]/70 transition-colors hover:border-[#B8924A] hover:bg-[#B8924A] hover:text-[#1A2F26]"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif-display text-sm font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F7F2E8]/70 transition-colors hover:text-[#B8924A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="font-serif-display text-sm font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
              More
            </h4>
            <ul className="mt-5 space-y-3">
              {moreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F7F2E8]/70 transition-colors hover:text-[#B8924A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif-display text-sm font-semibold uppercase tracking-[0.2em] text-[#B8924A]">
              The Reading Room Dispatch
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-[#F7F2E8]/60">
              A short monthly letter from the committee. New selections, book
              notes, and one essay worth your weekend.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex gap-2"
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="min-w-0 flex-1 rounded-full border border-[#F7F2E8]/15 bg-[#1A2F26]/60 px-4 py-2.5 text-sm text-[#F7F2E8] placeholder:text-[#F7F2E8]/40 focus:border-[#B8924A] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#B8924A] px-4 py-2.5 text-sm font-semibold text-[#1A2F26] transition-colors hover:bg-[#D4AF6E]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#F7F2E8]/10 pt-8 md:flex-row">
          <p className="text-xs text-[#F7F2E8]/50">
            © 2017 ThoughtReadersClub. All rights reserved. Founded by Dr.
            Tomiwa Johnson.
          </p>
          <div className="flex gap-6 text-xs text-[#F7F2E8]/50">
            <a href="#" className="transition-colors hover:text-[#B8924A]">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-[#B8924A]">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-[#B8924A]">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
