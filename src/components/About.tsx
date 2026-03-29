import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import vdLogo from "../assets/logo.png";

const features = [
  "Cutting-edge Technology Solutions",
  "Expert Team of Developers",
  "Agile Development Methodology",
  "24/7 Support & Maintenance",
  "Scalable & Secure Infrastructure",
  "Data-Driven Decision Making",
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            style={{ x: leftX, opacity }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-10 rounded-3xl overflow-hidden card-shadow group"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-card to-primary/10 flex items-center justify-center relative">
                {/* Logo as full background with glowing effect */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <motion.img
                    src={vdLogo}
                    alt="Vision Dynamic Logo"
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                {/* Animated glow effect behind logo */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/30 via-sky-400/30 to-primary/30 blur-3xl"
                />
                
                {/* Animated circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 border border-primary/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-20 border border-primary/30 rounded-full"
                />
                
                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 text-center p-8 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10">
                  <h3 className="text-2xl font-bold text-foreground font-display">Vision Dynamic</h3>
                  <p className="text-muted-foreground mt-2 font-semibold">Innovating Since 2022</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-3xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-3xl -z-10"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div style={{ x: rightX, opacity }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold mb-4 tracking-widest uppercase text-sm"
            >
              About Us
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="section-title"
            >
              Transforming Ideas Into
              <span className="text-gradient italic"> Digital Reality</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="section-subtitle mt-6"
            >
              Vision Dynamic is a premier IT solutions company dedicated to
              helping businesses thrive in the digital age. We combine
              innovative technology with creative expertise to deliver
              exceptional results.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mt-4"
            >
              Our mission is to empower organizations with cutting-edge
              technology solutions that drive growth, efficiency, and
              competitive advantage.
            </motion.p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="mt-10 group rounded-full"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
