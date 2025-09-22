"use client";

import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Palette,
  Monitor,
  TrendingUp,
  Zap,
  FileText,
  Megaphone,
  UserPlus,
  Bot,
  Workflow,
  BarChart3,
  CheckCircle2,
  ListChecks,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  deliverables: string[];
  gradient: string;
}

const services: Service[] = [
  {
    id: "ai-content-creation",
    icon: <FileText size={20} />,
    title: "AI Content Creation",
    description:
      "AI-powered, brand-consistent content for blogs, social media, email, and web.",
    price: "Starting at $2,500/month",
    features: [
      "AI blog writing & SEO optimization",
      "Social media calendars",
      "Email marketing campaigns",
      "Website & landing page copy",
    ],
    benefits: [
      "10x faster content production",
      "Consistent brand voice",
      "SEO-optimized for visibility",
      "Data-driven content strategies",
    ],
    deliverables: [
      "50+ content pieces/month",
      "Editorial calendar",
      "Performance analytics",
    ],
    gradient: "from-gold-400 to-gold-600",
  },
  {
    id: "performance-marketing",
    icon: <Megaphone size={20} />,
    title: "Performance Marketing",
    description:
      "Data-driven campaigns across Google, Meta and more to maximize ROAS.",
    price: "Starting at $3,500/month + ad spend",
    features: [
      "Google & Meta advertising",
      "Conversion rate optimization",
      "A/B & landing page testing",
      "Attribution modeling & reporting",
    ],
    benefits: [
      "Average 300% increase in ROAS",
      "Real-time optimization",
      "Transparent reporting dashboard",
      "Continuous performance improvement",
    ],
    deliverables: [
      "Campaign setup & structure",
      "Ongoing optimization",
      "Weekly reports",
      "Monthly strategy reviews",
    ],
    gradient: "from-platinum-400 to-platinum-600",
  },
  {
    id: "lead-generation",
    icon: <UserPlus size={20} />,
    title: "Lead Generation",
    description:
      "High-converting funnels to capture, qualify and nurture leads at scale.",
    price: "Starting at $2,000/month",
    features: [
      "Funnel strategy & build",
      "Landing pages & lead magnets",
      "Multi-step forms & qualification",
      "CRM integration",
    ],
    benefits: [
      "Higher conversion rates",
      "More qualified leads",
      "Lower cost per lead",
      "Predictable pipeline growth",
    ],
    deliverables: [
      "Funnel assets",
      "Tracking & dashboards",
      "Automation handoff",
    ],
    gradient: "from-luxury-400 to-luxury-600",
  },
  {
    id: "ai-chatbots",
    icon: <Bot size={20} />,
    title: "AI Chatbots",
    description:
      "Intelligent chat that supports customers, qualifies leads and books appointments 24/7.",
    price: "Starting at $1,500/month",
    features: [
      "Natural language processing",
      "Multi‑platform integration",
      "Lead qualification automation",
      "Customer support workflows",
    ],
    benefits: [
      "24/7 customer engagement",
      "80% reduction in response time",
      "Automated lead qualification",
      "Improved customer satisfaction",
    ],
    deliverables: [
      "Custom chatbot",
      "Training & integration",
      "Ongoing optimization",
    ],
    gradient: "from-gold-500 to-platinum-500",
  },
  {
    id: "marketing-automation",
    icon: <Workflow size={20} />,
    title: "Marketing Automation",
    description:
      "Journey automation with triggers, segmentation and personalized messaging.",
    price: "Starting at $2,000/month",
    features: [
      "Email & lifecycle automation",
      "Behavior-triggered campaigns",
      "Segmentation & personalization",
      "Cross-channel orchestration",
    ],
    benefits: [
      "40% increase in lead→customer conversions",
      "Reduced manual marketing tasks",
      "Personalized experiences",
      "Consistent follow‑up processes",
    ],
    deliverables: [
      "Automation setup",
      "Workflow design",
      "Campaign creation & monitoring",
    ],
    gradient: "from-gold-400 to-gold-600",
  },
  {
    id: "analytics-insights",
    icon: <BarChart3 size={20} />,
    title: "Analytics & Insights",
    description:
      "Dashboards and predictive analytics that turn data into growth decisions.",
    price: "Starting at $1,800/month",
    features: [
      "Advanced analytics dashboards",
      "Customer behavior analysis",
      "Predictive modeling",
      "Revenue attribution & forecasting",
    ],
    benefits: [
      "Data‑driven decision making",
      "Improved marketing ROI",
      "Predictive insights for growth",
      "Real‑time performance visibility",
    ],
    deliverables: [
      "Custom dashboards",
      "Monthly insight reports",
      "Strategic recommendations",
    ],
    gradient: "from-platinum-400 to-platinum-600",
  },
  // Original services stay available as additional tabs
  {
    id: "luxury-branding",
    icon: <Palette size={20} />,
    title: "Luxury Branding",
    description:
      "Distinctive brand identities that command attention and inspire trust.",
    price: "Custom project pricing",
    features: ["Brand strategy", "Visual identity", "Guidelines", "Logo"],
    benefits: [
      "Premium market positioning",
      "Cohesive brand systems",
      "Increased perceived value",
      "Stronger recognition",
    ],
    deliverables: ["Brand book", "Logo suite", "Design system"],
    gradient: "from-gold-400 to-gold-600",
  },
  {
    id: "web-design",
    icon: <Monitor size={20} />,
    title: "Web Design",
    description:
      "Conversion‑optimized websites that deliver exceptional experiences.",
    price: "Custom project pricing",
    features: ["UX/UI", "Development", "E‑commerce", "Mobile‑first"],
    benefits: [
      "Higher conversion rates",
      "Faster performance",
      "Accessible & responsive",
      "SEO‑ready architecture",
    ],
    deliverables: ["Design & build", "QA & launch", "CMS training"],
    gradient: "from-platinum-400 to-platinum-600",
  },
  {
    id: "digital-marketing",
    icon: <TrendingUp size={20} />,
    title: "Digital Marketing",
    description:
      "Strategic campaigns that elevate brand presence and engagement.",
    price: "Retainer based",
    features: ["Social strategy", "Content creation", "SEO", "Analytics"],
    benefits: [
      "Audience growth",
      "Organic visibility",
      "Engagement lift",
      "Measurable outcomes",
    ],
    deliverables: ["Monthly content", "SEO projects", "Reports"],
    gradient: "from-luxury-400 to-luxury-600",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const defaultTab = useMemo(() => services[0].id, []);

  return (
    <section id="services" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Explore a modern, structured overview of everything we offer. Switch
            tabs to see features, benefits, and deliverables for each service.
          </motion.p>
        </motion.div>

        <Tabs defaultValue={defaultTab} className="max-w-6xl mx-auto">
          <TabsList className="mb-6 w-full overflow-x-auto whitespace-nowrap flex-nowrap gap-1 bg-secondary/60 backdrop-blur-xs border border-border/50">
            {services.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className="gap-2 px-4 py-2">
                <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br ${s.gradient} text-white`}>{s.icon}</span>
                <span>{s.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((s, i) => (
            <TabsContent key={s.id} value={s.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Overview card */}
                <div className="lg:col-span-1 bg-card border border-border/60 rounded-2xl p-6 shadow-sm">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${s.gradient} text-white mb-4`}>
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{s.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/70">{s.price}</span>
                    <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                      Get Started
                    </Button>
                  </div>
                </div>

                {/* Right column sections */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Key Features */}
                  <div className="bg-card border border-border/60 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <ListChecks className="w-5 h-5 text-gold-600" />
                      <h4 className="text-lg font-semibold">Key Features</h4>
                    </div>
                    <ul className="space-y-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                          <span className={`mt-1 inline-block h-2 w-2 rounded-full bg-gradient-to-r ${s.gradient}`}></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits & Results */}
                  <div className="bg-card border border-border/60 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="w-5 h-5 text-gold-600" />
                      <h4 className="text-lg font-semibold">Benefits & Results</h4>
                    </div>
                    <ul className="space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-gold-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What You'll Receive */}
                  <div className="md:col-span-2 bg-card border border-border/60 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-5 h-5 text-gold-600" />
                      <h4 className="text-lg font-semibold">What You'll Receive</h4>
                    </div>
                    <ul className="flex flex-wrap gap-3">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="text-sm px-3 py-1 rounded-full border border-border/60 bg-secondary/40 text-foreground/80"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
