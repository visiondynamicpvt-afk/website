import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Code,
  Lightbulb,
  Database,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for business optimization.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and data.",
  },
  {
    icon: Code,
    title: "Custom Software",
    description:
      "Tailored software solutions designed to meet your unique business requirements.",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to drive digital transformation and growth.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Advanced analytics and business intelligence solutions for data-driven decisions.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance services for peace of mind.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-4 tracking-wider uppercase"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Solutions That Drive
            <span className="text-gradient italic"> Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            We offer comprehensive IT services tailored to help your business
            grow and stay ahead in the digital landscape.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="service-card bg-card p-6 rounded-2xl border border-border group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <service.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-display">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
