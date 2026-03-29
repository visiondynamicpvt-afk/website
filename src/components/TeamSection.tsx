import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TeamCard from "@/components/TeamCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rajnish Chaudhary",
    position: "CEO & Founder",
    department: "Leadership",
    email: "rajnish@visiondynamic.com",
    linkedin: "https://www.linkedin.com/in/rajnishchaudhary?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/_rajnishchaudhary_?igsh=dHBtb3Z1NWh6Ymox",
    facebook: "https://www.facebook.com/share/1GQm25xiqn/",
    image: "src/assets/images/rajnish.jpeg",
  },
  {
    id: 2,
    name: "Pratik Chaudhary",
    position: "Co-Founder/Full Stack Developer",
    department: "Engineering",
    email: "pratik@visiondynamic.com",
    linkedin: "http://linkedin.com/in/pratik-chaudhary-web",
    instagram: "https://www.instagram.com/ig_pratik0p?igsh=MWVrZGI4Mm8wMHl6NA%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1GQhzwfbq7/?mibextid=wwXIfr",
    image: "src/assets/images/team-2.JPG.jpeg",
  },
  {
    id: 3,
    name: "Srijan Rijal",
    position: "Frontend Developer/QA Engineer",
    department: "Engineering",
    email: "srijan@visiondynamic.com",
    linkedin: "https://www.linkedin.com/in/srijan-rijal-264a64259/",
    instagram: "https://www.instagram.com/the.srjn/",
    facebook: "https://www.facebook.com/srijan.rijal.825991",
    image: "src/assets/images/team-6.jpeg",
  },
  {
    id: 4,
    name: "Utsav Shrestha",
    position: "Backend Developer/Security Engineer",
    department: "Engineering",
    email: "utsav@visiondynamic.com",
    linkedin: 'https://www.linkedin.com/in/utsav-stha-b378b5259/', 
    instagram: 'https://www.instagram.com/uts4v_shrestha?igsh=NXRuNG91dTA1b2Y5', 
    facebook: 'https://www.facebook.com/utsav.shrestha.7' ,
    image: "/src/assets/images/utsaaav.png",
  },

  {
    id: 5,
    name: "Animesh Pyakurel",
    position: "UI/UX Designer",
    department: "Design",
    email: "animesh@visiondynamic.com",
    linkedin: "https://www.linkedin.com/in/animesh-pyakurel-6178b1259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/ani.mesh_19?utm_source=qr&igsh=N3hxbmZhYTc3NjVp",
    facebook: "https://www.facebook.com/share/1BgK86N3V4/",
    image: "src/assets/images/team-4.jpeg",
  },
  {
    id: 6,
    name: "Sajan Amatya",
    position: "Project Manager/Frontend Lead",
    department: "Management",
    email: "sajan@visiondynamic.com",
    linkedin: "https://www.linkedin.com/in/sajan-amatya-web?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram: "https://www.instagram.com/sazen_29?igsh=enZuOGMzN2VrYzRy&utm_source=qr",
    facebook: "https://www.facebook.com/share/186gPEYExq/?mibextid=wwXIfr",
    image: "src/assets/images/IMG_1756.PNG",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="team" className="py-28 bg-background relative" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div style={{ opacity }} className="mb-16 text-center">
          <p className="text-primary font-semibold mb-4 tracking-widest uppercase text-sm">
            Meet The Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Our Talented <span className="text-gradient">Team Members</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the brilliant minds behind Vision Dynamic. Our team is committed
            to excellence, innovation, and your success.
          </p>
        </motion.div>

        {/* Team Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem key={member.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <TeamCard member={member} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 h-12 w-12" />
          <CarouselNext className="-right-12 h-12 w-12" />
        </Carousel>

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
            <p className="text-4xl font-bold text-gradient mb-2">5+</p>
            <p className="text-muted-foreground">Departments</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-card border border-border text-center"
          >
            <p className="text-4xl font-bold text-gradient mb-2">100%</p>
            <p className="text-muted-foreground">Dedicated</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
