import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Palette, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const processSteps = [{
  icon: Sparkles,
  title: "Intelligence",
  description: "Deep-dive into your brand DNA, audience psychographics, and market positioning."
}, {
  icon: Target,
  title: "Strategy",
  description: "Architect a content framework designed for virality and conversion."
}, {
  icon: Palette,
  title: "Creation",
  description: "Produce cinematic AI-enhanced content that stops the scroll."
}, {
  icon: TrendingUp,
  title: "Scale",
  description: "Deploy, optimize, and amplify across every touchpoint."
}];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Parallax background element */}
      <motion.div 
        style={{ y: bgY }} 
        className="absolute inset-0 texture-dots -z-10" 
      />
      
      <div className="section-container">
        {/* About Text */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
              The Amayaa Way
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground">
              Our AI-powered workflows compress production timelines, reduce operational costs, and eliminate creative guesswork—so your brand moves faster, scales smarter, and stays culturally relevant without burning budgets.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="relative">
          <ScrollReveal delay={0.1}>
            <div className="mb-12 text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                Our Process
              </h3>
            </div>
          </ScrollReveal>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible scrollbar-hide">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={0.15 + index * 0.1}>
                <div className="flex-shrink-0 w-[280px] lg:w-auto snap-center">
                  <div className="glass-card rounded-3xl p-8 h-full group hover:bg-card/80 transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                      <step.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-2 tracking-wider">
                      0{index + 1}
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                    <p className="body-light text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Progress Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[50%] left-[12%] right-[12%] h-px bg-border -z-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
