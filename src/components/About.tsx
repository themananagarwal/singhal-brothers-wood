import { CheckCircle, History, Target, Heart } from "lucide-react";

const values = [
  {
    icon: History,
    title: "Legacy of Trust",
    description: "Since 1998, we've built relationships that span generations with our commitment to quality.",
  },
  {
    icon: Target,
    title: "Quality First",
    description: "Every product meets stringent quality standards before reaching our customers.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your success is our priority. We go above and beyond to meet your requirements.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Family Business
              <br />
              <span className="text-primary">Built on Trust</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 1998 in Ahmedabad, Gujarat, Singhal Brothers has grown from a small 
              family venture to one of the region's most trusted wholesale suppliers of 
              plywood and wood products.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our journey of over 25 years has been defined by unwavering commitment to 
              quality, fair pricing, and lasting relationships with our dealers and customers 
              across India.
            </p>

            <ul className="space-y-4">
              {[
                "Wide range of ISI certified products",
                "Competitive wholesale pricing",
                "Timely delivery across Gujarat & India",
                "Expert guidance on product selection",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex gap-5 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
