import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Target, Palette, TrendingUp } from "lucide-react";
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
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px"
  });
  return <section ref={sectionRef} className="py-32 grain-overlay">
      <div className="section-container">
        {/* About Text */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }} className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6">
            The Amayaa Way
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground">
            Our AI-powered workflows compress production timelines, reduce operational costs, and eliminate creative guesswork—so your brand moves faster, scales smarter, and stays culturally relevant without burning budgets.
          </p>
        </motion.div>

        {/* Process Steps - Horizontal Scroll on Mobile */}
        <div className="relative">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.23, 1, 0.32, 1]
        }} className="mb-12 text-center">
            <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Our Process
            </h3>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible scrollbar-hide">
            {processSteps.map((step, index) => <motion.div key={step.title} initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.1,
            ease: [0.23, 1, 0.32, 1]
          }} className="flex-shrink-0 w-[280px] lg:w-auto snap-center">
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
              </motion.div>)}
          </div>

          {/* Progress Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[50%] left-[12%] right-[12%] h-px bg-border -z-10" />
        </div>
      </div>
    </section>;
};
export default AboutSection;