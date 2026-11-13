"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Clock, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const books = [
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Historical Fiction",
    year: "2003",
    rating: 4.9,
    readDate: "March 2025",
    readTime: "9 hours",
    cover: "/images/books/book-1.jpg",
    review:
      "A devastating story of friendship, betrayal, and redemption set against the backdrop of Afghanistan from the fall of the monarchy to the Taliban. Hosseini writes with a compassion that never tips into sentimentality. Our reading circle spent three weeks on the final chapters alone, and the conversation about what we owe the people who once saved us is still going.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    genre: "Historical Fiction",
    year: "2006",
    rating: 4.8,
    readDate: "November 2024",
    readTime: "11 hours",
    cover: "/images/books/book-2.jpg",
    review:
      "Adichie traces three lives through the Biafran war with a steadiness that makes the horror land harder, not softer. She writes about love and politics as if they are the same conversation, which of course they are. The novel became the most discussed title of our 2024 cycle and changed how several members think about historical fiction.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    genre: "Literary Fiction",
    year: "1997",
    rating: 4.9,
    readDate: "August 2024",
    readTime: "10 hours",
    cover: "/images/books/book-3.jpg",
    review:
      "Roy builds a world so textured you can smell the mangoes rotting in the river. The story of twins growing up in Kerala unfolds backward and forward at once, every sentence carrying the weight of what is about to happen. A masterclass in structure that does not sacrifice feeling. The first paragraph alone is worth the price of the book.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    genre: "Literary Fiction",
    year: "1958",
    rating: 4.9,
    readDate: "May 2024",
    readTime: "6 hours",
    cover: "/images/books/book-4.jpg",
    review:
      "The novel that reframed African literature for the world. Achebe tells the story of Okonkwo and the arrival of the colonizers with a clarity that still feels urgent almost seventy years later. We selected it for the residency because every generation of readers deserves to sit with this book. No member has ever regretted the time spent here.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    genre: "Literary Fiction",
    year: "1987",
    rating: 4.8,
    readDate: "February 2025",
    readTime: "10 hours",
    cover: "/images/books/book-5.jpg",
    review:
      "Morrison writes about slavery and motherhood with a ferocity that refuses to let the reader look away. The ghost is real and the ghost is metaphor and neither reading diminishes the other. Beloved is one of those rare books that changes a little every time you return to it. Our circle read it twice during the residency year.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "The Remains of the Day",
    author: "Kazuo Ishiguro",
    genre: "Literary Fiction",
    year: "1989",
    rating: 4.9,
    readDate: "October 2024",
    readTime: "7 hours",
    cover: "/images/books/book-6.jpg",
    review:
      "An English butler takes a rare motoring holiday and confronts a life of service that may have been a life of waste. Ishiguro says more in what he leaves out than most writers do in what they include. The final scene on the pier still comes up in our discussions months later. Quiet, devastating, perfectly constructed.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    genre: "Magical Realism",
    year: "1967",
    rating: 4.8,
    readDate: "January 2025",
    readTime: "14 hours",
    cover: "/images/books/book-7.jpg",
    review:
      "The Buendia family rises and falls across seven generations in the fictional town of Macondo, and Marquez makes every page feel like both myth and history. Magical realism at its most generous. The novel demands patience and rewards it tenfold. We scheduled a longer residency cycle for this one and it earned every week.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Historical Fiction",
    year: "2005",
    rating: 4.7,
    readDate: "July 2024",
    readTime: "11 hours",
    cover: "/images/books/book-8.jpg",
    review:
      "Narrated by Death, set in Nazi Germany, and somehow full of warmth. Zusak tells the story of a foster girl who steals books and shares them with neighbors and with a Jewish man hidden in her basement. The prose is inventive without being precious. A book about the quiet ways people save each other with words.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
  {
    title: "Americanah",
    author: "Chimamanda Ngozi Adichie",
    genre: "Literary Fiction",
    year: "2013",
    rating: 4.8,
    readDate: "April 2025",
    readTime: "12 hours",
    cover: "/images/books/book-9.jpg",
    review:
      "A young Nigerian woman immigrates to the United States and starts a blog about race from the perspective of a non American Black person. Adichie writes about love, exile, and identity with a sharpness that never loses tenderness. Americanah became the gateway book for several new members of our circle and we keep returning to it.",
    reviewer: "Dr. Tomiwa Johnson",
    reviewerRole: "Committee Chair",
  },
];

const genres = [
  "All",
  "Literary Fiction",
  "Historical Fiction",
  "Magical Realism",
];

export default function BooksPage() {
  const [filter, setFilter] = useState("All");

  const filteredBooks =
    filter === "All" ? books : books.filter((b) => b.genre === filter);

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
                {/* Real book cover image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl bg-[#1A2F26]">
                  <Image
                    src={book.cover}
                    alt={`${book.title} by ${book.author} book cover`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={idx < 3}
                  />
                </div>
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
                      <div className="relative h-8 w-8 overflow-hidden rounded-full bg-[#1A2F26]">
                        <Image
                          src="/images/logo.png"
                          alt={book.reviewer}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
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
