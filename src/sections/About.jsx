import { Cpu, Layers, Rocket, Workflow } from "lucide-react";

const highlights = [
  {
    icon: Workflow,
    title: "Clean & Maintainable Architecture",
    description: "Well-structured code that is easy to understand and update.",
  },
  {
    icon: Rocket,
    title: "Performance-Focused Solutions",
    description: "Fast and smooth applications with optimized performance.",
  },
  {
    icon: Layers,
    title: "Scalable Application Design",
    description: "Systems built to grow as usage increases.",
  },
  {
    icon: Cpu,
    title: "Modern Web Technologies",
    description: "Using current tools and frameworks for development.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a full stack web developer who likes to build working
                applications and improve skills by developing real projects. I
                firstly became interested in web development and wanted to know
                how websites actually operated behind the scenes, and this
                curiosity of mine turned into an interest in building such
                applications myself.
              </p>

              <p>
                I mainly build my applications using React and backend
                technologies like Node.js to create complete web applications.
                Throughout all my projects, I properly learnt how to structure
                code, connecting frontend to backend and also to work with
                databases.
              </p>

              <p>
                Outside of coding, I enjoy exploring new technologies and
                pushing myself to grow as a developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I try to build web applications that are clean, reliable and
                easy for people to use, while constantly improving myself to get
                better."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
