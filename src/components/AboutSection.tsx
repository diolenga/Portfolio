import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Zap, Users } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    { category: "Backend", items: ["Spring Boot", "Java", "PostgreSQL", "Redis", "REST APIs"] },
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vite"] },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Monitoring"] },
    { category: "Tools", items: ["Git", "IntelliJ", "VS Code", "Figma", "Postman"] }
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "I write maintainable, testable code that stands the test of time and scale."
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimized applications that load fast and feel responsive on every device."
    },
    {
      icon: Database,
      title: "Full-Stack Expertise",
      description: "From database design to user interfaces, I handle the complete development stack."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Building experiences that users love, backed by solid engineering principles."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="glass mb-4">
              About
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Crafting Digital Experiences
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With expertise spanning modern web technologies, I build applications that are both 
              beautiful and battle-tested, delivering exceptional user experiences at scale.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillSet, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-4 text-primary">
                    {skillSet.category}
                  </h3>
                  <div className="space-y-2">
                    {skillSet.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="mr-2 mb-2 glass text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};