

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  email?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  image?: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.08] via-transparent to-transparent" />
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-card to-primary/10 aspect-square flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-primary/10 rounded-full"
          />
          
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-sky-400 flex items-center justify-center text-3xl font-bold text-primary-foreground">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-5 flex flex-col">
          <h3 className="text-lg font-bold text-foreground font-display mb-1.5">
            {member.name}
          </h3>
          
          <p className="text-primary font-semibold text-sm mb-2.5">
            {member.position}
          </p>
          
          <Badge variant="secondary" className="w-fit mb-3">
            {member.department}
          </Badge>

          <p className="text-muted-foreground text-sm mb-4">
            Dedicated professional with expertise in {member.department.toLowerCase()}.
          </p>

          {/* Contact Links */}
          <div className="flex gap-3 pt-4 border-t border-border/60">
            {member.facebook && (
              <motion.a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                title="Visit Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
            )}
            {member.instagram && (
              <motion.a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                title="Visit Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
            )}
            {member.email && (
              <motion.a
                href={`mailto:${member.email}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                title="Send email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            )}
            {member.linkedin && (
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                title="Visit LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;