'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Award, Users, Target, Sparkles } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
}

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'shashank',
    name: 'Shashank',
    title: 'AI-powered Marketing Innovator',
    image: '/placeholder.svg',
    bio:
      'A recognized innovator in AI-powered marketing, Shashank builds custom lead-qualification models using ChatGPT Custom GPTs and Perplexity Labs, and designs intelligent automation workflows with Make.com, VAPI (WhatsApp API), and Philo call automation. His seamless CRM integrations—spanning Priber CRM, Sell.do, Apollo, and LinkedIn Sales Navigator—ensure real-time engagement and eliminate manual bottlenecks. Throughout his career, Shashank has delivered transformative outcomes: 15× revenue growth for oncology departments, six-figure ROI on luxury villa launches such as Konak Mansions and Iqon West, and AI-driven Shopify e-commerce scaling. As a sought-after corporate trainer, he has led workshops and certification programs for Digiperform, DSIM, and Digital Hat, empowering marketing teams to harness AI for measurable results. Whether you’re launching a marquee property, accelerating e-commerce sales, or automating high-volume lead funnels, Shashank combines deep domain expertise, creative storytelling, and relentless experimentation to deliver sustainable ROI and future-proof your marketing operations.',
  },
];

const values: Value[] = [
  {
    icon: <Award size={24} />,
    title: 'Excellence',
    description: 'We pursue perfection in every pixel, every line of code, and every strategic decision.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Innovation',
    description: 'Pioneering new approaches to design and technology that set industry standards.',
  },
  {
    icon: <Users size={24} />,
    title: 'Collaboration',
    description: 'Building lasting partnerships with clients as strategic allies in their success.',
  },
  {
    icon: <Target size={24} />,
    title: 'Results',
    description: 'Delivering measurable outcomes that drive real business growth and brand elevation.',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-background to-luxury-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gold-400/5 to-gold-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-platinum-400/5 to-platinum-600/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Crafting{' '}
                <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded in 2018, Axisphere Works LLP emerged from a simple belief: exceptional brands 
                deserve exceptional digital experiences. What started as a boutique design studio 
                has evolved into a full-service creative agency, trusted by industry leaders worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                Our multidisciplinary team combines strategic thinking with creative execution, 
                delivering solutions that don't just look beautiful—they drive measurable results. 
                From luxury hospitality to cutting-edge fintech, we've helped brands across industries 
                elevate their digital presence and achieve unprecedented growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
                    className="text-3xl font-bold text-gold-600 mb-2"
                  >
                    150+
                  </motion.div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
                    className="text-3xl font-bold text-gold-600 mb-2"
                  >
                    98%
                  </motion.div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-gold-500 group-hover:text-gold-600 transition-colors duration-300">
                        {value.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-1">{value.title}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Team Grid with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  index={index}
                  isInView={isInView}
                  mousePosition={mousePosition}
                />
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              style={{
                transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
              }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-platinum-400 to-platinum-600 rounded-full opacity-15 blur-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  isInView: boolean;
  mousePosition: { x: number; y: number };
}

function TeamMemberCard({ member, index, isInView, mousePosition }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const parallaxStrength = (index % 2 === 0 ? 1 : -1) * 0.02;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
      style={{
        transform: `translate(${mousePosition.x * parallaxStrength}px, ${mousePosition.y * parallaxStrength}px)`,
      }}
      className="group relative perspective cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((v) => !v)}
    >
      <div className="relative rounded-2xl border border-border/50 hover:border-gold-500/30 hover:shadow-luxury transition-all duration-500 h-full">
        <div className={`relative h-[520px] md:h-[560px] preserve-3d transition-transform duration-700 ${isHovered ? 'rotate-y-180' : ''}`}>
          {/* Front: Image + name */}
          <div className="absolute inset-0 backface-hidden overflow-hidden rounded-2xl">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h4 className="font-bold text-white">{member.name}</h4>
              <p className="text-white/80 text-sm">{member.title}</p>
            </div>
          </div>

          {/* Back: Bio */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl bg-luxury-900/90 text-white p-6 flex items-start overflow-y-auto no-scrollbar pr-3">
            <p className="text-sm leading-relaxed">{member.bio}</p>
          </div>
        </div>

        {/* Shimmer */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 bg-shimmer opacity-10 pointer-events-none rounded-2xl"
        />
      </div>
    </motion.div>
  );
}
