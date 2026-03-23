import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <SocialProof />
      <Services />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
