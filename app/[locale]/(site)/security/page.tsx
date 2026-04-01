import { SecuritySection } from "@/sections/security-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { CTASection } from "@/components/cta-section";

export default function SecurityPage() {
  return (
    <main>
      <SecuritySection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
