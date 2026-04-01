import { MessageCircleCode } from "lucide-react";
import { useTranslations } from "next-intl";
import { TestimonialCard } from "@/components/testimonial-card";
import { Container } from "@/components/ui/container";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="py-16">
      <Container>
        <div className="mb-8 flex items-center gap-3">
          <MessageCircleCode className="h-5 w-5 text-cyan-400" aria-hidden />
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            {t("title")}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <TestimonialCard
            quote={t("items.0.quote")}
            name={t("items.0.name")}
            role={t("items.0.role")}
            company={t("items.0.company")}
          />
          <TestimonialCard
            quote={t("items.1.quote")}
            name={t("items.1.name")}
            role={t("items.1.role")}
            company={t("items.1.company")}
          />
          <TestimonialCard
            quote={t("items.2.quote")}
            name={t("items.2.name")}
            role={t("items.2.role")}
            company={t("items.2.company")}
          />
        </div>
      </Container>
    </section>
  );
}
