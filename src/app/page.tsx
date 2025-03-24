import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import MiniNavbar from "@/components/Navbar/MiniNavbar";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MiniNavbar />
      <Footer />
    </>
  );
}
