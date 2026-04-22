import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Pages from "../components/Pages";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Pages />
      <Footer />
    </>
  );
}
