"use client";

import { motion } from "framer-motion";
import { Star, Quote, Clock, Calendar } from "lucide-react";
import Image from "next/image";

const book = {
  title: "Insider",
  author: "Red Ferne",
  genre: "Spy Thriller",
  year: "2026",
  rating: 5.0,
  readDate: "November 2026",
  readTime: "10 hours",
  cover: "/images/books/insider.jpg",
  review:
    "Most spy fiction is about gadgets and gunfights. Insider is about what it feels like to do the work, and what that work costs the person doing it. Red Ferne is a retired Australian intelligence professional and former soldier, and it shows on nearly every page, in the need-to-know tension, the legal limits on what an analyst may look at, and the dry comedy of a soldier trying to decode civilian office life. Nat West carries the novel. She is stubborn, sharp-tongued and very bad at asking for help, and her flaws cost her. Her PTSD is treated with unusual honesty, from the vivid flashback in the interrogation room to small habits like checking exits in a Canberra bar. The Baghdad chapters are the high point, and the Brisbane climax is a smart escalation built on analysts hunting phone numbers in data while the clock runs down. The supporting cast gives the book warmth, and Nat's slow move from lone wolf to team player is believable throughout. A strong, authentic thriller for readers who prefer procedure and character over explosions.",
  reviewer: "Dr. Tomiwa Johnson",
  reviewerRole: "Co-Founder and Selection Committee Chair",
  themes: [
    "Terrorism & Global Threats",
    "Betrayal & Trust",
    "Intelligence & Espionage",
    "Courage & Sacrifice",
  ],
};

export function WhatWeReading() {
  return (
    <section
      id="what-we-reading"
      className="relative bg-[#F7F2E8] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B8924A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
              What We Are Reading
            </span>
            <span className="h-px w-10 bg-[#B8924A]" />
          </div>

          <h2 className="font-serif-display text-3xl font-bold leading-tight text-[#1A2F26] sm:text-4xl md:text-5xl text-balance">
            The book on our shelf right now
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#5C6B5F] md:text-lg">
            Each cycle, our community reads one book together in full. Here is
            the title currently on our reading shelf, reviewed personally by Dr.
            Tomiwa Johnson.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16 items-start"
        >
          {/* Book cover */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-2xl shadow-[#1A2F26]/30">
              <Image
                src={book.cover}
                alt={`${book.title} by ${book.author} book cover`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden md:flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#B8924A] text-[#1A2F26] shadow-xl">
              <div className="font-serif-display text-2xl font-bold leading-none">
                {book.rating.toFixed(1)}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em]">
                / 5
              </div>
            </div>
          </div>

          {/* Book details and review */}
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#B8924A]">
              <span className="rounded-full bg-[#1A2F26] px-3 py-1 text-[#F7F2E8]">
                {book.genre}
              </span>
              <span className="flex items-center gap-1 text-[#5C6B5F]">
                <Calendar className="h-3.5 w-3.5" />
                {book.readDate}
              </span>
              <span className="flex items-center gap-1 text-[#5C6B5F]">
                <Clock className="h-3.5 w-3.5" />
                {book.readTime}
              </span>
            </div>

            <h3 className="mt-4 font-serif-display text-3xl font-bold text-[#1A2F26] md:text-4xl">
              {book.title}
            </h3>
            <p className="mt-1 text-base text-[#5C6B5F]">
              by <span className="font-semibold text-[#1A2F26]">{book.author}</span> &middot; {book.year}
            </p>

            <div className="mt-4 flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i <= Math.round(book.rating)
                      ? "fill-[#B8924A] text-[#B8924A]"
                      : "text-[#E5DCC4]"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm font-semibold text-[#5C6B5F]">
                {book.rating.toFixed(1)} / 5
              </span>
            </div>

            {/* Themes */}
            <div className="mt-5 flex flex-wrap gap-2">
              {book.themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-[#E5DCC4] bg-white px-3 py-1 text-xs font-medium text-[#5C6B5F]"
                >
                  {theme}
                </span>
              ))}
            </div>

            {/* Review */}
            <div className="mt-6 rounded-2xl border border-[#E5DCC4] bg-white p-6 md:p-8">
              <Quote className="h-7 w-7 text-[#B8924A]/50" />
              <p className="mt-3 text-sm leading-relaxed text-[#5C6B5F] md:text-base">
                {book.review}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-[#E5DCC4] pt-5">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#1A2F26]">
                  <Image
                    src="/images/logo.png"
                    alt={book.reviewer}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1A2F26]">
                    {book.reviewer}
                  </div>
                  <div className="text-[11px] text-[#5C6B5F]">
                    {book.reviewerRole}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
