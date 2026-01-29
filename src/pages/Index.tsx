import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Products from "@/components/Products";
import Studio from "@/components/Studio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Products />
        <Studio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
