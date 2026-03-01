import { motion } from "framer-motion";
import { Shield, Zap, Users, Clock, Award, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Enterprise Security", description: "Bank-grade security practices and compliance standards for every project." },
  { icon: Zap, title: "Lightning Fast Delivery", description: "Agile methodology ensures rapid development without compromising quality." },
  { icon: Users, title: "Dedicated Teams", description: "Expert developers assigned exclusively to your project for full attention." },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical support and maintenance for peace of mind." },
  { icon: Award, title: "Proven Track Record", description: "200+ projects delivered successfully with 99% client satisfaction rate." },
  { icon: HeadphonesIcon, title: "Transparent Communication", description: "Regular updates, clear documentation, and open communication channels." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
            Why <span className="gradient-text">Appnix</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We don't just build products — we build partnerships that drive lasting success.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4 p-6 rounded-2xl hover:bg-card/60 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
