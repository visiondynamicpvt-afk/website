import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import TeamSection from "@/components/TeamSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <CTA />
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
