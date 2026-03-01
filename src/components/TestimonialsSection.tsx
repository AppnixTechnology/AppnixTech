import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechVenture", quote: "Appnix transformed our vision into a world-class platform. Their technical expertise and attention to detail exceeded our expectations.", rating: 5 },
  { name: "Michael Torres", role: "Founder, HealthFirst", quote: "The mobile app they built has been a game-changer for our business. Professional team, excellent communication, outstanding results.", rating: 5 },
  { name: "Emily Watson", role: "Marketing Director, GrowFast", quote: "Their digital marketing strategy doubled our online revenue in just 6 months. Truly a partner that understands growth.", rating: 5 },
  { name: "David Kim", role: "CTO, DataFlow", quote: "The MERN stack solution they delivered handles millions of requests daily without breaking a sweat. Incredible engineering.", rating: 5 },
  { name: "Jessica Park", role: "Product Manager, EduLearn", quote: "The UI/UX redesign increased our user engagement by 150%. They deeply understand user psychology and modern design.", rating: 5 },
  { name: "Robert Singh", role: "Owner, RetailPro", quote: "Our WordPress e-commerce site is fast, beautiful, and converts. Appnix delivered beyond what we imagined possible.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-7 hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <div className="font-heading font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
