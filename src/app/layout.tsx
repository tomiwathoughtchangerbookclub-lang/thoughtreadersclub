import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ThoughtReadersClub | A Private Literary Society for Curious Minds",
  description: "ThoughtReadersClub is a private literary society that connects brilliant independent authors with an elite global reading community for a year long journey of deep literary engagement. Founded by Dr. Tomiwa Johnson.",
  keywords: ["ThoughtReadersClub", "literary society", "book club", "readers club", "independent authors", "Dr. Tomiwa Johnson", "book community", "literary engagement"],
  authors: [{ name: "Dr. Tomiwa Johnson" }],
  openGraph: {
    title: "ThoughtReadersClub | A Private Literary Society",
    description: "Where intellectual curiosity meets companionable consideration. We connect brilliant independent authors with an elite global reading community.",
    siteName: "ThoughtReadersClub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThoughtReadersClub",
    description: "A private literary society for the curious mind.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
