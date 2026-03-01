import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", description: "Full-stack marketplace with real-time inventory, payments, and analytics dashboard." },
  { title: "HealthTech Mobile App", category: "App Development", description: "Cross-platform health monitoring app with AI-powered insights and wearable integration." },
  { title: "SaaS Dashboard", category: "MERN Stack", description: "Enterprise analytics platform processing millions of data points with real-time visualizations." },
  { title: "Restaurant Chain Website", category: "WordPress", description: "Multi-location restaurant website with online ordering, reservations, and loyalty program." },
  { title: "Fintech Brand Identity", category: "Graphic Design", description: "Complete brand overhaul including logo, guidelines, and marketing collateral." },
  { title: "EdTech Platform UI", category: "UI/UX Design", description: "Learning management system designed for accessibility and engagement across all devices." },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
            Featured <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of our recent work across industries and technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-4xl font-heading font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="text-lg font-heading font-semibold mt-2 mb-2 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
