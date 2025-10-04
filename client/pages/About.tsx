import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Seo from "@/components/Seo";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="About Axisphere | AI Marketing Agency Redefining Digital Luxury"
        description="At Axisphere, we combine AI technology and creativity to craft premium marketing solutions that elevate brand experiences and redefine digital excellence."
        canonicalPath="/about"
      />
      <Navigation />
      <main className="pt-24">
        <AboutSection />
      </main>
    </div>
  );
}
