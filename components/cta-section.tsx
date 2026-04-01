"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/section-wrapper";

export function CTASection() {
  const t = useTranslations("ctaSection");

  return (
    <SectionWrapper id="cta" title={t("title")} className="py-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="rounded-3xl border border-border/70 bg-card/80 p-8 md:p-10"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">{t("title")}</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">{t("description")}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_-8px_rgba(34,211,238,0.6)] transition hover:brightness-110"
          >
            {t("button")}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
