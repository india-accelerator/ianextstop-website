import { Navbar01 } from '@/components/ui/navbar-01';
import { HeroSection } from '@/components/ui/hero-section';
import { CounterSection } from '@/components/ui/counter-section';
import { AboutSection } from '@/components/ui/about-section';
import { ProgramExpectSection } from '@/components/ui/program-expect-section';
import { EligibilityCriteriaSection } from '@/components/ui/eligibility-criteria-section';
import { BenefitsSection } from '@/components/ui/benefits-section';
import { TimelineSection } from '@/components/ui/timeline-section';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <div className="relative w-full">
      <Navbar01 />
      <HeroSection />
      <CounterSection />
      <AboutSection />
      <ProgramExpectSection />
      <EligibilityCriteriaSection />
      <BenefitsSection />
      <TimelineSection />
      <Footer />
    </div>
  );
}
