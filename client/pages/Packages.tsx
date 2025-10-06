import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import Seo from "@/components/Seo";

export default function Packages() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="AI Marketing Packages: Starter–Enterprise | Axisphere"
        description="Tailored plans combining automation, analytics, and performance marketing to scale growth and maximize ROI."
        canonicalPath="/packages"
      />
      <Navigation />
      <main className="pt-24">
        <PricingSection />
      </main>
    </div>
  );
}
