"use client";

import { useTranslations } from "next-intl";
import { FAQAccordion } from "@/components/faq-accordion";
import { Container } from "@/components/ui/container";

const ids = ["1", "2", "3", "4", "5"];

export function FAQSection() {
  const t = useTranslations("faq");

  const items = ids.map((id) => ({
    question: t(`items.${id}.question`),
    answer: t(`items.${id}.answer`),
  }));

  return (
    <section id="faq" className="py-20">
      <Container className="max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">{t("title")}</h2>
        </div>
        <FAQAccordion items={items} />
      </Container>
    </section>
  );
}
