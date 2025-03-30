import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import MiniNavbar from "@/components/Navbar/MiniNavbar";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skillls/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MiniNavbar />
      <About />
      <Skills />
      <Footer />
    </>
  );
}
