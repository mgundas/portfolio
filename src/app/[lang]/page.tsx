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

export default function Home() {
  return (
    <>
      <SpotlightTracker />
      <Nav />
      <CommandMenu />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
