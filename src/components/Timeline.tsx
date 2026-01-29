import { Factory, Building2, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "1985",
    title: "Ayeng Wood Products Pvt Ltd",
    location: "Arunachal Pradesh",
    description: "Our journey began with the establishment of a manufacturing factory, laying the foundation for quality wood products.",
    icon: Factory,
    color: "accent",
  },
  {
    year: "1998",
    title: "Singhal Brothers",
    location: "Ahmedabad, Gujarat",
    description: "Expanded into wholesale distribution, becoming Gujarat's trusted supplier of plywood and wood products.",
    icon: Building2,
    color: "primary",
  },
  {
    year: "2023",
    title: "Singhal Studio",
    location: "Ahmedabad, Gujarat",
    description: "Launched our premium retail showroom featuring decorative veneers, laminates, and designer surfaces.",
    icon: Sparkles,
    color: "accent",
  },
];

const MilestoneContent = ({ milestone, align }: { milestone: typeof milestones[0]; align: "left" | "right" }) => (
  <div className={align === "left" ? "pr-4" : "pl-4"}>
    <span
      className={`inline-block text-5xl font-display font-bold mb-3 ${
        milestone.color === "primary" ? "text-primary" : "text-accent"
      }`}
    >
      {milestone.year}
    </span>
    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
      {milestone.title}
    </h3>
    <p className="text-sm text-muted-foreground mb-3">{milestone.location}</p>
    <p className="text-muted-foreground leading-relaxed">
      {milestone.description}
    </p>
  </div>
);

const Timeline = () => {
  return (
    <section id="journey" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
            Our Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Four Decades of
            <br />
            <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From a single factory to a trusted family of businesses, our commitment 
            to quality has remained unwavering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Central Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent via-primary to-accent rounded-full hidden md:block animate-timeline-line"
            style={{ top: 0 }}
          />

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="relative mb-12 last:mb-0 animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.3}s` }}
            >
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                      milestone.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    <milestone.icon className="w-8 h-8" />
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <span
                      className={`inline-block text-3xl font-display font-bold mb-2 ${
                        milestone.color === "primary" ? "text-primary" : "text-accent"
                      }`}
                    >
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{milestone.location}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                {/* Left Column */}
                <div className={index % 2 === 0 ? "text-right" : ""}>
                  {index % 2 === 0 && <MilestoneContent milestone={milestone} align="right" />}
                </div>

                {/* Center Icon */}
                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transform transition-transform duration-300 hover:scale-110 ${
                      milestone.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    <milestone.icon className="w-10 h-10" />
                  </div>
                  {/* Connecting dot - positioned based on content side */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                      index % 2 === 0 ? "-left-8" : "-right-8"
                    } ${
                      milestone.color === "primary" ? "bg-primary" : "bg-accent"
                    }`}
                  />
                </div>

                {/* Right Column */}
                <div className={index % 2 === 1 ? "text-left" : ""}>
                  {index % 2 === 1 && <MilestoneContent milestone={milestone} align="left" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Years of Legacy", value: "40+", color: "primary" },
            { label: "Group Companies", value: "3", color: "accent" },
            { label: "States Covered", value: "2", color: "primary" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg animate-fade-in ${
                stat.color === "primary"
                  ? "bg-primary/5 border-primary/20 hover:border-primary/40"
                  : "bg-accent/5 border-accent/20 hover:border-accent/40"
              }`}
              style={{ animationDelay: `${1.4 + index * 0.1}s` }}
            >
              <span
                className={`text-4xl font-display font-bold ${
                  stat.color === "primary" ? "text-primary" : "text-accent"
                }`}
              >
                {stat.value}
              </span>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
