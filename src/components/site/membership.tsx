"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Book Reader",
    audience: "For serious readers",
    price: "Apply",
    priceNote: "Annual membership",
    description:
      "For individuals who want to participate in active book discussions and access our private reading channels alongside a global community of engaged readers.",
    features: [
      "Weekly hosted book group access",
      "Private digital reading channels",
      "Quarterly author Q&A invitations",
      "Curated reading lists every cycle",
      "Member only journal access",
    ],
    highlighted: false,
  },
  {
    name: "Hub Patron",
    audience: "For supporters",
    price: "By invitation",
    priceNote: "Annual sponsorship",
    description:
      "For supporters who want to sponsor residencies, host private book events, and gain access to the inner circle of the selection committee deliberations.",
    features: [
      "Everything in Book Reader",
      "Sponsor a residency cycle",
      "Private book event hosting rights",
      "Selection committee briefings",
      "Annual patron dinner invitation",
    ],
    highlighted: true,
  },
  {
    name: "Author Residency",
    audience: "For independent authors",
    price: "Submit",
    priceNote: "Twelve month program",
    description:
      "For independent authors whose work aligns with our mission. Only fifteen standout authors are accepted into each annual cycle of the residency program.",
    features: [
      "Twelve month structured engagement",
      "Direct committee access",
      "High signal review velocity",
      "Featured book event appearances",
      "Permanent archive recognition",
    ],
    highlighted: false,
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              Membership
            </span>
            <span className="h-px w-10 bg-[#B8924A]" />
          </div>

          <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
            Find your place in the reading room
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#5C6B5F] md:text-lg">
            We keep our community intentionally small. Whether you are a serious
            reader, a patron of independent literature, or an author with a book
            that deserves a longer conversation, there is a path into the club.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                tier.highlighted
                  ? "border-[#B8924A] bg-[#1A2F26] text-[#F7F2E8] shadow-2xl shadow-[#1A2F26]/20 lg:-translate-y-4"
                  : "border-[#E5DCC4] bg-white text-[#1A2F26] hover:border-[#B8924A]/50 hover:shadow-lg"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#B8924A] px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1A2F26]">
                  Most engaged
                </div>
              )}

              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8924A]">
                {tier.audience}
              </div>
              <h3 className="mt-2 font-serif-display text-2xl font-bold">
                {tier.name}
              </h3>

              <div className="mt-6 flex items-end gap-2">
                <span
                  className={`font-serif-display text-3xl font-bold ${
                    tier.highlighted ? "text-[#B8924A]" : "text-[#1A2F26]"
                  }`}
                >
                  {tier.price}
                </span>
              </div>
              <div
                className={`mt-1 text-xs ${
                  tier.highlighted ? "text-[#F7F2E8]/60" : "text-[#5C6B5F]"
                }`}
              >
                {tier.priceNote}
              </div>

              <p
                className={`mt-6 text-sm leading-relaxed ${
                  tier.highlighted ? "text-[#F7F2E8]/80" : "text-[#5C6B5F]"
                }`}
              >
                {tier.description}
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        tier.highlighted ? "text-[#B8924A]" : "text-[#B8924A]"
                      }`}
                      strokeWidth={3}
                    />
                    <span
                      className={
                        tier.highlighted ? "text-[#F7F2E8]/90" : "text-[#5C6B5F]"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/apply"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-[#B8924A] text-[#1A2F26] hover:bg-[#D4AF6E]"
                    : "border border-[#1A2F26] text-[#1A2F26] hover:bg-[#1A2F26] hover:text-[#F7F2E8]"
                }`}
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
