import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Additional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="section-container relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-medium mb-4 tracking-wider uppercase"
          >
            Vision Dynamic
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="section-title leading-tight"
          >
            <span className="italic">Elevate</span>
            <br />
            <span className="italic">Your Digital</span>
            <br />
            <span className="text-gradient italic">Experience</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="section-subtitle mt-6 mb-8"
          >
            We transform ideas into powerful digital solutions. From web
            development to IT consulting, we deliver excellence that drives
            your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#services")}
              className="group"
            >
              Explore Services
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#about")}
              className="group"
            >
              <Play className="mr-2 h-4 w-4" />
              Learn More
            </Button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md"
          >
            {[
              { value: "50+", label: "Projects" },
              { value: "30+", label: "Clients" },
              { value: "5+", label: "Years" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-gradient font-display">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
