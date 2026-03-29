import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICES_LINKS,
  FOOTER_LEGAL_LINKS,
  type SocialLink,
} from "@/config/navigation";

const footerLinks = {
  company: FOOTER_COMPANY_LINKS,
  services: FOOTER_SERVICES_LINKS,
  legal: FOOTER_LEGAL_LINKS,
};

const socialLinks: SocialLink[] = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/VisionDynamicPvt",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/vision_dynamic_pvt_ltd",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/vision-dynamic-pvt-ltd/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 backdrop-blur-sm">
      <div className="section-container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/">
                <span className="text-2xl font-bold font-display">
                  <span className="text-gradient">Vision</span>
                  <span className="text-foreground"> Dynamic</span>
                </span>
              </Link>
            </motion.div>
            <p className="text-muted-foreground max-w-xs mb-8 leading-relaxed">
              Transforming businesses through innovative technology solutions.
              Your trusted partner for digital excellence.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-8">
              <p>
                Email: <span className="text-foreground">visiondynamicpvt@gmail.com</span>
              </p>
              <p>
                Phone: <span className="text-foreground">+977-981-1130151</span>
              </p>
              <p>
                Address: <span className="text-foreground">Balaju, Kathmandu</span>
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors border border-border/50"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <motion.span whileHover={{ x: 3 }}>
                        {link.name}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {link.name}
                    </motion.button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Vision Dynamic. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
            >
              Back to top
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
