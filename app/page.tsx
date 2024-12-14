import ContentSwitcher from "@/components/carrucel";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProblemSection from "@/components/ProblemSection";
import Servicegrid from "@/components/serviceGrid";
import TeamSection from "@/components/teamsection";

export default function Home() {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <Navbar />
      <div className="bg-gradient-to-tl from-yellow-300 via-yellow-400 to-yellow-500">
        <Hero />
      </div>
      <ProblemSection />
      <ContentSwitcher />
      <Servicegrid />
      <TeamSection />
      {/*<Pricing />*/}
    </div>
  );
}
