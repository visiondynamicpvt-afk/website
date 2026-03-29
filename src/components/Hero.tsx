import { motion, useScroll, useTransform } from "framer-motion";
import heroPortrait from "@/assets/hero-student.jpg";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.35]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.06]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a17] text-white"
    >
      {/* Portrait image – smaller on desktop + gradient blend */}
      <motion.div style={{ scale }} className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-0 bottom-0 right-0
            w-full lg:w-[46%] xl:w-[44%] 2xl:w-[42%]
            bg-cover bg-no-repeat
          "
          style={{
            backgroundImage: `url(${heroPortrait})`,
            backgroundPosition: "center 32%",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 28%, black 78%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 28%, black 78%, transparent 95%)",
          }}
        />

        {/* Gradient blend overlay – multi-layer for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(
                to right,
                #0a0a17 0%,
                rgba(10,10,23,0.92) 18%,
                rgba(10,10,23,0.78) 32%,
                rgba(10,10,23,0.52) 48%,
                rgba(10,10,23,0.22) 65%,
                transparent 82%
              ),
              radial-gradient(
                circle at 75% 50%,
                rgba(0,0,0,0.45) 0%,
                transparent 55%
              ),
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.35) 0%,
                transparent 45%,
                rgba(0,0,0,0.28) 100%
              )
            `,
            mixBlendMode: "multiply",
          }}
        />
      </motion.div>

      {/* Main content container */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 w-full max-w-7xl px-6 md:px-12 lg:px-16 xl:px-24 py-20"
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-blue-400/90 font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-6"
          >
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 md:mb-12"
          >
            Elevate
            <br />
            Your Digital
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-base md:text-lg lg:text-xl text-gray-300/90 max-w-xl mb-10 md:mb-14 leading-relaxed"
          >
            We transform ideas into powerful digital solutions. From web development to IT consulting, we deliver excellence that drives your business forward.
          </motion.p>

          {/* Stats removed */}
        </div>
      </motion.div>

      {/* Scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="w-7 h-12 border-2 border-white/25 rounded-full flex justify-center pt-3"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], height: [8, 14, 8] }}
            transition={{ repeat: Infinity, duration: 2.4 }}
            className="w-1.5 bg-blue-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;