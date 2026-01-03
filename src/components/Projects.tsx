import { ExternalLink, Github, Smartphone, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "VisitPulse",
    subtitle: "MR Management Application",
    description:
      "A Progressive Web App for pharmaceutical companies to manage Medical Representative activities including visit planning, sales tracking, and compliance monitoring.",
    features: [
      "Web dashboard for managers",
      "Marketing message broadcasting",
      "Sales metric reporting with CSV export",
      "Role-based access control",
    ],
    icon: Smartphone,
    tech: ["React", "Node.js", "PostgreSQL", "PWA"],
    featured: true,
  },
  {
    title: "EduFeeHub",
    subtitle: "Fee Management System",
    description:
      "A comprehensive fee management system for educational institutes with advanced payment workflow features.",
    features: [
      "Snooze/unsnooze payment workflow",
      "Student payment tracking",
      "Automated notifications",
    ],
    icon: CreditCard,
    tech: ["TypeScript", "Supabase", "SvelteKit"],
    featured: false,
  },
  {
    title: "SvelteBase",
    subtitle: "SvelteKit–Supabase Boilerplate",
    description:
      "A production-ready boilerplate combining SvelteKit with Supabase for rapid application development.",
    features: [
      "User creation logic",
      "WebPush notifications",
      "Authentication flow",
    ],
    icon: Users,
    tech: ["SvelteKit", "Supabase", "TypeScript"],
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Featured Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                  project.featured ? "md:grid md:grid-cols-2" : ""
                }`}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Section for Featured */}
                {project.featured && (
                  <div className="relative p-12 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <project.icon
                      size={120}
                      className="text-primary/20 group-hover:text-primary/40 transition-colors duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon
                        size={64}
                        className="text-primary group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="relative p-8">
                  {!project.featured && (
                    <project.icon
                      size={40}
                      className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                    />
                  )}

                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                  
                  <h3 className="text-2xl font-bold mt-1 mb-4">{project.title}</h3>
                  
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Open Source Contributions */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">Open Source Contributions</h3>
            <p className="text-muted-foreground mb-6">
              Active contributor to organizations like Zulip, ToolJet, and OHC Network
            </p>
            <a
              href="https://github.com/Koniosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="group">
                <Github size={18} className="mr-2" />
                View GitHub Profile
                <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
