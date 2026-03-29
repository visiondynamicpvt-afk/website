import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  email?: string;
  linkedin?: string;
  image?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Lead Developer",
    department: "Development",
    email: "sarah@visiondynamic.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager",
    department: "Product",
    email: "michael@visiondynamic.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "UX/UI Designer",
    department: "Design",
    email: "emily@visiondynamic.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 4,
    name: "David Kumar",
    position: "Backend Engineer",
    department: "Development",
    email: "david@visiondynamic.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    position: "Marketing Lead",
    department: "Marketing",
    email: "lisa@visiondynamic.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 6,
    name: "James Wilson",
    position: "DevOps Engineer",
    department: "Infrastructure",
    email: "james@visiondynamic.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 7,
    name: "Priya Patel",
    position: "QA Lead",
    department: "Quality Assurance",
    email: "priya@visiondynamic.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 8,
    name: "Alex Thompson",
    position: "Full Stack Developer",
    department: "Development",
    email: "alex@visiondynamic.com",
    linkedin: "https://linkedin.com",
  },
];

const Team = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold mb-4 tracking-widest uppercase text-sm"
            >
              Meet The Team
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="section-title mb-6"
            >
              Our Talented <span className="text-gradient">Team Members</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="section-subtitle"
            >
              We're a diverse team of professionals passionate about delivering exceptional results. Each member brings unique skills and expertise to create innovative solutions for our clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-28 bg-background relative" ref={ref}>
        <div className="section-container">
          {/* Section Header */}
          <motion.div
            style={{ opacity }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Working <span className="text-gradient">Members</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the brilliant minds behind Vision Dynamic. Our team is committed to excellence, innovation, and your success.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-border text-center"
            >
              <p className="text-4xl font-bold text-gradient mb-2">
                {teamMembers.length}+
              </p>
              <p className="text-muted-foreground">Team Members</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-border text-center"
            >
              <p className="text-4xl font-bold text-gradient mb-2">
                5+
              </p>
              <p className="text-muted-foreground">Departments</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card border border-border text-center"
            >
              <p className="text-4xl font-bold text-gradient mb-2">
                100%
              </p>
              <p className="text-muted-foreground">Dedicated</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
