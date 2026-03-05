import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Discovery", description: "We analyze your goals, audience, and requirements to create a strategic roadmap." },
  { icon: PenTool, step: "02", title: "Design", description: "Our designers craft intuitive interfaces and compelling visuals aligned with your brand." },
  { icon: Code, step: "03", title: "Development", description: "Expert engineers build your solution using modern tech stacks and best practices." },
  { icon: Rocket, step: "04", title: "Launch & Support", description: "We deploy, optimize, and provide ongoing support to ensure lasting success." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding ">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A proven four-step process that delivers results, on time, every time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 relative">
                <item.icon className="h-8 w-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
