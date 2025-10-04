import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import BrandLogo from "@/components/BrandLogo";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import FAQSection from "@/components/FAQSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Luxury AI Marketing Agency | Axisphere – Transforming Brands with Intelligent Design"
        description="Axisphere is a next-gen AI marketing agency redefining luxury branding through intelligent design, automation, and strategy. Build smarter campaigns and elevate your digital presence today."
        canonicalPath="/"
      />
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* About Section */}
      <AboutSection />

      {/* Blog Section */}
      <BlogSection />

      {/* FAQs Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-secondary dark:bg-luxury-950 border-t border-border py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-2">
                <BrandLogo className="h-[140px] lg:h-20 w-auto" />
              </div>
              <div className="mb-4 text-sm font-semibold text-gold-600 dark:text-gold-400">
                Axisphere Media Worx LLP
              </div>
              <p className="text-foreground/70 dark:text-white/70 leading-relaxed">
                Transforming ambitious brands into luxury market leaders through
                strategic design and innovative technology.
              </p>
            </div>

            <div>
              <h4 className="text-foreground dark:text-white font-semibold mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-foreground/70 dark:text-white/70">
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    AI Content Creation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Performance Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Lead Generation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    AI Chatbots
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Marketing Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Analytics & Insights
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Luxury Branding
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground dark:text-white font-semibold mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-foreground/70 dark:text-white/70">
                <li>
                  <a
                    href="#about"
                    className="hover:text-gold-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Our Work
                  </a>
                </li>
                <li>
                  <a
                    href="#insights"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-gold-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-foreground dark:text-white font-semibold mb-4">
                Connect
              </h4>
              <ul className="space-y-2 text-foreground/70 dark:text-white/70">
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gold-400 transition-colors">
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-foreground/60 dark:text-white/60 text-sm">
              © 2024 Axisphere Media Worx LLP. All rights reserved.
            </div>
            <div className="flex gap-6 text-foreground/60 dark:text-white/60 text-sm">
              <Link
                to="/privacy-policy"
                className="hover:text-gold-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-gold-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
