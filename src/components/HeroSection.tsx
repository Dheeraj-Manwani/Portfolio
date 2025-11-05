import { useEffect, useState } from "react";
import { Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/my-portrait.jpg";
import heroPortraitMobile from "@/assets/my-portrait-short.jpg";

import { motion } from "framer-motion";
import { TextShimmer } from "./TextShimmer";
import { GlowEffect } from "./GlowEffect";
import { SocialLinks } from "./SocialLinks";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Ensure the element is in the DOM and visible
      if (element.offsetParent !== null) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Fallback: scroll to element with a small delay to ensure rendering
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
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
      y: [-5, 5, -5],
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
            <motion.div variants={itemVariants} className="mb-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground mb-3 font-medium"
              >
                👋 Hello, I'm
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

            <motion.div variants={itemVariants} className="mb-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6"
              >
                A full-stack developer with 2 years of experience building
                reliable, clean, efficient solutions with a strong commitment to
                transparency and collaboration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={onContactClick}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-6 py-2.5 rounded-xl font-semibold text-base overflow-hidden
                    bg-gradient-to-r from-primary via-primary/90 to-primary/80
                    dark:from-primary dark:via-primary/90 dark:to-primary/80
                    text-primary-foreground dark:text-primary-foreground
                    shadow-lg shadow-primary/20 dark:shadow-primary/30
                    hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/40
                    transition-all duration-300 ease-out
                    border border-primary/20 dark:border-primary/30"
                >
                  {/* Animated shimmer sweep effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "linear",
                    }}
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40 blur-xl -z-10" />

                  {/* Text with enhanced visibility */}
                  <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-base">
                    Get In Touch
                  </span>
                </motion.button>
                <Button
                  onClick={() => scrollToSection("projects")}
                  variant="ghost"
                  className="hover:bg-transparent"
                  size="lg"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-200" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Services Section */}
            {/* <motion.div variants={itemVariants} className="mb-8">
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
            </motion.div> */}

            {/* Social Media Icons */}
            <SocialLinks />
          </div>

          {/* Profile Image - Right Side */}
          <motion.div
            variants={portraitVariants}
            className="flex-1 lg:flex-none mt-8 lg:mt-6 order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <motion.div
              variants={floatingVariants}
              className="relative max-w-72 md:max-w-60 mx-auto lg:max-w-md"
            >
              <GlowEffect
                colors={["#8F8DFF", "#3B47B8"]}
                mode="rotate"
                blur="medium"
                className="z-[-1]"
                duration={6}
              />
              {/* <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={heroPortrait}
                alt="Professional headshot of Dheeraj Manwani"
                className=" hidden md:block w-full h-auto object-cover rounded-3xl shadow-2xl"
              /> */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={heroPortraitMobile}
                alt="Professional headshot of Dheeraj Manwani"
                className=" w-full h-auto object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
