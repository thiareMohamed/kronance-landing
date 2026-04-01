"use client";

import { motion } from "framer-motion";
import { Cloud, Cpu, Layers3 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";

const icons = [Layers3, Cloud, Cpu];

export function TechnologySection() {
  const t = useTranslations("technology");
  const items = t.raw("pillars") as Array<{ title: string; description: string }>;

  return (
    <section id="technology" className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="max-w-xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              {t("description")}
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = icons[index] ?? Layers3;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-2xl border border-border/70 bg-card/70 p-6"
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
