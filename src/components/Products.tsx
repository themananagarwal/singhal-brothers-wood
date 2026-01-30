import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Grid3X3, DoorOpen, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const products = [
  {
    icon: Layers,
    title: "Commercial Plywood",
    category: "Plywood",
    description: "High-quality commercial grade plywood for furniture, interiors, and general construction applications.",
    features: ["ISI Certified", "Multiple Grades", "Various Thicknesses"],
    color: "primary",
  },
  {
    icon: Grid3X3,
    title: "Shuttering Plywood",
    category: "Shuttering Plywood",
    description: "Heavy-duty shuttering plywood for concrete formwork in construction projects.",
    features: ["Water Resistant", "High Strength", "Reusable"],
    color: "primary",
  },
  {
    icon: LayoutGrid,
    title: "Blockboards & MDF",
    category: "MDF",
    description: "Premium blockboards and MDF panels for furniture manufacturing and interior applications.",
    features: ["Uniform Density", "Smooth Surface", "Easy to Work"],
    color: "primary",
  },
  {
    icon: DoorOpen,
    title: "Flush Doors",
    category: "Flushdoors",
    description: "Quality flush doors for residential and commercial buildings with excellent finish.",
    features: ["Durable", "Termite Resistant", "Ready to Install"],
    color: "primary",
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-24 bg-secondary/50 bg-wood-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header ... (lines 45-62 omitted for brevity) ... */}
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Our Products
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wholesale <span className="text-primary">Wood</span> Products
          </h2>
          <p className="text-muted-foreground text-lg">
            We supply a comprehensive range of premium plywood and wood products
            to wholesalers, dealers, builders, and homeowners across Gujarat and India.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="h-full flex"
            >
              <Card
                className="group h-full bg-card hover:bg-card/80 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl flex flex-col w-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${product.color === "primary"
                    ? "bg-primary/10 group-hover:bg-primary/20"
                    : "bg-accent/10 group-hover:bg-accent/20"
                    }`}>
                    <product.icon className={`w-7 h-7 ${product.color === "primary" ? "text-primary" : "text-accent"}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${product.color === "primary" ? "bg-primary" : "bg-accent"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className={`w-full mt-auto ${product.color === "primary" ? "group-hover:text-primary" : "group-hover:text-accent"}`}
                    onClick={() => navigate("/products", { state: { category: product.category } })}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" onClick={() => navigate("/products")}>
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
