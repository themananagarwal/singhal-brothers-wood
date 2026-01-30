import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-plywood.jpg";
import { AnimatedNumber } from "./AnimatedNumber";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium Plywood"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted Since 1985</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Premium Quality
            <br />
            <span className="text-primary">Plywood</span> & <span className="text-primary">Wood</span>
            <br />
            Products
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Gujarat's trusted wholesale supplier of plywood, blockboards, flushdoors, and MDFs.
            Building trust with quality for over 40 years.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 animate-fade-in max-w-lg" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" onClick={() => navigate("/products")} className="w-full">
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={() => window.open("https://maps.app.goo.gl/hyDpeWmxEhGPPov47?g_st=ic", "_blank", "noopener,noreferrer")}
              className="w-full"
            >
              Visit Singhal Brothers
            </Button>
            <Button
              variant="accent"
              size="lg"
              className="sm:col-span-2 w-full shadow-lg hover:shadow-xl transition-all font-bold"
              onClick={() => navigate("/studio")}
            >
              Explore Singhal Studio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold text-foreground">
                  <AnimatedNumber value={40} suffix="+" />
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Years of Legacy</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold text-foreground">
                  <AnimatedNumber value={5000} suffix="+" />
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold text-foreground">
                  <AnimatedNumber value={100} suffix="+" />
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Product Varieties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
