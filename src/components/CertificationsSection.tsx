import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Zap, BookOpen, Code, Database } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024",
      icon: Shield,
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-500/10 to-yellow-500/10"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2024",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      year: "2023",
      icon: Shield,
      color: "from-blue-600 to-blue-400",
      bgColor: "from-blue-600/10 to-blue-400/10"
    },
    {
      title: "Spring Professional Certification",
      issuer: "VMware",
      year: "2024",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2024",
      icon: Code,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10"
    },
    {
      title: "Database Design Specialist",
      issuer: "Oracle",
      year: "2023",
      icon: Database,
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-500/10 to-orange-500/10"
    },
    {
      title: "DevOps Engineering",
      issuer: "Docker Inc.",
      year: "2024",
      icon: Zap,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco",
      year: "2025", // Update with your actual year
      icon: Shield,
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-500/10 to-green-500/10",
      image: "/badges/cisco-networking-basics.png", // Your Credly badge image
      verifyUrl: "https://www.credly.com/badges/99cff952-0149-41c5-8ac4-b9d519d8b69a" // Your Credly verification URL
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="glass mb-4">
              <Award className="w-4 h-4 mr-2" />
              Certifications & Badges
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Professional Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development through industry-recognized 
              certifications and specialized training programs.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card 
                  key={index} 
                  className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={`h-32 bg-gradient-to-br ${cert.bgColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5" />
                    
                    {/* Badge Image or Icon */}
                    {cert.image ? (
                      <div className="absolute top-4 left-4">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-12 h-12 rounded-lg object-cover shadow-lg"
                        />
                      </div>
                    ) : (
                      <div className="absolute top-4 left-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="glass text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    {cert.verifyUrl && (
                      <a 
                        href={cert.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline"
                      >
                        Verify Certificate ↗
                      </a>
                    )}
                    
                    {/* Animated progress bar */}
                    <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${cert.color} rounded-full animate-pulse`}
                        style={{
                          width: '100%',
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glass-card max-w-2xl mx-auto">
              <h3 className="text-xl font-heading font-bold mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-muted-foreground mb-6">
                I believe in continuous improvement and staying updated with the latest 
                technologies and industry best practices.
              </p>
              <Badge variant="secondary" className="glass">
                <BookOpen className="w-4 h-4 mr-2" />
                Currently pursuing additional certifications
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
