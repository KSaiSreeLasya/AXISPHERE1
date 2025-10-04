import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import Seo from "@/components/Seo";

export default function Packages() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="AI Marketing Packages | Smart Plans for Every Business | Axisphere"
        description="Choose from Axisphere’s tailored AI marketing packages – from starter plans to enterprise automation – crafted to scale your brand’s digital growth and maximize ROI."
        canonicalPath="/packages"
      />
      <Navigation />
      <main className="pt-24">
        <PricingSection />
      </main>
    </div>
  );
}
