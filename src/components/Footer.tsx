import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
  Code,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-gradient-to-t from-card to-background border-t border-border py-12 md:py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center space-y-8 md:space-y-12"
        >
          {/* Back to Top */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="btn-ghost group bg-card/50 border border-border hover:bg-card hover:shadow-lg transition-all duration-300 px-6 py-3 rounded-xl"
            >
              <ArrowUp className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
              Back to Top
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6 md:space-x-8"
          >
            <motion.a
              variants={socialVariants}
              whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 bg-card/50 border border-border rounded-xl hover:bg-card hover:shadow-md"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              variants={socialVariants}
              whileHover={{ scale: 1.2, y: -4, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 bg-card/50 border border-border rounded-xl hover:bg-card hover:shadow-md"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              variants={socialVariants}
              whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:dheeraj@example.com"
              className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 bg-card/50 border border-border rounded-xl hover:bg-card hover:shadow-md"
              aria-label="Send Email"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>

          {/* Contact Email */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-muted-foreground mb-3 text-base md:text-lg">
              Ready to start a project?
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:dheeraj@example.com"
              className="text-primary hover:text-primary/80 font-medium transition-colors duration-300 underline decoration-2 underline-offset-4 text-lg md:text-xl"
            >
              dheeraj@example.com
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                About Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                Contact
              </motion.button>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="text-center border-t border-border pt-8 w-full"
          >
            <p className="text-muted-foreground text-sm md:text-base mb-2">
              © {currentYear} Dheeraj Manwani. Built with{" "}
              <motion.span
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="inline-flex items-center gap-1 text-primary"
              >
                <Heart className="h-4 w-4" />
                passion
              </motion.span>{" "}
              and{" "}
              <motion.span
                whileHover={{ scale: 1.2 }}
                className="inline-flex items-center gap-1 text-primary"
              >
                <Code className="h-4 w-4" />
                React
              </motion.span>
              .
            </p>
            <p className="text-muted-foreground text-xs md:text-sm flex items-center justify-center gap-2">
              <Zap className="h-3 w-3" />
              Designed for trust, built for performance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
