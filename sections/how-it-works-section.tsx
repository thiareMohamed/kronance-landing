"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function HowItWorksSection() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as { title: string; description: string }[];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl font-semibold md:text-4xl">{t("title")}</h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-border/80 bg-card/70 p-6 backdrop-blur"
          >
            <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {index + 1}
            </div>
            <h3 className="text-xl font-medium">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
