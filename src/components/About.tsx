import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

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

  return (
    <section id="about" className="py-24 bg-background">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden card-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-foreground font-display">VD</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-display">Vision Dynamic</h3>
                  <p className="text-muted-foreground mt-2">Innovating Since 2019</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary font-medium mb-4 tracking-wider uppercase">
              About Us
            </p>
            <h2 className="section-title">
              Transforming Ideas Into
              <span className="text-gradient italic"> Digital Reality</span>
            </h2>
            <p className="section-subtitle mt-6">
              Vision Dynamic is a premier IT solutions company dedicated to
              helping businesses thrive in the digital age. We combine
              innovative technology with creative expertise to deliver
              exceptional results.
            </p>

            <p className="text-muted-foreground mt-4">
              Our mission is to empower organizations with cutting-edge
              technology solutions that drive growth, efficiency, and
              competitive advantage. We believe in building long-term
              partnerships based on trust, transparency, and mutual success.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button
              variant="hero"
              size="lg"
              className="mt-8 group"
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
        </div>
      </div>
    </section>
  );
};

export default About;
