import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Seo from "@/components/Seo";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="AI-Powered Marketing & Automation Services | Axisphere"
        description="Explore Axisphere’s AI-driven marketing, branding, and automation services designed to optimize business performance and elevate brand identity with cutting-edge digital strategies."
        canonicalPath="/services"
      />
      <Navigation />
      <main className="pt-24">
        <ServicesSection />
      </main>
    </div>
  );
}
