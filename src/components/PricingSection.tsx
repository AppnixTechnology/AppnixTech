import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,499",
    period: "per project",
    description: "Perfect for small businesses and MVPs",
    features: ["Custom Website Design", "Up to 5 Pages", "Mobile Responsive", "Basic SEO Setup", "1 Month Support", "Content Upload"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$7,999",
    period: "per project",
    description: "Ideal for growing companies",
    features: ["Custom Web Application", "Unlimited Pages", "Advanced UI/UX Design", "Full SEO Optimization", "3 Months Support", "API Integrations", "Performance Optimization", "Analytics Dashboard"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored quote",
    description: "For large-scale digital transformation",
    features: ["Full-Stack Development", "Mobile + Web Apps", "Dedicated Team", "24/7 Priority Support", "Custom Integrations", "DevOps & CI/CD", "Security Audit", "Scalable Architecture"],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding ">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
            Flexible <span className="gradient-text">Pricing Plans</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transparent pricing with no hidden fees. Choose the plan that fits your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`glass-card p-8 relative ${plan.highlighted ? "border-primary/50 scale-105" : ""} transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-heading font-semibold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-2">/ {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className={`block text-center py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
