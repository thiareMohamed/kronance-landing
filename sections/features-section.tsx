"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Rocket, ShieldCheck, Workflow } from "lucide-react";
import { useTranslations } from "next-intl";
import { FeatureCard } from "@/components/feature-card";
import { Container } from "@/components/ui/container";

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-16">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FeatureCard
              icon={Rocket}
              title={t("items.realtime.title")}
              description={t("items.realtime.description")}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <FeatureCard
              icon={Layers}
              title={t("items.iac.title")}
              description={t("items.iac.description")}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <FeatureCard
              icon={Cpu}
              title={t("items.automation.title")}
              description={t("items.automation.description")}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <FeatureCard
              icon={ShieldCheck}
              title={t("items.secure.title")}
              description={t("items.secure.description")}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FeatureCard
              icon={Workflow}
              title={t("items.multiEnv.title")}
              description={t("items.multiEnv.description")}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
