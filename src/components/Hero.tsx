import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30 dark:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-secondary/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p
            className="text-muted-foreground mb-4"
            style={{
              animation: 'fade-up 0.6s ease-out 0.1s both'
            }}
          >
            Hello, I'm
          </p>

          {/* Name with shimmer effect */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto] bg-clip-text text-transparent"
            style={{
              animation: 'fade-up 0.6s ease-out 0.2s both, text-shimmer 3s linear infinite'
            }}
          >
            Shivanshi Upadhyay
          </h1>

          {/* Role with typing effect styling */}
          <div
            className="mb-8"
            style={{
              animation: 'fade-up 0.6s ease-out 0.3s both'
            }}
          >
            <span className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer
            </span>
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </div>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            style={{
              animation: 'fade-up 0.6s ease-out 0.4s both'
            }}
          >
            Crafting scalable web applications with modern technologies.
            Passionate about clean architecture, performance optimization, and building
            products that make a difference.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            style={{
              animation: 'fade-up 0.6s ease-out 0.5s both'
            }}
          >
            <a href="/Shivanshi_Upadhyay.pdf" download>
              <Button className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={18} />
                  Download Resume
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="group">
                <span className="flex items-center gap-2">
                  <Mail size={18} />
                  Get in Touch
                </span>
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6"
            style={{
              animation: 'fade-up 0.6s ease-out 0.6s both'
            }}
          >
            <a
              href="https://github.com/Koniosh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivanshi-u-9a7573281"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:shivanshidm@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};
