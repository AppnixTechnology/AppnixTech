import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rahul Sharma", role: "CEO, TechNova Solutions", quote: "Appnix Technologies built our business website using a modern MERN stack and the performance is outstanding. The platform is fast, scalable, and perfectly optimized for SEO. Their team truly understands how technology drives business growth.", rating: 5 },
  { name: "Priya Verma", role: "Founder, EduSpark Academy", quote: "Working with Appnix Technologies was a great experience. They designed a clean and professional UI/UX for our learning platform and helped us launch quickly. The website now converts visitors into real students.", rating: 5 },
  { name: "Amit Kumar", role: "Director, Unity Enterprises", quote: "We needed a professional corporate website and Appnix delivered beyond expectations. The design is modern, mobile responsive, and optimized for search engines. Our online presence has improved significantly.", rating: 5 },
  { name: "Sneha Kapoor", role: "Marketing Head, GrowEdge Digital", quote: "Their SEO and digital marketing strategy helped us increase our website traffic and generate quality leads. Appnix Technologies combines technical expertise with smart growth strategies.", rating: 5 },
  { name: "Arjun Mehta", role: "CTO, Mehta Tech Labs", quote: "The MERN stack web application developed by Appnix handles heavy traffic smoothly. Their development approach is modern, secure, and highly scalable. A reliable technology partner for startups.", rating: 5 },
  { name: "Vikram Singh", role: "Owner, RetailPro", quote: "Appnix built our e-commerce website with excellent speed and user experience. The platform is easy to manage and optimized for conversions. Highly recommended for businesses going digital.", rating: 5 },
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
