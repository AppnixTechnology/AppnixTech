import { motion } from "framer-motion";
import {
  Globe, Smartphone, Server, FileCode, Wrench,
  Megaphone, Share2, Palette, Figma,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", description: "Custom web applications built with modern frameworks, optimized for performance and user experience." },
  { icon: Smartphone, title: "App Development", description: "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android." },
  { icon: Server, title: "MERN Stack Development", description: "Full-stack solutions using MongoDB, Express, React, and Node.js for scalable web applications." },
  { icon: FileCode, title: "WordPress Development", description: "Custom WordPress themes, plugins, and e-commerce solutions tailored to your business needs." },
  { icon: Wrench, title: "Website Maintenance", description: "Ongoing support, security updates, performance optimization, and technical maintenance services." },
  { icon: Megaphone, title: "Digital Marketing", description: "Data-driven SEO, PPC, content marketing, and growth strategies to maximize your online presence." },
  { icon: Share2, title: "Social Media Management", description: "Strategic social media campaigns, content creation, and community management across all platforms." },
  { icon: Palette, title: "Graphic Designing", description: "Brand identity, marketing materials, and visual content that captures attention and communicates value." },
  { icon: Figma, title: "UI/UX & Figma Design", description: "User-centered interface design, prototyping, and design systems that enhance usability and delight." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
            Complete <span className="gradient-text">Tech Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            End-to-end digital services to build, grow, and maintain your online presence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-7 group hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
