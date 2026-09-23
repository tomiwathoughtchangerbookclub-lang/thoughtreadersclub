"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    title: "Curated for literary merit alone",
    body: "Selection is steered by intellectual depth and narrative craft. We never select based on commercial trends, social media following, or marketing budgets. Every book earns its place on the shelf.",
  },
  {
    title: "Independent and transparent",
    body: "We operate as an independent private literary society. There is no pay to play model anywhere in our process. Our funding comes from our private network, so our selection criteria stay purely focused on literary merit.",
  },
  {
    title: "Active immersion, not passive selection",
    body: "A residency is twelve months of structured engagement, not a one time announcement. We guide an elite reader base through deep dives that build long tail momentum and lasting recognition for each author.",
  },
  {
    title: "Permanent intellectual recognition",
    body: "We treat literature as a permanent cultural contribution. Reviews and discussions from our community stay visible and continue to compound long after the residency cycle closes.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B8924A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
                Why Choose Us
              </span>
            </div>

            <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
              What truly sets us apart from any other reading community
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#5C6B5F] md:text-lg">
              We do not run a marketing program dressed up as a book club. Our
              community is built on mutual respect and intellectual rigor. Every
              decision we make is designed to protect the quality of the
              conversations that happen inside our reading circles and to give serious
              books the lasting attention they deserve.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#B8924A] text-[#1A2F26]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-lg font-semibold text-[#1A2F26]">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#5C6B5F]">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual panel replacing the unnecessary stock image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl bg-[#1A2F26] p-10">
              <div className="relative z-10">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B8924A]">
                  Why members stay
                </div>
                <div className="mt-4 font-serif-display text-3xl font-bold leading-tight text-[#F7F2E8]">
                  96 percent of members renew their reading membership every year.
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#F7F2E8]/70">
                  The reason is simple. We do not chase trends, we do not pad our shelves with quick releases, and we treat every selected book as a year long conversation worth finishing.
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#1A2F26] via-[#1A2F26]/80 to-[#B8924A]/15" />
            </div>
            <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-full bg-[#1A2F26]/10 blur-2xl" />
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-[#E5DCC4] bg-white p-5 text-center">
                <div className="font-serif-display text-2xl font-bold text-[#B8924A]">
                  4.9
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#5C6B5F]">
                  Member rating
                </div>
              </div>
              <div className="rounded-xl border border-[#E5DCC4] bg-white p-5 text-center">
                <div className="font-serif-display text-2xl font-bold text-[#B8924A]">
                  12
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#5C6B5F]">
                  Month residency
                </div>
              </div>
              <div className="rounded-xl border border-[#E5DCC4] bg-white p-5 text-center">
                <div className="font-serif-display text-2xl font-bold text-[#B8924A]">
                  100%
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#5C6B5F]">
                  Independent
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
