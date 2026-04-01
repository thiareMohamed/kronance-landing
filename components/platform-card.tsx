import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type PlatformCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
};

export function PlatformCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: PlatformCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_35px_-12px_rgba(99,102,241,0.85)]"
    >
      <div className="mb-4 inline-flex rounded-xl border border-primary/30 bg-primary/10 p-3 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/0 to-cyan-400/0 opacity-0 transition group-hover:opacity-100" />
    </motion.article>
  );
}
