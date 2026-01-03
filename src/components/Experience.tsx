import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "R2i2 Partners",
    period: "Jan 2025 – Aug 2025",
    description: [
      "Led development of VisitPulse, a PWA for pharmaceutical companies to manage MR activities",
      "Contributed to EduFeeHub fee management system; architected snooze/unsnooze payment workflow",
      "Built SvelteBase boilerplate with user creation logic and WebPush notifications",
    ],
    current: true,
  },
  {
    title: "Backend Developer Intern",
    company: "ONBO",
    period: "Oct 2023 – Dec 2024",
    description: [
      "Optimized database performance by 35% through RLS subqueries and indexing improvements",
      "Implemented new product onboarding flow with Django and Node.js Keycloak library",
      "Built NestJS integration microservice for PandaDoc and DocuSign",
      "Created utility scripts using Deno and TypeScript with Windmill",
    ],
    current: false,
  },
  {
    title: "Backend Developer Intern",
    company: "XFlow Labs",
    period: "Jun 2024 – Aug 2024",
    description: [
      "Architected multi-tenant database using PostgreSQL's Row-Level Security (RLS)",
      "Implemented scalable resource capping at tenant and user levels",
    ],
    current: false,
  },
  {
    title: "Software Development Intern",
    company: "Deep Ecom",
    period: "Oct 2022 – Nov 2022",
    description: [
      "Collaborated with Amazon India team on e-commerce adapter backend",
      "Built with TypeScript using functional programming and Effect-TS library",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Career Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Work Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-background md:-translate-x-1/2 ${
                    exp.current ? "bg-primary animate-glow-pulse" : "bg-muted"
                  }`}
                  style={{ top: "6px" }}
                />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                    {exp.current && (
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary mb-4">
                        Current
                      </span>
                    )}

                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Briefcase size={14} />
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
