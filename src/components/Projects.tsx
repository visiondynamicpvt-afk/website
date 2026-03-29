import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectImage from "@/assets/image.png";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Hotel Grill Durbar",
    description:
      "A modern web development project with full backend integration using React JS and Firebase for real-time data management.",
    technologies: ["React JS", "Firebase", "Tailwind CSS", "JavaScript"],
    image: projectImage,
    liveLink: "https://hotelgrilldurbar.com",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div style={{ opacity }} className="mb-16 text-center">
          <p className="text-primary font-semibold mb-4 tracking-widest uppercase text-sm">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent projects where we've combined innovation,
            technology, and creativity to deliver exceptional results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8 }}
              className="group h-full flex flex-col"
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden card-shadow hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-card to-primary/10 aspect-video flex items-center justify-center">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground font-display mb-2">
                    {project.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full rounded-lg"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
