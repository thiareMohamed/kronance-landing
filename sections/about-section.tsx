"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Gem } from "lucide-react";
import { useTranslations } from "next-intl";
import { CTASection } from "@/components/cta-section";
import { SectionWrapper } from "@/components/section-wrapper";

const icons = [Compass, Eye, Gem];

export function AboutSection() {
  const t = useTranslations("about");
  const values = t.raw("values") as Array<{ title: string; description: string }>;

  return (
    <>
      <SectionWrapper id="about" eyebrow={t("eyebrow")} title={t("title")}>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <p className="text-base leading-7 text-muted-foreground">{t("description")}</p>
          <div className="space-y-4">
            {values.map((value, index) => {
              const Icon = icons[index] ?? Compass;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="rounded-2xl border border-border/70 bg-card/70 p-5"
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                  <h3 className="mt-3 text-base font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
      <CTASection />
    </>
  );
}
