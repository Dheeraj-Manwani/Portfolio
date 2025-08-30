import { useEffect, useState } from "react";
import {
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/my-portrait.jpg";
import { motion } from "framer-motion";
import { BorderTrail } from "./BorderTrail";
import { TextShimmer } from "./TextShimmer";
import { GlowEffect } from "./GlowEffect";

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    hidden: { y: 0 },
    visible: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-hero pt-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pb-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)]"
        >
          {/* Text Content - Left Side */}
          <div className="flex-1 lg:pr-12 text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground mb-3 font-medium"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 relative inline-block"
              >
                Dheeraj Manwani
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"
                />
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6"
              >
                A passionate full-stack developer with over 5 years of
                experience, specializing in creating innovative digital
                solutions and exceptional user experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={onContactClick}
                  variant="ghost"
                  className="group"
                  size="lg"
                >
                  <TextShimmer as={"span"} duration={1.5}>
                    Get In Touch
                  </TextShimmer>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button
                  onClick={() => scrollToSection("projects")}
                  variant="outline"
                  className="btn-outline group"
                  size="lg"
                >
                  View Projects
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Services Section */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
              >
                What I Do
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-4"
              >
                Full-stack development, UI/UX design, and digital innovation
                solutions
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("skills")}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium group"
              >
                Explore my skills
                <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover:translate-y-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-12 h-12 bg-secondary/10 dark:bg-secondary/20 rounded-xl flex items-center justify-center text-secondary-600 hover:bg-secondary-600 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-12 h-12 bg-accent/30 dark:bg-accent/40 rounded-xl flex items-center justify-center text-accent-700 hover:bg-accent-700 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="social-instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image - Right Side */}
          <motion.div
            variants={portraitVariants}
            className="flex-1 lg:flex-none mt-8 lg:mt-6 order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <motion.div
              variants={floatingVariants}
              className="relative max-w-48 md:max-w-60 mx-auto lg:max-w-md"
            >
              <GlowEffect
                colors={["#8F8DFF", "#3B47B8"]}
                mode="rotate"
                blur="medium"
                className="z-[-1]"
                duration={6}
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={heroPortrait}
                alt="Professional headshot of Dheeraj Manwani"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
