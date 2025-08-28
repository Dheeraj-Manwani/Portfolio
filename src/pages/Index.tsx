import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactModal from "@/components/ContactModal";
import ContactFloat from "@/components/ContactFloat";
import Footer from "@/components/Footer";

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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation
        isDark={isDark}
        toggleTheme={toggleTheme}
        openContactModal={openContactModal}
      />

      {/* Main Content */}
      <main>
        <HeroSection onContactClick={openContactModal} />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Contact Button */}
      <ContactFloat onClick={openContactModal} />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default Index;
