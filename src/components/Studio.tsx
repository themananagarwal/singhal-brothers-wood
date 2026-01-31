import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Palette, Layers, PanelTop } from "lucide-react";
import studioImage from "@/assets/studio-showroom.jpg";
import { motion } from "framer-motion";

const studioProducts = [
  { icon: Palette, name: "Veneers", description: "Natural & engineered veneers" },
  { icon: Layers, name: "Laminates", description: "Decorative & high-pressure laminates" },
  { icon: PanelTop, name: "Louvers", description: "WPC & PVC louvers panels" },
  { icon: Sparkles, name: "Decorative", description: "Premium decorative surfaces" },
];

import studioLogo from "@/assets/studio-logo.png";

const Studio = () => {
  return (
    <section id="studio" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration - Leaning more into Gold */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={studioImage}
                alt="Singhal Studio Showroom"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-gold text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Launched 2023
                </span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold font-bold mb-4 uppercase tracking-[0.2em] text-xs">
              Luxury Interior Experience
            </span>
            <div className="mb-6">
              <img
                src={studioLogo}
                alt="Singhal Studio Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience our stunning new retail showroom featuring premium decorative surfaces.
              From exotic veneers to designer laminates, discover products that transform spaces
              into works of art.
            </p>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {studioProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-gold/30 hover:bg-white transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gold/10 border border-gold/10">
                    <product.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{product.name}</h4>
                    <p className="text-xs text-muted-foreground">{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="rounded-xl px-10 h-14 text-white bg-gold hover:bg-gold/90 shadow-xl shadow-gold/20 hover:scale-105 transition-transform font-bold"
              onClick={() => window.open("https://singhalstudio.com", "_blank")}
            >
              Explore Singhal Studio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
