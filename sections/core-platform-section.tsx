"use client";

import { motion } from "framer-motion";
import { Bot, CloudCog, CodeXml, Globe, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { PlatformCard } from "@/components/platform-card";
import { Container } from "@/components/ui/container";

export function CorePlatformSection() {
  const t = useTranslations("corePlatform");

  const items = [
    {
      icon: CloudCog,
      title: t("items.devops.title"),
      description: t("items.devops.description"),
    },
    {
      icon: ShieldCheck,
      title: t("items.devsecops.title"),
      description: t("items.devsecops.description"),
    },
    {
      icon: Bot,
      title: t("items.ai.title"),
      description: t("items.ai.description"),
    },
    {
      icon: Globe,
      title: t("items.webMobile.title"),
      description: t("items.webMobile.description"),
    },
    {
      icon: CodeXml,
      title: t("items.apiBackend.title"),
      description: t("items.apiBackend.description"),
    },
  ];

  return (
    <section id="platform" className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="mb-10 space-y-3 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
            {t("eyebrow")}
          </p>
          <h2 className="text-balance text-3xl font-semibold text-foreground md:text-4xl">
            {t("title")}
          </h2>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <PlatformCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
