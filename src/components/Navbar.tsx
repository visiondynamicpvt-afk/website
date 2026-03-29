import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { MAIN_NAV_LINKS } from "@/config/navigation";
import vdLogo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="section-container h-20 md:h-24 flex items-center">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/">
              <motion.img
                src={vdLogo}
                alt="Company Logo"
                className="h-28 w-28 object-contain"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {MAIN_NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors link-underline py-1 text-sm font-medium"
                  >
                    <motion.span whileHover={{ y: -2 }}>
                      {link.name}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors link-underline py-1 text-sm font-medium"
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="rounded-full"
            >
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {MAIN_NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-muted-foreground hover:text-foreground transition-colors text-left py-2 block"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-foreground transition-colors text-left py-2"
                      >
                        {link.name}
                      </button>
                    )}
                  </motion.div>
                ))}
                <Button
                  variant="hero"
                  className="mt-2 rounded-full"
                  onClick={() => scrollToSection("#contact")}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
