import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Seo from "@/components/Seo";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contact Axisphere | AI Marketing Experts"
        description="Start an AI‑powered growth plan��get a tailored strategy for automation, performance marketing, and brand scaling."
        canonicalPath="/contact"
      />
      <Navigation />
      <main className="pt-24">
        <ContactSection />
      </main>
    </div>
  );
}
