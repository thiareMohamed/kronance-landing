"use client";

import { motion } from "framer-motion";
import { Copy, Terminal } from "lucide-react";

type CodeBlockProps = {
  title: string;
  language: string;
  code: string;
};

export function CodeBlock({ title, language, code }: CodeBlockProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-border/70 bg-zinc-950/95 p-5 shadow-[0_20px_70px_-38px_rgba(8,145,178,0.8)]"
    >
      <header className="mb-4 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-zinc-400">
          <Terminal className="h-4 w-4 text-cyan-400" aria-hidden />
          <span>{title}</span>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-lg border border-zinc-800 px-2 py-1 text-xs text-zinc-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
          aria-label={`Copy ${language} snippet`}
        >
          <Copy className="h-3.5 w-3.5" aria-hidden />
          {language}
        </button>
      </header>
      <pre className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm leading-7 text-zinc-100">
        <code>{code}</code>
      </pre>
    </motion.article>
  );
}
