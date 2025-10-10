"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

const sections = [
  { id: "intro", label: "About", description: "Get to know me" },
  { id: "work", label: "Experience", description: "My career journey" },
  { id: "projects", label: "Projects", description: "What I've built" },
  { id: "connect", label: "Contact", description: "Let's connect" },
];

export default function Navigation() {
  const isNavigatingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [activeSection, setActiveSection] = useState("intro");

  const handleNavigation = (sectionId: string) => {
    isNavigatingRef.current = true;
    timeoutRef.current && clearTimeout(timeoutRef.current);

    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Reset the flag after scroll animation completes
    timeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Don't run if we're currently navigating programmatically
      if (isNavigatingRef.current) return;

      const sections = ["intro", "work", "projects", "connect"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
      <div className="flex items-center gap-8 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3">
        <AnimatePresence>
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleNavigation(section.id)}
                className="group cursor-pointer flex items-center gap-3 transition-all duration-300 hover:scale-105"
                aria-label={`Navigate to ${section.label}`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-foreground scale-125"
                      : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60 group-hover:scale-110"
                  }`}
                />
                <div className="transition-all duration-300 whitespace-nowrap text-left">
                  <div
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {section.label}
                  </div>

                  {isActive && (
                    <motion.div
                      key={`${section.id}-description`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs"
                    >
                      {section.description}
                    </motion.div>
                  )}
                </div>
              </button>
            );
          })}
        </AnimatePresence>
      </div>
    </nav>
  );
}
