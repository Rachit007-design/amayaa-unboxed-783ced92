import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Foundation",
    subtitle: "For emerging brands",
    price: "$2,500",
    period: "/month",
    features: [
      "4 cinematic video ads",
      "Brand strategy session",
      "Platform optimization",
      "Monthly performance review",
      "48-hour turnaround",
    ],
  },
  {
    name: "Growth",
    subtitle: "For scaling businesses",
    price: "$5,000",
    period: "/month",
    features: [
      "8 cinematic video ads",
      "Full creative strategy",
      "A/B testing frameworks",
      "Bi-weekly strategy calls",
      "Priority 24-hour turnaround",
      "Dedicated creative director",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    subtitle: "For market leaders",
    price: "Custom",
    period: "",
    features: [
      "Unlimited video production",
      "Full-service creative team",
      "Real-time collaboration",
      "Custom AI model training",
      "White-glove onboarding",
      "Quarterly brand audits",
    ],
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
            The Investment
          </h2>
          <p className="headline-display text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto mb-4">
            Tiers of Growth
          </p>
          <p className="body-light text-muted-foreground max-w-lg mx-auto">
            Choose the partnership level that matches your ambitions. Every tier is designed to deliver measurable impact.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm text-muted-foreground tracking-wider mb-1">
                  {tier.subtitle}
                </p>
                <h3 className="text-xl font-semibold">{tier.name}</h3>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-semibold tracking-tight">{tier.price}</span>
                <span className="text-muted-foreground text-sm">{tier.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={tier.popular ? "btn-pill w-full" : "btn-pill-outline w-full"}
              >
                {tier.price === "Custom" ? "Contact Us" : "Get Started"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
