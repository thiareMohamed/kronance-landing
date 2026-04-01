import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AISection } from "@/sections/ai-section";
import { CorePlatformSection } from "@/sections/core-platform-section";
import { DeveloperExperienceSection } from "@/sections/developer-experience-section";
import { FAQSection } from "@/sections/faq-section";
import { FeaturesSection } from "@/sections/features-section";
import { FinalCtaSection } from "@/sections/final-cta-section";
import { HeroSection } from "@/sections/hero-section";
import { HowItWorksSection } from "@/sections/how-it-works-section";
import { PricingSection } from "@/sections/pricing-section";
import { SecuritySection } from "@/sections/security-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { TrustSection } from "@/sections/trust-section";
import { UseCasesSection } from "@/sections/use-cases-section";

export default function LocalizedHomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <CorePlatformSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DeveloperExperienceSection />
        <UseCasesSection />
        <AISection />
        <SecuritySection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
