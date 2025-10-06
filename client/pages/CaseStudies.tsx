import Navigation from "@/components/Navigation";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Seo from "@/components/Seo";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Client Success Stories | Axisphere"
        description="Real results from AI-led campaigns, creative excellence, and automated journeys delivering measurable impact across industries."
        canonicalPath="/case-studies"
      />
      <Navigation />
      <main className="pt-24">
        <CaseStudiesSection />
      </main>
    </div>
  );
}
