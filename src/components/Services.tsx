import { motion, useInView } from "framer-motion";
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
import serviceImage247 from "../assets/24hr.jpeg";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for business optimization.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and data.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    icon: Code,
    title: "Custom Software",
    description:
      "Tailored software solutions designed to meet your unique business requirements.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to drive digital transformation and growth.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Advanced analytics and business intelligence solutions for data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance services for peace of mind.",
    image: serviceImage247,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  }),
};

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-28 bg-card/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold mb-4 tracking-widest uppercase text-sm"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
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
            className="section-subtitle mx-auto mt-6"
          >
            We offer comprehensive IT services tailored to help your business
            grow and stay ahead in the digital landscape.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="service-card relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border-primary/40 backdrop-blur-sm p-8 rounded-2xl border border-border group cursor-pointer"
              >
                {/* Background image for all services */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Radial gradient overlay for modern effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                {/* Animated glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-transparent to-primary rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300 pointer-events-none -z-10" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 bg-primary/30 group-hover:bg-primary relative z-10"
                >
                  <service.icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-display relative z-10">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
