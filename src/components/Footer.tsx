import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: ["Web Development", "App Development", "MERN Stack", "WordPress", "Digital Marketing", "UI/UX Design"],
  Company: ["About Us", "Careers", "Blog", "Contact", "Privacy Policy", "Terms of Service"],
  Resources: ["Case Studies", "Documentation", "FAQ", "Support", "Partners"],
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold gradient-text mb-4">
              <img src="/logo.png" alt="Appnix Logo" className="h-14 w-14 inline-block mr-2 rounded-full object-cover" />
              Appnix Technologies
            </h3>
            <p className="text-muted-foreground max-w-sm mb-6 text-sm leading-relaxed">
              Transforming ideas into exceptional digital experiences. We build scalable, modern technology solutions for businesses worldwide.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:info@appnix.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-primary" /> info@appnix.com
              </a>
              <a href="tel:+17753983175" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-primary" /> 7753983175
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Lucknow Uttar Pradesh India
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Appnix Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://x.com/AppnixTech" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="https://www.linkedin.com/company/appnix-technologies" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/appnixtechnologies" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
