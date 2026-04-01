import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export function TestimonialCard({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <article className="relative rounded-2xl border border-border/70 bg-card/70 p-6 backdrop-blur">
      <Quote
        className="mb-4 h-6 w-6 text-cyan-400"
        aria-hidden
      />
      <p className="text-sm leading-relaxed text-muted-foreground">{quote}</p>
      <footer className="mt-5 border-t border-border/60 pt-4">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">
          {role} · {company}
        </p>
      </footer>
    </article>
  );
}
