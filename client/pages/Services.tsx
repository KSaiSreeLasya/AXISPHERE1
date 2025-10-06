import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Seo from "@/components/Seo";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="AI Marketing & Automation Services | Axisphere"
        description="AI-driven branding, performance marketing, predictive analytics, and automation to optimize acquisition, retention, and ROI."
        canonicalPath="/services"
      />
      <Navigation />
      <main className="pt-24">
        <ServicesSection />
      </main>
    </div>
  );
}
