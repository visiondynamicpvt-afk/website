import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Users, Clock, Trophy, Target, Heart } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We deliver projects on time without compromising quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of industry experience.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support for all your technical needs.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "Consistent success across hundreds of projects.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "We focus on achieving your business objectives.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your satisfaction is our top priority.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-4 tracking-wider uppercase">
              Why Choose Us
            </p>
            <h2 className="section-title">
              Your Trusted Partner for
              <span className="text-gradient italic"> Digital Excellence</span>
            </h2>
            <p className="section-subtitle mt-6">
              We combine innovation, expertise, and dedication to deliver
              solutions that exceed expectations. Here's why businesses choose
              Vision Dynamic.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
