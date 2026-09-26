import { notFound } from "next/navigation";
import About from "@/components/About/About";
import CommandMenu from "@/components/CommandMenu";
import Contact from "@/components/Contact/Contact";
import Credentials from "@/components/Credentials/Credentials";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import SpotlightTracker from "@/components/SpotlightTracker";
import { getContent, isLocale } from "@/content";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getContent(lang);

  return (
    <>
      <SpotlightTracker />
      <Nav locale={lang} t={t.nav} />
      <CommandMenu locale={lang} t={t.command} sections={t.nav.sections} />
      <main className="relative z-10">
        <Hero t={t.hero} />
        <Marquee items={t.marquee} />
        <About t={t.about} />
        <Experience t={t.experience} />
        <Projects t={t.work} />
        <Skills t={t.skills} />
        <Credentials t={t.credentials} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
