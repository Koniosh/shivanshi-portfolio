import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "shivanshidm@gmail.com",
    href: "mailto:shivanshidm@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9569227216",
    href: "tel:+919569227216",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Koniosh",
    href: "https://github.com/Koniosh",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shivanshi-upadhyay",
    href: "https://linkedin.com/in/shivanshi-upadhyay",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/15 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex items-center gap-4"
              >
                <div className="p-3 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <contact.icon size={24} className="text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{contact.label}</span>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Looking for a dedicated full-stack developer? Let's connect!
            </p>
            <a href="mailto:shivanshidm@gmail.com">
              <Button size="lg" className="group">
                <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
