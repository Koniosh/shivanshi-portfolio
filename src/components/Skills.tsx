import { 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  FileCode,
  Layers,
  TestTube,
  FileJson
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Core",
    icon: Code,
    skills: ["TypeScript", "JavaScript", "Java", "SQL", "NoSQL"],
  },
  {
    title: "Frontend",
    icon: FileCode,
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Backend",
    icon: Layers,
    skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "Django"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (EC2, Lambda, RDS, S3)", "Azure", "Docker", "CI/CD", "Serverless"],
  },
  {
    title: "Architecture",
    icon: Settings,
    skills: ["Clean Architecture", "Domain-Driven Design", "Microservices", "Functional Programming"],
  },
  {
    title: "API & Testing",
    icon: TestTube,
    skills: ["Postman", "Swagger", "REST APIs", "N8N Automation"],
  },
  {
    title: "Tools",
    icon: FileJson,
    skills: ["Git", "Turborepo", "Windmill", "Deno", "AI SDK"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Technical Skills
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Strongest areas: Node.js, Express.js, MongoDB, SQL, TypeScript, Next.js, Database Design
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg relative overflow-hidden"
              >
                {/* Background Icon */}
                <category.icon
                  size={100}
                  className="absolute -right-4 -bottom-4 text-primary/5 group-hover:text-primary/10 transition-colors duration-500"
                />

                <div className="relative z-10">
                  <category.icon
                    size={28}
                    className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-background/50 text-muted-foreground border border-border hover:border-primary/30 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-card border border-border">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Education
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-4">
                Bachelor of Technology in Computer Science
              </h3>
              <p className="text-muted-foreground">
                Kamla Nehru Institute of Technology
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Expected 2027
              </p>
            </div>

            <div className="p-8 bg-card border border-border">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Achievements
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-4">
                Top 8 at iNeuron Hackathon
              </h3>
              <p className="text-muted-foreground">
                Represented college at LPU, Punjab
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Active open-source contributor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
