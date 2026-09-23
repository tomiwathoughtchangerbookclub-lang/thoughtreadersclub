"use client";

import { motion } from "framer-motion";
import { Feather } from "lucide-react";

export function About() {
  return (
    <section id="philosophy" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="/images/about-desk.jpg"
                alt="A writing desk with an open book and a fountain pen"
                className="w-full rounded-2xl object-cover shadow-2xl shadow-[#1A2F26]/20"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="rounded-2xl bg-[#1A2F26] px-8 py-6 text-[#F7F2E8] shadow-xl">
                  <div className="font-serif-display text-4xl font-bold text-[#B8924A]">
                    2021
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#F7F2E8]/70">
                    Year founded
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full bg-[#B8924A]/15 blur-2xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B8924A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
              We treat books as cultural contributions, not commodities
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#5C6B5F] md:text-lg">
              ThoughtReadersClub is built on the belief that literature still
              matters as a permanent cultural contribution, not just a passing
              release cycle. We scout independently published works that deserve a
              legacy spotlight and bring them to a community of careful, engaged
              readers who treat each book as a long conversation rather than a
              quick consumption.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#5C6B5F] md:text-lg">
              Our work bridges literature, human progress, and community. We
              dedicate ourselves to discovering exceptional, independently
              published works that deserve a wider legacy, then introduce those
              authors to a sophisticated network of deeply engaged thinkers who
              foster high signal discourse around their writing.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A2F26] text-[#B8924A]">
                <Feather className="h-5 w-5" />
              </div>
              <div>
                <div className="font-serif-display text-lg font-semibold text-[#1A2F26]">
                  Dr. Tomiwa Johnson
                </div>
                <div className="text-sm text-[#5C6B5F]">
                  Founder and Selection Committee Chair
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
