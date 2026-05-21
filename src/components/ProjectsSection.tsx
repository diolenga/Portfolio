import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    title: "Safari Wrap",
    description:
      "A premium travel platform delivering curated safari experiences across Africa. Seamless itinerary planning, real-time availability, and luxury booking engineered for modern adventurers.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    status: "Live",
    type: "Travel Platform",
    gradient: "from-amber-500/30 to-orange-600/30",
    glowColor: "rgba(251,146,60,0.35)",
    url: "https://safariwrap.com",
    screenshot: "/pictures/projects/safariwrap.jpg",
  },
  {
    title: "Safari Wrap App",
    description:
      "The full-featured booking web application powering Safari Wrap — real-time dashboards, reservation management, and end-to-end customer journey tracking.",
    tech: ["React", "TypeScript", "REST API", "shadcn/ui"],
    status: "Live",
    type: "Web Application",
    gradient: "from-yellow-500/30 to-amber-600/30",
    glowColor: "rgba(234,179,8,0.35)",
    url: "https://app.safariwrap.com",
    screenshot: "/pictures/projects/safariwrap-app.jpg",
  },
  {
    title: "Olamtec",
    description:
      "A forward-thinking technology company website showcasing innovative digital solutions, enterprise software services, and IT consulting tailored for East Africa.",
    tech: ["Web", "UI/UX", "CMS", "SEO"],
    status: "Live",
    type: "Tech Company",
    gradient: "from-sky-500/30 to-cyan-600/30",
    glowColor: "rgba(14,165,233,0.35)",
    url: "https://olamtec.co.tz",
    screenshot: "/pictures/projects/olamtec.jpg",
  },
  {
    title: "Brainyield Schools",
    description:
      "A comprehensive school management platform for institutions in Seychelles — student records, academic performance tracking, communication tools, and administrative workflows in one place.",
    tech: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
    status: "Live",
    type: "EdTech Platform",
    gradient: "from-emerald-500/30 to-green-600/30",
    glowColor: "rgba(16,185,129,0.35)",
    url: "https://www.brainyieldschools.sc.tz",
    screenshot: "/pictures/projects/brainyield-schools.jpg",
  },
  {
    title: "Darasa 360",
    description:
      "Tanzania's next-generation e-learning ecosystem offering 360° educational content, interactive lessons, instructor management tools, and learner progress analytics.",
    tech: ["React", "Django", "PostgreSQL", "AWS"],
    status: "Live",
    type: "E-Learning",
    gradient: "from-violet-500/30 to-purple-600/30",
    glowColor: "rgba(139,92,246,0.35)",
    url: "https://www.darasa360.co.tz",
    screenshot: "/pictures/projects/darasa360.jpg",
  },
];

interface TiltState {
  x: number;
  y: number;
}

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) ${isHovered ? "translateZ(8px)" : "translateZ(0px)"}`,
        transition: isHovered ? "transform 0.08s linear" : "transform 0.45s cubic-bezier(0.23,1,0.32,1)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow bloom behind the card */}
      <div
        className="absolute inset-0 rounded-2xl blur-2xl -z-10 transition-opacity duration-500"
        style={{
          background: project.glowColor,
          opacity: isHovered ? 0.7 : 0,
        }}
      />

      <div className="glass-card rounded-2xl overflow-hidden border border-white/10 h-full flex flex-col">

        {/* ── Preview Header ── */}
        <div className="relative h-52 overflow-hidden bg-[#0b1220] flex flex-col">

          {/* Browser chrome — slides down from top on hover */}
          <div
            className="shrink-0 flex items-center gap-2 bg-[#1e2535] px-3 py-2 z-20 transition-all duration-400"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(-100%)",
              transitionTimingFunction: "cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/90" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/90" />
            </div>
            <div className="flex-1 bg-[#0b1220]/80 rounded-md px-3 py-0.5 text-[11px] text-gray-400 font-mono truncate">
              {project.url}
            </div>
          </div>

          {/* Screenshot — always visible */}
          <img
            src={project.screenshot}
            alt={`${project.title} preview`}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.04)" : "scale(1)" }}
            loading="lazy"
          />

          {/* Dark overlay — lightens on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{
              background: `linear-gradient(to bottom, rgba(11,18,32,0.55) 0%, rgba(11,18,32,0.2) 60%, rgba(11,18,32,0.65) 100%)`,
              opacity: isHovered ? 0.4 : 1,
            }}
          />

          {/* Accent gradient tint at top — project colour, visible when not hovered */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-400`}
            style={{ opacity: isHovered ? 0 : 0.55 }}
          />

          {/* Badges always visible */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="secondary" className="glass text-xs">
              {project.type}
            </Badge>
          </div>
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-green-500/80 text-white text-xs border-0">
              {project.status}
            </Badge>
          </div>
        </div>

        {/* ── Card Body ── */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-heading font-semibold mb-2 transition-colors duration-300"
            style={{ color: isHovered ? "hsl(199 89% 65%)" : "inherit" }}>
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs glass">
                {t}
              </Badge>
            ))}
          </div>

          {/* Visit button */}
          <Button
            variant="default"
            size="sm"
            className="w-full gap-2 group/btn"
            onClick={() => window.open(project.url, "_blank")}
          >
            <Globe className="w-4 h-4" />
            Visit Site
            <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="glass mb-4">
            Featured Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Projects That Make Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Live products I've built — from travel platforms to e-learning ecosystems — solving real problems for real users.
          </p>
        </div>

        {/* Grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>

      </div>
    </div>
  </section>
);
