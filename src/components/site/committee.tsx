"use client";

import { motion } from "framer-motion";
import { BookOpen, Feather, Award } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Literary Merit First",
    description:
      "Every book is read in full and judged on its narrative craft, intellectual depth, and lasting cultural contribution. No marketing budgets, no social metrics, no shortcuts.",
  },
  {
    icon: Feather,
    title: "Independent Voice",
    description:
      "The club operates without commercial pressure. Selection criteria stay focused on the writing itself, funded entirely by our private patron network.",
  },
  {
    icon: Award,
    title: "Permanent Recognition",
    description:
      "Selected books receive a full year of structured engagement that builds lasting review momentum and cultural recognition long after the cycle closes.",
  },
];

export function Committee() {
  return (
    <section id="committee" className="relative bg-[#F7F2E8] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Founder card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-[#E5DCC4] bg-white shadow-xl shadow-[#1A2F26]/10">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1A2F26] flex items-center justify-center">
                <div className="font-serif-display text-8xl font-bold text-[#B8924A]">
                  DTJ
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A2F26]/80 via-transparent to-[#B8924A]/15" />
                <div className="absolute bottom-4 left-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#B8924A]">
                    Founder
                  </div>
                  <div className="font-serif-display text-lg text-[#F7F2E8]">
                    Since 2021
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif-display text-2xl font-bold text-[#1A2F26]">
                  Dr. Tomiwa Johnson
                </h3>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
                  Founder and Selection Committee Chair
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#5C6B5F]">
                  Dr. Tomiwa Johnson founded ThoughtReadersClub in 2021 with a
                  simple conviction that the best independent writing deserves a
                  longer, more serious conversation. With roots in narrative
                  structure and community building, he leads the selection
                  committee, steers the annual residency cycle, and personally
                  reads every submission that reaches the shortlist.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text and pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B8924A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
                The Committee
              </span>
            </div>

            <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
              One chair, one standard, one year of serious reading
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#5C6B5F] md:text-lg">
              The selection process is steered personally by Dr. Tomiwa Johnson.
              He reviews hundreds of independent titles each year to discover the
              rare few that match his standard for intellectual depth and
              narrative craft. There is no committee bureaucracy. Every decision
              comes down to one reader who cares about the lasting life of a book.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#1A2F26] text-[#B8924A]">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-lg font-semibold text-[#1A2F26]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#5C6B5F]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
