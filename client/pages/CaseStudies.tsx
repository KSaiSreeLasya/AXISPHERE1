import Navigation from "@/components/Navigation";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Seo from "@/components/Seo";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Client Success Stories | Axisphere – AI Marketing in Action"
        description="See how Axisphere helps brands achieve measurable results with AI-driven campaigns, creative excellence, and automated marketing solutions."
        canonicalPath="/case-studies"
      />
      <Navigation />
      <main className="pt-24">
        <CaseStudiesSection />
      </main>
    </div>
  );
}
