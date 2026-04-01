"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import {
  Building2,
  Layers3,
  Rocket,
  UserRoundCog,
  type LucideIcon,
} from "lucide-react";

type UseCaseConfig = {
  key: "developers" | "startups" | "enterprises" | "devopsTeams";
  icon: LucideIcon;
};

const USE_CASES: UseCaseConfig[] = [
  { key: "developers", icon: Layers3 },
  { key: "startups", icon: Rocket },
  { key: "enterprises", icon: Building2 },
  { key: "devopsTeams", icon: UserRoundCog },
];

export function UseCasesSection() {
  const t = useTranslations("useCases");

  return (
    <section id="use-cases" className="py-20">
      <Container className="max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {USE_CASES.map(({ key, icon: Icon }, index) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-[0_12px_40px_-24px_rgba(8,145,178,0.45)] backdrop-blur"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/12 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{t(`${key}.title`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(`${key}.description`)}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
