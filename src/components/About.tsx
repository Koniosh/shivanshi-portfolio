import { Code2, Database, Server, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React.js, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Express.js, NestJS, FastAPI",
  },
  {
    icon: Database,
    title: "Database",
    description: "MongoDB, PostgreSQL, SQL, Redis",
  },
  {
    icon: Layers,
    title: "Architecture",
    description: "Clean Architecture, DDD, Microservices",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Passionate Developer, Problem Solver
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science student at Kamla Nehru Institute of Technology 
                with a passion for building scalable web applications. My journey in 
                software development has led me through diverse projects from e-commerce 
                adapters to pharmaceutical management systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in full-stack development with a strong focus on backend 
                architecture. I've contributed to open-source projects like Zulip, ToolJet, 
                and OHC Network, and represented my college at hackathons, scoring in the top 8 
                at iNeuron's hackathon at LPU, Punjab.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise includes optimizing database performance, implementing 
                multi-tenant architectures, and building microservices following clean 
                architecture principles.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon 
                    size={32} 
                    className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
