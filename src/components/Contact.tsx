import { motion, useInView } from "framer-motion";
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
    value: "visiondynamicpvt@gmail.com",
    href: "mailto:visiondynamicpvt@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+977-981-1130151",
    href: "tel:+9779811130151",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Balaju, Kathmandu",
    href: "https://maps.google.com/?q=Balaju,%20Kathmandu",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Create object from form data
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        access_key: "b4b26296-03a2-4d15-b0d3-fea8c3b5ca32",
        redirect: false,
      };

      // Send to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-card/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold mb-4 tracking-widest uppercase text-sm"
          >
            Contact Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
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
            className="section-subtitle mx-auto mt-6"
          >
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-card/80 border-border/50 focus:border-primary h-14 rounded-xl backdrop-blur-sm"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.35 }}
                >
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-card/80 border-border/50 focus:border-primary h-14 rounded-xl backdrop-blur-sm"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <Input
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-card/80 border-border/50 focus:border-primary h-14 rounded-xl backdrop-blur-sm"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 }}
              >
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="bg-card/80 border-border/50 focus:border-primary resize-none rounded-xl backdrop-blur-sm"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto rounded-full"
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
              </motion.div>
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
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all group backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors"
                >
                  <info.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-lg">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="rounded-2xl overflow-hidden border border-border/50 h-80 bg-card/50 backdrop-blur-sm"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0720731229145!2d85.28969807452411!3d27.73385897618479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190c5d2f597f%3A0x4b5bd3c72f1f3b18!2sBalaju%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1711739000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
