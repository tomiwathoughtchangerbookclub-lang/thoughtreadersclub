import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Residency } from "@/components/site/residency";
import { WhyChooseUs } from "@/components/site/why-choose";
import { Story } from "@/components/site/story";
import { Committee } from "@/components/site/committee";
import { Voices } from "@/components/site/voices";
import { Faq } from "@/components/site/faq";
import { ContactForm } from "@/components/site/contact-form";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2E8]">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Residency />
        <WhyChooseUs />
        <Story />
        <Committee />
        <Voices />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
