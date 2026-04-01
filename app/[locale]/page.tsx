import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AISection } from "@/sections/ai-section";
import { AboutSection } from "@/sections/about-section";
import { CorePlatformSection } from "@/sections/core-platform-section";
import { ContactSection } from "@/sections/contact-section";
import { FAQSection } from "@/sections/faq-section";
import { FeaturesSection } from "@/sections/features-section";
import { FinalCtaSection } from "@/sections/final-cta-section";
import { HeroSection } from "@/sections/hero-section";
import { HowItWorksSection } from "@/sections/how-it-works-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SecuritySection } from "@/sections/security-section";
import { ServicesSection } from "@/sections/services-section";
import { TechnologySection } from "@/sections/technology-section";
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
        <AboutSection />
        <ServicesSection />
        <CorePlatformSection />
        <FeaturesSection />
        <ProjectsSection />
        <HowItWorksSection />
        <TechnologySection />
        <UseCasesSection />
        <AISection />
        <SecuritySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
