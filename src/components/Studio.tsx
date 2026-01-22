import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Palette, Layers, PanelTop } from "lucide-react";
import studioImage from "@/assets/studio-showroom.jpg";

const studioProducts = [
  { icon: Palette, name: "Veneers", description: "Natural & engineered veneers" },
  { icon: Layers, name: "Laminates", description: "Decorative & high-pressure laminates" },
  { icon: PanelTop, name: "Louvers", description: "WPC & PVC louvers panels" },
  { icon: Sparkles, name: "Decorative", description: "Premium decorative surfaces" },
];

const Studio = () => {
  return (
    <section id="studio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={studioImage}
                alt="Singhal Studio Showroom"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Launched 2023
                </span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              New Showroom
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Singhal <span className="text-accent">Studio</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience our stunning new retail showroom featuring premium decorative surfaces. 
              From exotic veneers to designer laminates, discover products that transform spaces 
              into works of art.
            </p>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {studioProducts.map((product, index) => (
                <div
                  key={product.name}
                  className={`flex items-start gap-3 p-4 rounded-xl transition-colors ${
                    index % 2 === 0 
                      ? "bg-primary/5 hover:bg-primary/10" 
                      : "bg-accent/5 hover:bg-accent/10"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    index % 2 === 0 ? "bg-primary/10" : "bg-accent/10"
                  }`}>
                    <product.icon className={`w-5 h-5 ${index % 2 === 0 ? "text-primary" : "text-accent"}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{product.name}</h4>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg">
              Visit Singhal Studio
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
