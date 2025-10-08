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
    "GRAPHICS DESIGNER"
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
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="mb-6 animate-fade-in">
            <Badge variant="secondary" className="glass text-sm px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              Available for new projects
            </Badge>
          </div>

          {/* Main Content Glass Card */}
          <div className="glass-card max-w-4xl mx-auto animate-slide-up">
            {/* Name with Typewriter Effect */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
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
                  <span className="text-xl md:text-2xl font-medium text-muted-foreground animate-fade-in-out">
                    {titles[currentTitleIndex]}
                  </span>
                </div>
              )}
            </div>

            {/* Tagline */}
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Ship fast. Build smart.
              <span className="block text-primary mt-2">Delight users.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm a <span className="text-foreground font-medium">Full-Stack Engineer</span> specializing in Spring Boot & React. 
              I design robust backends, polished frontends, and delightful UX systems that scale.
            </p>

            {/* Tech Stack Indicators */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Database className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Spring Boot</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">React</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};