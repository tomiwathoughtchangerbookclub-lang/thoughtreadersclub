"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Why the long tail matters more than the launch week",
    excerpt:
      "Most publishing attention compresses into the first seven days of a release. We argue that the books worth keeping deserve the opposite treatment: a slow, sustained conversation that compounds for years. Here is what we have learned from running twelve month residencies.",
    date: "March 2025",
    readTime: "8 min read",
    category: "Craft",
    image: "/images/journal-1.jpg",
  },
  {
    title: "Reading slowly in a culture built for scrolling",
    excerpt:
      "The reading circle format was designed as an antidote to surface level commentary. We explore how a small group of serious readers can turn a single book into a year of structured engagement, and why depth still wins over breadth for the books that matter.",
    date: "February 2025",
    readTime: "6 min read",
    category: "Community",
    image: "/images/journal-2.jpg",
  },
  {
    title: "What the selection committee looks for in a submission",
    excerpt:
      "A look inside the reading room. Our committee chair Dr. Tomiwa Johnson walks through the four qualities that consistently surface in books we accept into the residency, and the small things in a submission that quietly move a title to the top of the pile.",
    date: "January 2025",
    readTime: "10 min read",
    category: "Behind the Committee",
    image: "/images/journal-3.jpg",
  },
];

export function Journal() {
  return (
    <section id="journal" className="relative bg-[#F7F2E8] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B8924A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
                The Reading Room
              </span>
            </div>
            <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
              Notes, essays, and conversations from our community
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#1A2F26] transition-colors hover:text-[#B8924A]"
          >
            Read the journal
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5DCC4] bg-white transition-all hover:shadow-xl hover:shadow-[#1A2F26]/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F26]/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-[#1A2F26]/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#B8924A]">
                  {post.category}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-[#5C6B5F]">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="h-3 w-px bg-[#E5DCC4]" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 font-serif-display text-xl font-bold leading-snug text-[#1A2F26] transition-colors group-hover:text-[#B8924A]">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5C6B5F]">
                  {post.excerpt}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1A2F26] transition-colors hover:text-[#B8924A]"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
