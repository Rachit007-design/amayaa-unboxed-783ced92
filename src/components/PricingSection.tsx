import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Flame, Rocket, Lightbulb } from "lucide-react";

const tiers = [
  {
    name: "AI Starter Ads Pack",
    icon: Flame,
    price: "$599",
    features: [
      "19 AI Ad Videos",
      "15 seconds each",
      "High-quality production",
      "Platform-optimized formats",
    ],
  },
  {
    name: "AI Scale Ads Pack",
    icon: Rocket,
    price: "$1,199",
    features: [
      "19 AI Ad Videos",
      "1 Premium Ad Film (up to 40 sec)",
      "Full creative direction",
      "Priority delivery",
    ],
    popular: true,
  },
];

const retainerBenefits = [
  { duration: "3-month retainer", discount: "8% OFF" },
  { duration: "6-month retainer", discount: "11% OFF" },
];

const PricingSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={sectionRef} className="py-32 grain-overlay">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            The Investment
          </h2>
          <p className="headline-display text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto mb-4">
            Choose Your Pack
          </p>
          <p className="body-light text-muted-foreground max-w-lg mx-auto">
            Premium AI-powered video ads designed to scale your brand.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1] 
              }}
              className={`pricing-card ${
                tier.popular 
                  ? "ring-1 ring-foreground/20 relative" 
                  : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-foreground text-background text-xs font-medium rounded-full tracking-wide">
                  Best Value
                </div>
              )}

              <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <tier.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{tier.name}</h3>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
              </div>

              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Retainer Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="w-5 h-5 text-foreground" />
              <h3 className="text-lg font-semibold">Retainer Advantage</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {retainerBenefits.map((benefit) => (
                <div 
                  key={benefit.duration}
                  className="px-6 py-4 bg-secondary/50 rounded-2xl"
                >
                  <p className="text-sm text-muted-foreground mb-1">{benefit.duration}</p>
                  <p className="text-xl font-semibold text-foreground">{benefit.discount}</p>
                  <p className="text-xs text-muted-foreground mt-1">on both packs</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
