import { Check, Sparkles, Rocket, Building2 } from "lucide-react";

const plans = [
  {
    name: "AI Starter Package",
    price: "₹30,000",
    icon: Sparkles,
    highlights: [
      "AI-assisted content (8 posts/month)",
      "Smart ad copies (2 campaigns)",
      "Basic analytics dashboard",
      "Keyword & topic research",
    ],
    targets: ["+20% CTR", "+10% conversions"],
  },
  {
    name: "AI Growth Package",
    price: "₹75,000",
    icon: Rocket,
    highlights: [
      "Full content engine (20 posts/month)",
      "Multichannel ads (Search + Social)",
      "Landing page experiments (A/B)",
      "Lead scoring using AI",
    ],
    targets: ["3–5× leads", "+25–35% conversions"],
    featured: true,
  },
  {
    name: "AI Enterprise Package",
    price: "₹1,50,000",
    icon: Building2,
    highlights: [
      "Dedicated strategist + creatives",
      "Attribution & cohort analytics",
      "Predictive budgets & pacing",
      "Custom AI model for your brand",
    ],
    targets: ["+40% ROI", "Scale with predictability"],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Choose Your AI Marketing Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Scalable, results-driven solutions designed to grow with your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-luxury ${
                p.featured ? "ring-2 ring-gold-500" : "border-border/60"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-600/20">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
              </div>

              <div className="mb-6 text-3xl font-bold">
                {p.price}{" "}
                <span className="text-sm font-normal text-muted-foreground">
                  / month
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <Check className="w-4 h-4 text-gold-600" /> {h}
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-border/50 bg-secondary/30 p-4 text-sm">
                <div className="mb-2 font-semibold text-foreground">
                  Success Metrics Target
                </div>
                <ul className="space-y-1">
                  {p.targets.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 text-foreground/80"
                    >
                      <Check className="w-4 h-4 text-platinum-600" /> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-gold-600"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
