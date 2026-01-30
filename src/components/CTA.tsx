import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-purple-600/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Let's Build Something Amazing
            </span>
          </div>

          <h2 className="section-title">
            Ready to Transform Your
            <span className="text-gradient italic"> Digital Future?</span>
          </h2>

          <p className="section-subtitle mx-auto mt-6 mb-10">
            Partner with Vision Dynamic and unlock the full potential of your
            business. Let's create innovative solutions that drive growth and
            success together.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Project
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
