"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: "21,000+", label: "Global Hub Readers" },
  { value: "2,000+", label: "Active Book Readers" },
  { value: "150+", label: "Reviews per Selection" },
  { value: "15", label: "Authors per Annual Cycle" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#1A2F26]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-library.jpg"
          alt="Atmospheric private library reading room at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2F26] via-[#1A2F26]/85 to-[#1A2F26]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F26] via-transparent to-[#1A2F26]/30" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 sm:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              A Private Literary Society for Authors
            </span>
          </div>

          <h1 className="font-serif-display text-4xl font-bold leading-[1.1] text-[#F7F2E8] sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Where your book earns a year long conversation with serious readers
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#F7F2E8]/80 md:text-xl">
            ThoughtReadersClub is a private literary society that gives
            independent authors a structured twelve month residency with an
            elite global reading community. No noise. No trends. Just books
            worth keeping, and readers who treat them that way.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#F7F2E8]/10 bg-[#F7F2E8]/5 backdrop-blur-sm lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#1A2F26]/40 px-6 py-8 text-center"
            >
              <div className="font-serif-display text-3xl font-bold text-[#B8924A] sm:text-4xl md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[#F7F2E8]/65 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#F7F2E8]/60">
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}
