import { Trophy, TrendingUp, Headset } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      label: "Increase in Conversions",
      value: "25–40%",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      label: "More Qualified Leads",
      value: "3–5×",
    },
    {
      icon: <Headset className="w-5 h-5" />,
      label: "Expert Support",
      value: "24/7",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex items-center justify-between rounded-xl border border-border/40 bg-card/60 backdrop-blur-xs px-5 py-4 shadow-sm"
        >
          <div className="flex items-center gap-3 text-foreground/80">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 text-foreground">
              {s.icon}
            </div>
            <span className="text-sm">{s.label}</span>
          </div>
          <div className="text-lg font-semibold text-foreground">{s.value}</div>
        </div>
      ))}
    </div>
  );
}
