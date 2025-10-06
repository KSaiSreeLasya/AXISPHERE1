import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Seo from "@/components/Seo";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About Axisphere | Luxury AI Marketing"
        description="Where AI and creativity meet to craft premium brand experiences, intelligent systems, and sustainable long‑term growth."
        canonicalPath="/about"
      />
      <Navigation />
      <main className="pt-24">
        <AboutSection />
      </main>
    </div>
  );
}
