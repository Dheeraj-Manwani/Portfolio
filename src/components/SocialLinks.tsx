import linkedIn from "@/assets/linkedin.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/x.svg";
import github from "@/assets/github_new.svg";
import gmail from "@/assets/gmail.svg";
import whatsapp from "@/assets/whatsapp.svg";
import { motion } from "framer-motion";
import { itemVariants } from "./HeroSection";

export const SocialLinks = () => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center lg:items-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="flex gap-4 justify-center lg:justify-start"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/dheeraj-manwani-63192a215/"
          target="_blank"
          className="w-12 h-12 bg-muted/50 dark:bg-muted/30 rounded-xl flex items-center justify-center text-muted-foreground  hover:text-white transition-all duration-300 border border-border/50 hover:border-primary/50"
          data-testid="social-linkedin"
        >
          <img src={linkedIn} alt="LinkedIn" className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:dkmanwani2000@gmail.com"
          target="_blank"
          className="w-12 h-12 bg-muted/50 dark:bg-muted/30 rounded-xl flex items-center justify-center text-muted-foreground  hover:text-white transition-all duration-300 border border-border/50 hover:border-primary/50"
          data-testid="social-gmail"
        >
          <img src={gmail} alt="gmail" className="w-7 h-7" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/9340291210?text=Hi Dheeraj!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-muted/50 dark:bg-muted/30 rounded-xl flex items-center justify-center text-muted-foreground  hover:text-white transition-all duration-300 border border-border/50 hover:border-primary/50"
          data-testid="social-whatsapp"
        >
          <img src={whatsapp} alt="whatsapp" className="w-7 h-7" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/Dheeraj-Manwani"
          target="_blank"
          className="w-12 h-12 bg-muted/50 dark:bg-muted/30 rounded-xl flex items-center justify-center text-muted-foreground  hover:text-white transition-all duration-300 border border-border/50 hover:border-primary/50"
          data-testid="social-github"
        >
          <img src={github} alt="github" className="w-8 h-8" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://x.com/dkManwani2000"
          target="_blank"
          className="w-12 h-12 bg-muted/50 dark:bg-muted/30 rounded-xl flex items-center justify-center text-muted-foreground  hover:text-white transition-all duration-300 border border-border/50 hover:border-primary/50"
          data-testid="social-twitter"
        >
          <img src={twitter} alt="Twitter" className="w-7 h-7" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.instagram.com/_dheeraj_manwani_/"
          target="_blank"
          className="w-12 h-12 bg-muted/50 dark:bg-muted/30 rounded-xl flex items-center justify-center text-muted-foreground  hover:text-white transition-all duration-300 border border-border/50 hover:border-primary/50"
          data-testid="social-instagram"
        >
          <img src={instagram} alt="Instagram" className="w-6 h-6" />
        </motion.a>
      </motion.div>
      {/* 
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.6 }}
      className="mt-4 text-center lg:text-left"
    >
      <motion.p className="text-xs text-muted-foreground/70 leading-relaxed max-w-xs">
        Follow me for insights on web development, tech trends, and
        project updates
      </motion.p>
    </motion.div> */}
    </motion.div>
  );
};
