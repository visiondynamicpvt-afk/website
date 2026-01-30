import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@visiondynamic.com",
    href: "mailto:hello@visiondynamic.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Innovation Street, Tech City",
    href: "#",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="section-container" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium mb-4 tracking-wider uppercase"
          >
            Contact Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            Let's Start a
            <span className="text-gradient italic"> Conversation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    required
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-card border-border focus:border-primary h-12"
                  />
                </div>
              </div>
              <Input
                placeholder="Subject"
                required
                className="bg-card border-border focus:border-primary h-12"
              />
              <Textarea
                placeholder="Your Message"
                required
                rows={6}
                className="bg-card border-border focus:border-primary resize-none"
              />
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                  <info.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border h-48 bg-card flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
