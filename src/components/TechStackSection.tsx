import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Server,
  Package,
  Cloud,
  Smartphone,
  Network,
  Zap,
  Globe,
  Shield,
  Workflow,
} from "lucide-react";

const techStack = [
  { name: "React", category: "Frontend", icon: Code2, color: "from-blue-400 to-cyan-400" },
  { name: "Next.js", category: "Frontend", icon: Code2, color: "from-gray-600 to-gray-800" },
  { name: "TypeScript", category: "Frontend", icon: Shield, color: "from-blue-500 to-blue-600" },
  { name: "Tailwind CSS", category: "Frontend", icon: Palette, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", category: "Backend", icon: Server, color: "from-green-400 to-emerald-500" },
  { name: "Express", category: "Backend", icon: Zap, color: "from-yellow-400 to-orange-500" },
  { name: "MongoDB", category: "Database", icon: Database, color: "from-green-500 to-teal-600" },
  { name: "PostgreSQL", category: "Database", icon: Database, color: "from-blue-600 to-blue-700" },
  { name: "WordPress", category: "CMS", icon: Globe, color: "from-blue-500 to-purple-600" },
  { name: "Figma", category: "Design", icon: Palette, color: "from-purple-500 to-pink-500" },
  { name: "AWS", category: "Cloud", icon: Cloud, color: "from-orange-400 to-orange-600" },
  { name: "Docker", category: "DevOps", icon: Package, color: "from-blue-400 to-blue-600" },
  { name: "React Native", category: "Mobile", icon: Smartphone, color: "from-blue-400 to-cyan-400" },
  { name: "Flutter", category: "Mobile", icon: Smartphone, color: "from-blue-500 to-cyan-500" },
  { name: "Firebase", category: "Cloud", icon: Zap, color: "from-yellow-400 to-orange-500" },
  { name: "GraphQL", category: "API", icon: Network, color: "from-pink-500 to-rose-600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.5,
    },
  },
};

const TechStackSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-background to-background/50 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm font-semibold uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full"
          >
            ✨ Technology Stack
          </motion.span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-6 mb-6">
            Cutting-Edge <span className="gradient-text">Technologies</span> We Master
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We leverage industry-leading tools and frameworks to deliver high-performance,
            scalable solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Unified Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
        >
          {techStack.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="group relative"
              >
                {/* Glowing background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300 -z-10"></div>

                <div className={`glass-card p-4 text-center h-full flex flex-col items-center justify-center group hover:border-primary/50 transition-all duration-300 relative overflow-hidden`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  {/* Icon container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-2 relative z-10"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} p-2 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </motion.div>

                  {/* Tech name */}
                  <div className="text-xs font-semibold text-foreground text-center relative z-10 line-clamp-2">
                    {tech.name}
                  </div>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-primary/0 to-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? We work with custom tech stacks too.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
          >
            <Workflow size={18} />
            Let's Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;