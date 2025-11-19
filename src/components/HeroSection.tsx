import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Code, Database } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullName = "DIONIS EDWARD LENGA";
  const titles = [
    "DEVELOPER",
    "NETWORK ENGINEER", 
    "DATA ANALYST",
    "DATABASE ADMIN",
    "FULL-STACK ENGINEER",
    "SYSTEM ARCHITECT",
    "GRAPHICS DESIGNER",
    "SOCIAL MEDIA MANAGER"
  ];

  // Typewriter effect for name
  useEffect(() => {
    if (displayedName.length < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedName, fullName]);

  // Rotating titles after name is complete
  useEffect(() => {
    if (isTypingComplete) {
      const interval = setInterval(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isTypingComplete, titles.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/20" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">

          {/* Status Badge */}
          <div className="mb-8 text-center animate-fade-in">
            <Badge variant="secondary" className="glass text-sm px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              Available for new projects
            </Badge>
          </div>

          {/* Profile Image - Centered at Top */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <div className="relative group">
              {/* Glow effect background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>

              {/* Image container */}
              <div className="relative glass-card p-2 rounded-2xl overflow-hidden">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-xl overflow-hidden">
                  <img
                    src="/pictures/dio2.png"
                    alt="Dionis Edward Lenga - Full Stack Engineer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Text Content - Full Width Below */}
          <div className="text-center">
            {/* Name with Typewriter Effect */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {displayedName}
                  {displayedName.length < fullName.length && (
                    <span className="animate-pulse text-primary">|</span>
                  )}
                </span>
              </h1>

              {/* Rotating Titles */}
              {isTypingComplete && (
                <div className="h-12 flex items-center justify-center">
                  <span className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground animate-fade-in-out">
                    {titles[currentTitleIndex]}
                  </span>
                </div>
              )}
            </div>

            {/* Tagline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ship fast. Build smart.
              <span className="block text-primary mt-2">Delight users.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              I'm a <span className="text-foreground font-medium">Full-Stack Engineer</span> specializing in Spring Boot & React.
              I design robust backends, polished frontends, and delightful UX systems that scale.
            </p>

            {/* Tech Stack Indicators */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 flex-wrap px-4">
              <div className="flex items-center gap-2 glass px-3 sm:px-4 py-2 rounded-full">
                <Database className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium">Spring Boot</span>
              </div>
              <div className="flex items-center gap-2 glass px-3 sm:px-4 py-2 rounded-full">
                <Database className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium">Laravel</span>
              </div>
              <div className="flex items-center gap-2 glass px-3 sm:px-4 py-2 rounded-full">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium">React</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                variant="hero"
                size="hero"
                className="group"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="hero-secondary"
                size="hero"
                onClick={() => scrollToSection('contact')}
              >
                Get in touch ↗
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};