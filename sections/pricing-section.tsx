import { useTranslations } from "next-intl";
import { PricingCard } from "@/components/pricing-card";
import { Container } from "@/components/ui/container";

type TierKey = "free" | "pro" | "enterprise";

const tiers: TierKey[] = ["free", "pro", "enterprise"];

export function PricingSection() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="relative py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <PricingCard
              key={tier}
              name={t(`plans.${tier}.name`)}
              price={t(`plans.${tier}.price`)}
              description={t(`plans.${tier}.description`)}
              features={[
                t(`plans.${tier}.features.0`),
                t(`plans.${tier}.features.1`),
                t(`plans.${tier}.features.2`),
              ]}
              cta={t(`plans.${tier}.cta`)}
              highlighted={tier === "pro"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
