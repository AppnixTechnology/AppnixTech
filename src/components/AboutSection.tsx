import { motion } from "framer-motion";
import { Target, Eye, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
            Who Is <span className="gradient-text">Appnix Technologies</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            We're a global technology company specializing in building innovative digital solutions. From startups to enterprises, we help businesses thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To empower businesses with cutting-edge technology solutions that drive measurable results and sustainable growth.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description: "To become the most trusted technology partner for businesses worldwide, known for innovation, quality, and reliability.",
            },
            {
              icon: Rocket,
              title: "Our Approach",
              description: "We combine strategic thinking with technical excellence, delivering solutions that are scalable, maintainable, and future-proof.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
