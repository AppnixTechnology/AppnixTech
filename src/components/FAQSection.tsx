import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What technologies do you work with?", a: "We specialize in React, Next.js, Node.js, MongoDB, PostgreSQL, WordPress, React Native, Flutter, and more. We choose the best tech stack based on your specific project requirements." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during the discovery phase." },
  { q: "Do you provide ongoing maintenance and support?", a: "Yes, all our plans include post-launch support. We also offer dedicated maintenance packages for long-term technical support, updates, and optimization." },
  { q: "What is your development process?", a: "We follow an agile methodology with four key phases: Discovery, Design, Development, and Launch. Each phase includes client checkpoints to ensure alignment with your vision." },
  { q: "Can you work with our existing team?", a: "Absolutely. We offer team augmentation services where our developers integrate seamlessly with your existing team, following your processes and tools." },
  { q: "What industries have you worked with?", a: "We've delivered solutions across healthcare, fintech, e-commerce, education, real estate, logistics, and more. Our diverse experience helps us bring cross-industry insights to every project." },
  { q: "How do you handle project communication?", a: "We use tools like Slack, Jira, and regular video calls. You'll have a dedicated project manager and access to real-time project dashboards for full transparency." },
  { q: "Do you sign NDAs?", a: "Yes, we're happy to sign NDAs before discussing project details. We take confidentiality and intellectual property protection very seriously." },
];

const FAQSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border rounded-xl">
                <AccordionTrigger className="text-left font-heading font-semibold text-sm hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
