import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { CertificationsSection } from "./CertificationsSection";
import { ContactSection } from "./ContactSection";

export const Portfolio = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <section id="projects">
        <ProjectsSection />
      </section>
      <CertificationsSection />
      <section id="contact">
        <ContactSection />
      </section>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Full-Stack Engineer. Built with React & Spring Boot.
            </p>
            <p className="text-sm text-muted-foreground">
              Crafted with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};