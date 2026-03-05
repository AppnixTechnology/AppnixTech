import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description: "A high-performance marketplace featuring real-time inventory sync, Stripe integration, and a custom merchant analytics dashboard.",
    image: "/webapp1.jpeg",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    title: "HealthTech Mobile App",
    category: "React Native",
    description: "Cross-platform health monitoring system with biometric data visualization and AI-powered personalized wellness insights.",
    image: "/webapp2.jpeg",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Enterprise SaaS Dashboard",
    category: "Data Visualization",
    description: "Complex analytics platform processing millions of data points with interactive charts and real-time operational monitoring.",
    image: "/webapp3.png",
    gradient: "from-purple-600 to-pink-500"
  },
  {
    title: "Culinary Brand Experience",
    category: "WordPress / Headless",
    description: "A multi-location restaurant digital presence featuring custom reservation logic and a high-conversion online ordering flow.",
    image: "/webapp1.jpeg",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Fintech Brand Identity",
    category: "Brand Design",
    description: "Comprehensive visual identity system for a modern neobank, including logo architecture, typography, and digital assets.",
    image: "/webapp2.jpeg",
    gradient: "from-indigo-600 to-blue-500"
  },
  {
    title: "EdTech Learning System",
    category: "UI/UX Design",
    description: "User-centric LMS platform designed for accessibility, featuring gamified progress tracking and collaborative study tools.",
    image: "/webapp3.jpeg",
    gradient: "from-teal-500 to-cyan-500"
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
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
              className="glass-card overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-semibold rounded-full"
                  >
                    {project.category}
                  </motion.span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-heading font-semibold mb-2 flex items-center gap-2 group">
                  {project.title}
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="inline-block"
                  >
                    <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* CTA Link */}
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-primary font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  View Case Study
                  <ExternalLink className="h-3 w-3" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;