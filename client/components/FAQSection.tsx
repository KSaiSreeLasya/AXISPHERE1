import { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQSection() {
  const faqs: FAQItem[] = useMemo(
    () => [
      {
        q: "What makes Axisphere an AI-first marketing agency?",
        a: "We combine AI-powered content, performance marketing, automation, and analytics to deliver faster, smarter, and more consistent growth across channels.",
      },
      {
        q: "Do you offer packages for startups and enterprises?",
        a: "Yes. From starter growth plans to fully managed enterprise automation, our packages scale with your goals and budget.",
      },
      {
        q: "Can you integrate with our existing tools?",
        a: "Absolutely. We integrate with popular CRMs, analytics suites, ad platforms, and data pipelines to keep your workflow seamless.",
      },
      {
        q: "How soon can we see results?",
        a: "Most clients see early traction within 2–4 weeks and meaningful ROI improvements in 1–3 months, depending on scope and channels.",
      },
      {
        q: "Do you provide custom strategies?",
        a: "Every engagement starts with a tailored strategy aligned to your brand, audience, and KPIs—no copy-paste playbooks.",
      },
    ],
    [],
  );

  const faqJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    }),
    [faqs],
  );

  return (
    <section id="faqs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70">
            Quick answers to common questions about our AI-driven marketing
            services.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* JSON-LD for FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </section>
  );
}
