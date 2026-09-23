"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, BookOpen, Clock, Quote } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

// CSS-designed book covers with different color combinations
const books = [
  {
    title: "The Quiet Hours",
    author: "Lena Marchetti",
    genre: "Literary Fiction",
    year: "2024",
    rating: 4.9,
    readDate: "March 2025",
    readTime: "9 hours",
    coverColor: "#1A2F26",
    coverAccent: "#B8924A",
    coverText: "#F7F2E8",
    review:
      "A meditation on grief told through the lens of a woman returning to her childhood village in northern Italy. Marchetti writes with a patience that mirrors her subject matter. Every sentence feels weighed before it is set down. Our reading circle spent three weeks on the final chapter alone, and not a single member wanted it to end.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "Salt and Memory",
    author: "Olu Adeyemi",
    genre: "Memoir",
    year: "2024",
    rating: 4.8,
    readDate: "November 2024",
    readTime: "7 hours",
    coverColor: "#2D4538",
    coverAccent: "#D4AF6E",
    coverText: "#F7F2E8",
    review:
      "Adeyemi traces his family through three generations and three continents, anchoring each chapter in a single object his grandmother kept. The result is a memoir that reads like a novel and weighs like one too. We selected it for the 2024 residency cycle and it became the most discussed title of the year.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "The Cartographer's Daughter",
    author: "Imani Okoye",
    genre: "Historical Fiction",
    year: "2023",
    rating: 4.9,
    readDate: "August 2024",
    readTime: "12 hours",
    coverColor: "#3D2817",
    coverAccent: "#B8924A",
    coverText: "#F7F2E8",
    review:
      "Set across Lagos and Lisbon in the 1940s, this novel follows a young woman who inherits her father's mapmaking business and discovers that his maps carried messages for the resistance. Okoye builds a world so textured you can smell the ink. A masterclass in plotting without sacrificing interiority.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "Borrowed Light",
    author: "Sara Lindqvist",
    genre: "Essays",
    year: "2023",
    rating: 4.7,
    readDate: "May 2024",
    readTime: "6 hours",
    coverColor: "#1A2F26",
    coverAccent: "#D4AF6E",
    coverText: "#F7F2E8",
    review:
      "Twelve essays on the books that shaped a life. Lindqvist writes about reading the way most people write about love. The essay on rereading Middlemarch at forty should be required reading for anyone who has ever returned to a book and found it changed.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "The Weight of Small Things",
    author: "Kwame Asante",
    genre: "Short Stories",
    year: "2024",
    rating: 4.8,
    readDate: "February 2025",
    readTime: "5 hours",
    coverColor: "#2D4538",
    coverAccent: "#B8924A",
    coverText: "#F7F2E8",
    review:
      "Nine stories, each centered on a single object that changes hands. A wristwatch, a letter, a house key. Asante finds the entire weight of human connection in the smallest transactions. The title story alone is worth the collection, but you will reread all of them.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "After the Tide",
    author: "Mira Costa",
    genre: "Literary Fiction",
    year: "2023",
    rating: 4.9,
    readDate: "October 2024",
    readTime: "10 hours",
    coverColor: "#1A2F26",
    coverAccent: "#D4AF6E",
    coverText: "#F7F2E8",
    review:
      "A coastal town rebuilds after a devastating flood, and Costa follows six families across the first year of recovery. What could have been a disaster narrative becomes a quiet study of community, resilience, and the things people choose to save. The final scene still comes up in our discussions months later.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "The Untranslated",
    author: "Daniel Ferreira",
    genre: "Literary Fiction",
    year: "2024",
    rating: 4.7,
    readDate: "January 2025",
    readTime: "8 hours",
    coverColor: "#3D2817",
    coverAccent: "#D4AF6E",
    coverText: "#F7F2E8",
    review:
      "A novel about a translator who becomes obsessed with a word in a foreign language that has no equivalent in his own. Ferreira turns a linguistic puzzle into a story about love, distance, and the limits of what we can say to each other. Quietly devastating.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "Houses That Remember",
    author: "Nadia Petrov",
    genre: "Memoir",
    year: "2023",
    rating: 4.8,
    readDate: "July 2024",
    readTime: "7 hours",
    coverColor: "#2D4538",
    coverAccent: "#B8924A",
    coverText: "#F7F2E8",
    review:
      "Petrov returns to every house she has ever lived in and writes about what the walls would say if they could. Part memoir, part architectural meditation. The chapter on her grandmother's apartment in Prague is one of the finest pieces of writing we have read in years.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "The Long Way Home",
    author: "Tobias Brandt",
    genre: "Literary Fiction",
    year: "2024",
    rating: 4.9,
    readDate: "April 2025",
    readTime: "11 hours",
    coverColor: "#1A2F26",
    coverAccent: "#B8924A",
    coverText: "#F7F2E8",
    review:
      "A retired professor walks from Berlin to his childhood home in Romania, fifty years after leaving. Brandt turns a physical journey into an excavation of everything his character has avoided saying for half a century. The pace is slow, deliberate, and completely earned. You will not want it to end.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
];

const genres = ["All", "Literary Fiction", "Memoir", "Historical Fiction", "Essays", "Short Stories"];

function BookCover({ book }: { book: (typeof books)[0] }) {
  return (
    <div
      className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl flex flex-col justify-between p-6"
      style={{
        backgroundColor: book.coverColor,
        color: book.coverText,
      }}
    >
      {/* Decorative border */}
      <div
        className="absolute inset-3 border rounded-md pointer-events-none"
        style={{ borderColor: `${book.coverAccent}40` }}
      />
      {/* Top: genre */}
      <div className="relative z-10">
        <div
          className="text-[10px] uppercase tracking-[0.25em] font-semibold"
          style={{ color: book.coverAccent }}
        >
          {book.genre}
        </div>
      </div>
      {/* Middle: title and author */}
      <div className="relative z-10">
        <h3 className="font-serif-display text-xl md:text-2xl font-bold leading-tight">
          {book.title}
        </h3>
        <div
          className="mt-3 h-px w-12"
          style={{ backgroundColor: book.coverAccent }}
        />
        <p className="mt-3 text-sm font-medium opacity-80">{book.author}</p>
      </div>
      {/* Bottom: decoration */}
      <div className="relative z-10 flex items-center justify-between">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full"
          style={{ backgroundColor: `${book.coverAccent}30` }}
        >
          <BookOpen
            className="h-4 w-4"
            style={{ color: book.coverAccent }}
          />
        </div>
        <div
          className="text-[10px] uppercase tracking-[0.2em] opacity-60"
        >
          {book.year}
        </div>
      </div>
      {/* Spine effect */}
      <div
        className="absolute left-0 top-0 bottom-0 w-2"
        style={{
          backgroundColor: `${book.coverAccent}25`,
          boxShadow: "inset -1px 0 3px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}

export default function BooksPage() {
  const [filter, setFilter] = useState("All");

  const filteredBooks =
    filter === "All"
      ? books
      : books.filter((b) => b.genre === filter);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2E8]">
      <SiteHeader solid />

      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#1A2F26] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2F26] via-[#1A2F26] to-[#2D4538]" />
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#B8924A]/10 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#B8924A]/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B8924A]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B8924A]">
                Books We Have Read and Reviewed
              </span>
            </div>
            <h1 className="font-serif-display text-4xl font-bold leading-tight text-[#F7F2E8] sm:text-5xl md:text-6xl text-balance">
              The reading shelf
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#F7F2E8]/75 md:text-lg">
              Every book on this shelf was selected for a residency cycle, read
              in full by our community, and discussed over the course of a full
              year. Each review below was written personally by Dr. Tomiwa
              Johnson. These are the books we believe deserve a permanent place
              on your shelf.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full bg-[#F7F2E8]/10 px-4 py-2 text-sm text-[#F7F2E8]/80">
                <span className="font-bold text-[#B8924A]">{books.length}</span> books reviewed
              </div>
              <div className="rounded-full bg-[#F7F2E8]/10 px-4 py-2 text-sm text-[#F7F2E8]/80">
                Average rating: <span className="font-bold text-[#B8924A]">4.8</span> / 5
              </div>
              <div className="rounded-full bg-[#F7F2E8]/10 px-4 py-2 text-sm text-[#F7F2E8]/80">
                Curated by <span className="font-bold text-[#B8924A]">Dr. Tomiwa Johnson</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter and books grid */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Filter bar */}
          <div className="mb-12 flex flex-wrap items-center gap-2">
            <span className="mr-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#5C6B5F]">
              Filter by genre
            </span>
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setFilter(g)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === g
                    ? "bg-[#1A2F26] text-[#F7F2E8]"
                    : "border border-[#E5DCC4] bg-white text-[#5C6B5F] hover:border-[#B8924A] hover:text-[#1A2F26]"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Books grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book, idx) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="group flex flex-col"
              >
                <BookCover book={book} />
                <div className="mt-6 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i <= Math.round(book.rating)
                              ? "fill-[#B8924A] text-[#B8924A]"
                              : "text-[#E5DCC4]"
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-xs font-semibold text-[#5C6B5F]">
                        {book.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-[#5C6B5F]">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {book.readTime}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-3 font-serif-display text-xl font-bold text-[#1A2F26]">
                    {book.title}
                  </h3>
                  <p className="text-sm text-[#5C6B5F]">by {book.author}</p>

                  <div className="mt-4 rounded-xl border border-[#E5DCC4] bg-white p-5">
                    <Quote className="h-5 w-5 text-[#B8924A]/50" />
                    <p className="mt-2 text-sm leading-relaxed text-[#5C6B5F] italic">
                      {book.review}
                    </p>
                    <div className="mt-4 flex items-center gap-3 border-t border-[#E5DCC4] pt-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A2F26] text-xs font-bold text-[#B8924A]">
                        DTJ
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#1A2F26]">
                          {book.reviewer}
                        </div>
                        <div className="text-[10px] text-[#5C6B5F]">
                          {book.reviewerRole}
                        </div>
                      </div>
                      <div className="ml-auto text-[10px] uppercase tracking-[0.15em] text-[#5C6B5F]">
                        Read {book.readDate}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A2F26] py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="font-serif-display text-3xl font-bold text-[#F7F2E8] md:text-4xl text-balance">
            Want your book on this shelf?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#F7F2E8]/70">
            We accept fifteen new titles each year for the residency cycle. If
            your work belongs here, submit it for committee consideration.
          </p>
          <Link
            href="/apply"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#B8924A] px-8 py-4 text-sm font-semibold text-[#1A2F26] transition-all hover:bg-[#D4AF6E] hover:shadow-xl hover:shadow-[#B8924A]/30"
          >
            Submit your book
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
