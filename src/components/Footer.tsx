import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            className="btn-ghost group"
          >
            <ArrowUp className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
            Back to Top
          </Button>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              aria-label="Send Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Contact Email */}
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              Ready to start a project?
            </p>
            <a
              href="mailto:alex@example.com"
              className="text-primary hover:text-primary/80 font-medium transition-colors duration-300 underline decoration-2 underline-offset-4"
            >
              alex@example.com
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-border pt-8 w-full">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Dheeraj Manwani. Built with passion and React.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Designed for trust, built for performance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
