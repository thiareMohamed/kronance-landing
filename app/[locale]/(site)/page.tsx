import { AboutSection } from "@/sections/about-section";
import { HeroSection } from "@/sections/hero-section";
import { ServicesSection } from "@/sections/services-section";
import { TrustSection } from "@/sections/trust-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}
