type PricingCardProps = {
  name: string;
  description: string;
  price: string;
  highlighted?: boolean;
  features: string[];
  cta: string;
};

export function PricingCard({
  name,
  description,
  price,
  highlighted = false,
  features,
  cta,
}: PricingCardProps) {
  return (
    <article
      className={`rounded-3xl border p-8 transition-all ${
        highlighted
          ? "border-cyan-400/60 bg-gradient-to-b from-cyan-500/10 to-violet-500/10 shadow-[0_0_50px_-20px_rgba(34,211,238,0.8)]"
          : "border-border/60 bg-card/70"
      } backdrop-blur`}
    >
      <p className="text-sm font-medium text-cyan-400">{name}</p>
      <h3 className="mt-3 text-2xl font-semibold text-foreground">{price}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold ${
          highlighted
            ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950"
            : "border border-border/60 bg-background/70 text-foreground"
        }`}
      >
        {cta}
      </button>
    </article>
  );
}
