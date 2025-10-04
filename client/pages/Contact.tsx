import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Seo from "@/components/Seo";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contact Axisphere | Partner with Our AI Marketing Experts"
        description="Get in touch with Axisphere to start your AI-powered marketing journey. Let our experts design customized digital strategies that deliver real business growth."
        canonicalPath="/contact"
      />
      <Navigation />
      <main className="pt-24">
        <ContactSection />
      </main>
    </div>
  );
}
