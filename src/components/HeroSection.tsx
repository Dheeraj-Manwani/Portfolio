import { useEffect, useState } from "react";
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

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

  return (
    <section id="home" className="min-h-screen bg-gradient-hero pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)]">
          {/* Text Content - Left Side */}
          <div className="flex-1 lg:pr-12 text-center lg:text-left">
            <div
              className={`transition-all duration-800 ${
                isVisible
                  ? "animate-slide-up opacity-100"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-lg md:text-xl text-muted-foreground mb-2">
                I'm
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 relative inline-block">
                Dheeraj Manwani
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></div>
              </h1>
            </div>

            <div
              className={`transition-all duration-800 delay-200 ${
                isVisible
                  ? "animate-slide-up opacity-100"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8">
                A full stack developer who provides services for digital
                programming and design content needs, for all businesses with
                more than 5 years of experience
              </p>
            </div>

            {/* Services Section */}
            <div
              className={`transition-all duration-800 delay-300 ${
                isVisible
                  ? "animate-slide-up opacity-100"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-4">
                Let's build quality products in programming and design with my
                services
              </p>

              <button
                onClick={() => scrollToSection("skills")}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
              >
                show more <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
              </button>
            </div>

            {/* Social Media Icons */}
            <div
              className={`flex gap-4 justify-center lg:justify-start mt-8 transition-all duration-800 delay-400 ${
                isVisible
                  ? "animate-slide-up opacity-100"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                variant="outline"
                size="sm"
                className="w-10 h-10 rounded-full p-0 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-10 h-10 rounded-full p-0 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button
                onClick={onContactClick}
                variant="outline"
                size="sm"
                className="w-10 h-10 rounded-full p-0 border-primary/20 hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div
            className={`flex-1 lg:flex-none mt-12 lg:mt-0 transition-all duration-800 delay-300 ${
              isVisible
                ? "animate-slide-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              <img
                src={heroPortrait}
                alt="Professional headshot of Dheeraj Manwani"
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
