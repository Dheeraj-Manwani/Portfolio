import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ContactModal from "@/components/ContactModal";
import ContactFloat from "@/components/ContactFloat";
import Footer from "@/components/Footer";
import { NewProjectsSection } from "@/components/NewProjectsSection";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Theme management
  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    setIsDark(shouldBeDark);

    // Apply theme to document
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    // Save preference
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    // Apply to document
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`min-h-screen bg-background transition-all duration-300 ${
        isContactModalOpen ? "" : ""
      }`}
    >
      {/* Navigation */}
      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        isModalOpen={isContactModalOpen}
      />

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${
          isContactModalOpen ? "" : ""
        }`}
      >
        <HeroSection onContactClick={openContactModal} />
        <SkillsSection />
        <NewProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <div
        className={`transition-all duration-300 ${
          isContactModalOpen ? "backdrop-blur-sm" : ""
        }`}
      >
        <Footer />
      </div>

      {/* Floating Contact Button */}
      <div
        className={`transition-all duration-300 ${
          isContactModalOpen ? "backdrop-blur-sm" : ""
        }`}
      >
        <ContactFloat onClick={openContactModal} />
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default Index;
