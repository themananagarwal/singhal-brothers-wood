import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Grid3X3, DoorOpen, LayoutGrid } from "lucide-react";

const products = [
  {
    icon: Layers,
    title: "Commercial Plywood",
    description: "High-quality commercial grade plywood for furniture, interiors, and general construction applications.",
    features: ["ISI Certified", "Multiple Grades", "Various Thicknesses"],
  },
  {
    icon: Grid3X3,
    title: "Shuttering Plywood",
    description: "Heavy-duty shuttering plywood for concrete formwork in construction projects.",
    features: ["Water Resistant", "High Strength", "Reusable"],
  },
  {
    icon: LayoutGrid,
    title: "Blockboards & MDF",
    description: "Premium blockboards and MDF panels for furniture manufacturing and interior applications.",
    features: ["Uniform Density", "Smooth Surface", "Easy to Work"],
  },
  {
    icon: DoorOpen,
    title: "Flush Doors",
    description: "Quality flush doors for residential and commercial buildings with excellent finish.",
    features: ["Durable", "Termite Resistant", "Ready to Install"],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-secondary/30 bg-wood-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Our Products
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wholesale Wood Products
          </h2>
          <p className="text-muted-foreground text-lg">
            We supply a comprehensive range of premium plywood and wood products 
            to dealers, contractors, and businesses across Gujarat and India.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.title} 
              className="group bg-card hover:bg-card/80 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-7 h-7 text-primary" />
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
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:text-primary">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
