import ContentSwitcher from "@/components/carrucel";
import { AnimatedBeamDemo } from "@/components/ecosystem";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import ProblemSection from "@/components/ProblemSection";
import Servicegrid from "@/components/serviceGrid";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <Navbar />
      <div className="bg-gradient-to-tl from-yellow-300 via-yellow-400 to-yellow-500">
        <Hero />
      </div>
      <ProblemSection />
      <AnimatedBeamDemo />
      <ContentSwitcher />
      <Servicegrid />
      <Pricing />
      <Footer />
    </div>
  );
}
