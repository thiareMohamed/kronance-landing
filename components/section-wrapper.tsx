"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={className ?? "py-20"}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4 }}
          className="mb-10 max-w-3xl"
        >
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </motion.div>
        {children}
      </Container>
    </section>
  );
}
