import { useMemo } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  ChevronDown,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "Git",
];

export const Hero = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        // eslint-disable-next-line react-hooks/purity
        left: Math.random() * 100,
        // eslint-disable-next-line react-hooks/purity
        top: Math.random() * 100,
        // eslint-disable-next-line react-hooks/purity
        anim: Math.random() * 20,
        // eslint-disable-next-line react-hooks/purity
        animDelay: Math.random() * 5,
      })),
    [],
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="background-image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${15 + dot.anim}s ease-in-out infinite`,
              animationDelay: `${dot.animDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Content Section */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer • React & Node.js
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I’m Amin — a full stack developer who enjoys building web
                applications and turning ideas into real projects. I like
                working on Linux, learning new technologies, and continuously
                improving to create better software solutions.
              </p>
            </div>

            {/* Call To Actions (CTA's) */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="large">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton>
                <a
                  href="https://drive.google.com/uc?export=download&id=17l-M5ZxBKltGOe5H2AgNKcjlJwp9RCh3"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                {
                  icon: Github,
                  href: "https://github.com/MohammedAmin67",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/mohammed-amin-369142346/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary-green/10 hover:text-primary transitions-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Mohammed Amin"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce cursor-pointer" />
        </a>
      </div>
    </section>
  );
};
