import { motion } from "framer-motion";

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "WordPress", category: "CMS" },
  { name: "Figma", category: "Design" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "Firebase", category: "Cloud" },
  { name: "GraphQL", category: "API" },
];

const TechStackSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Technology</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We use industry-leading technologies to build robust, scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="glass-card p-4 text-center group hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="text-sm font-semibold text-foreground mb-1">{tech.name}</div>
              <div className="text-xs text-muted-foreground">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
