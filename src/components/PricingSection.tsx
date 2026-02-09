import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$699",
    highlight: false,
  },
  {
    name: "Scale",
    price: "$1,499",
    highlight: false,
  },
  {
    name: "Dominance",
    price: "$1,999",
    highlight: true,
  },
];

const features = [
  {
    label: "Total Posts / Month",
    values: ["8", "20", "30"],
  },
  {
    label: "Videos (70%)",
    values: ["6 Videos", "14 Videos", "21 Videos"],
  },
  {
    label: "Carousels (20%)",
    values: ["2 Carousels", "4 Carousels", "6 Carousels"],
  },
  {
    label: "Story Ads (10%)",
    values: [null, "2 Story Ads", "3 Story Ads"],
  },
  {
    label: "Revisions",
    values: ["2 per post", "2 per post", "2 per post"],
  },
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
            Pricing & Packages
          </h2>
          <p className="headline-display text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto mb-4">
            Choose Your Plan
          </p>
          <p className="body-light text-muted-foreground max-w-lg mx-auto">
            Premium AI-powered content packages designed to scale your brand.
          </p>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-[2rem] overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 border-b border-border">
              <div className="p-5 md:p-6 flex items-end">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium">
                  Feature / Plan
                </span>
              </div>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-5 md:p-6 text-center ${
                    plan.highlight
                      ? "bg-accent/5"
                      : ""
                  }`}
                >
                  <p className={`text-sm font-semibold tracking-wide ${
                    plan.highlight ? "text-accent" : "text-foreground"
                  }`}>
                    {plan.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Price Row */}
            <div className="grid grid-cols-4 border-b border-border">
              <div className="p-5 md:p-6 flex items-center">
                <span className="text-sm font-medium text-foreground">Price</span>
              </div>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-5 md:p-6 flex items-center justify-center ${
                    plan.highlight ? "bg-accent/5" : ""
                  }`}
                >
                  <span className={`text-lg md:text-xl font-semibold tracking-tight ${
                    plan.highlight ? "text-accent" : "text-foreground"
                  }`}>
                    {plan.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((feature, idx) => (
              <div
                key={feature.label}
                className={`grid grid-cols-4 ${
                  idx < features.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="p-5 md:p-6 flex items-center">
                  <span className="text-sm font-medium text-foreground">
                    {feature.label}
                  </span>
                </div>
                {feature.values.map((value, vIdx) => (
                  <div
                    key={vIdx}
                    className={`p-5 md:p-6 flex items-center justify-center ${
                      plans[vIdx].highlight ? "bg-accent/5" : ""
                    }`}
                  >
                    {value === null ? (
                      <X className="w-4 h-4 text-muted-foreground/50" />
                    ) : (
                      <span className={`text-sm ${
                        plans[vIdx].highlight
                          ? "text-accent font-medium"
                          : "text-muted-foreground"
                      }`}>
                        {value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://cal.com/archit-bhardwaj-mrhm7b/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-pill"
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
