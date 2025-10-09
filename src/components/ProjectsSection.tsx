import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Monitor } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory, payment processing, and admin dashboard. Built with Spring Boot microservices and React frontend.",
      tech: ["Spring Boot", "React", "PostgreSQL", "Redis", "Stripe"],
      status: "In production",
      type: "Full-Stack",
      gradient: "from-blue-500/20 to-cyan-500/20",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Task Management SaaS",
      description: "Collaborative project management tool with real-time updates, file sharing, and team analytics. Supports 10k+ active users.",
      tech: ["Java", "React", "WebSockets", "AWS", "Docker"],
      status: "In production",
      type: "SaaS Platform",
      gradient: "from-purple-500/20 to-pink-500/20",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics platform for financial data visualization with interactive charts and automated reporting capabilities.",
      tech: ["Spring Boot", "Next.js", "Chart.js", "MySQL", "Jenkins"],
      status: "Open source",
      type: "Analytics",
      gradient: "from-green-500/20 to-emerald-500/20",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "API Gateway Service",
      description: "High-performance microservices gateway with rate limiting, authentication, and monitoring. Handles 1M+ requests daily.",
      tech: ["Java", "Spring Gateway", "Kubernetes", "Prometheus", "Grafana"],
      status: "In production",
      type: "Infrastructure",
      gradient: "from-orange-500/20 to-red-500/20",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Social Media Analytics",
      description: "AI-powered social media monitoring and analytics platform with sentiment analysis and trend prediction capabilities.",
      tech: ["Python", "Django", "TensorFlow", "PostgreSQL", "Redis"],
      status: "In development",
      type: "AI/ML",
      gradient: "from-indigo-500/20 to-purple-500/20",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "Multi-cloud infrastructure management tool with automated scaling, cost optimization, and security monitoring.",
      tech: ["Go", "React", "Terraform", "AWS", "Azure"],
      status: "In production",
      type: "DevOps",
      gradient: "from-teal-500/20 to-blue-500/20",
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="glass mb-4">
              Featured Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Projects That Make Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, here are some of the applications I've built 
              that solve real problems and delight users.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card group overflow-hidden">
                
                {/* Project Header with Gradient */}
                <div className={`h-24 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                  <div className="absolute top-4 left-6">
                    <Badge variant="secondary" className="glass text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-6">
                    <Badge 
                      variant={project.status === "In production" ? "default" : "secondary"} 
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Monitor className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs glass">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 group"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="glass"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button 
              variant="hero-secondary" 
              size="lg"
              onClick={() => window.open('https://github.com/Dior7978', '_blank')}
            >
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};