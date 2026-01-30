import { CheckCircle, History, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: History,
    title: "Legacy of Trust",
    description: "Since 1998, we've built relationships that span generations with our commitment to quality.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Quality First",
    description: "Every product meets stringent quality standards before reaching our customers.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your success is our priority. We go above and beyond to meet your requirements.",
    color: "primary",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Family Business
              <br />
              Built on <span className="text-primary">Trust</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Our story began in 1993 with Ayeng Wood Products in Arunachal Pradesh.
              In 1998, we expanded to Ahmedabad with Singhal Brothers, growing into one of
              Gujarat's most trusted wholesale suppliers of plywood and wood products.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our journey of over 30 years has been defined by unwavering commitment to
              quality, fair pricing, and lasting relationships with our dealers and customers
              across India. In 2023, we launched Singhal Studio to bring premium decorative
              surfaces directly to design enthusiasts.
            </p>

            <ul className="space-y-4">
              {[
                { text: "Wide range of ISI certified products", color: "primary" },
                { text: "Competitive wholesale pricing", color: "primary" },
                { text: "Timely delivery across Gujarat & India", color: "primary" },
                { text: "Expert guidance on product selection", color: "primary" },
              ].map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <CheckCircle className={`w-5 h-5 flex-shrink-0 ${item.color === "primary" ? "text-primary" : "text-accent"}`} />
                  <span className="text-foreground">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex gap-5 p-6 bg-card rounded-xl border transition-all duration-300 hover:shadow-lg ${value.color === "primary"
                  ? "border-primary/20 hover:border-primary/40"
                  : "border-accent/20 hover:border-accent/40"
                  }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${value.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                  }`}>
                  <value.icon className={`w-7 h-7 ${value.color === "primary" ? "text-primary" : "text-accent"}`} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
