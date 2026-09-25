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
  title: "ThoughtReadersClub | A Private Literary Society for Authors",
  description: "ThoughtReadersClub is a private literary society that gives independent authors a structured twelve month residency with an elite global reading community. Co-founded by Dr. Tomiwa Johnson.",
  keywords: ["ThoughtReadersClub", "literary society", "book club", "readers club", "independent authors", "Dr. Tomiwa Johnson", "author residency", "literary engagement"],
  authors: [{ name: "Dr. Tomiwa Johnson" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "ThoughtReadersClub | A Private Literary Society for Authors",
    description: "A structured twelve month residency for independent authors. Co-founded by Dr. Tomiwa Johnson.",
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
