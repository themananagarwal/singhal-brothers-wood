import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu, X, Instagram, Facebook, Phone, MapPin,
    ArrowRight, Sparkles, Palette, Layers, PanelTop,
    ChevronDown, ExternalLink
} from "lucide-react";
import heroImg from "../assets/luxury_veneer_hero.png";
import galleryImg from "../assets/luxury_showroom_gallery.png";
import studioLogo from "../assets/studio-logo-light.png";
import { Helmet } from "react-helmet-async";

const collections = [
    {
        title: "Signature Veneers",
        description: "Refined collection of natural, hybrid, and printed veneers. Authentic wood grains celebrating nature's beauty.",
        subtypes: ["Natural", "Hybrid", "Printed"],
        icon: Palette
    },
    {
        title: "Curated Laminates",
        description: "High-pressure surfaces blending durability with aesthetic trends. From wood-finishes to digital designs.",
        subtypes: ["Wood-Finish", "Stone-Inspired", "Digital"],
        icon: Layers
    },
    {
        title: "Architectural Louvers",
        description: "Depth, rhythm, and texture. Louvers that add architectural interest to residential and commercial spaces.",
        subtypes: ["Fabric", "Fluted", "Aluminium", "Stone Mosaic"],
        icon: PanelTop
    },
    {
        title: "Statement Surfaces",
        description: "Specialty materials for unique feature walls. Texture and innovation that demands attention.",
        subtypes: ["Charcoal Sheets", "PU Stone", "3M Di-Noc", "Oxidised"],
        icon: Sparkles
    }
];

const Navbar = ({ isScrolled }: { isScrolled: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-charcoal/90 backdrop-blur-lg py-4 border-b border-white/5" : "bg-transparent py-8"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <button
                    onClick={() => { window.scrollTo(0, 0); window.location.reload(); }}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                    <img src={studioLogo} alt="Singhal Studio" className="h-10 md:h-12 w-auto object-contain" />
                </button>

                <div className="hidden md:flex gap-12 items-center text-sm uppercase tracking-widest font-medium text-white">
                    <a href="#collections" className="hover:text-studio-primary transition-colors">Collections</a>
                    <a href="#experience" className="hover:text-studio-primary transition-colors">Experience</a>
                    <a href="#contact" className="hover:text-studio-primary transition-colors">Visit Us</a>
                    <a href="/" className="flex items-center gap-2 px-6 py-2 border border-white/10 hover:border-studio-primary transition-all">
                        Main Site <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

                <button className="md:hidden text-studio-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-charcoal border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-8 gap-6 text-center uppercase tracking-widest text-sm text-white">
                            <a href="#collections" onClick={() => setIsOpen(false)}>Collections</a>
                            <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                            <a href="#contact" onClick={() => setIsOpen(false)}>Visit Us</a>
                            <a href="/" className="text-studio-primary font-bold">Main Site</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const StudioPage = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-charcoal text-ivory font-display">
            <Helmet>
                <title>Singhal Studio | Luxury Interior Surfaces & Boutique Experience</title>
                <meta name="description" content="Where Materials Become Design. Discover Singhal Studio's curated collection of veneers, laminates, and architectural louvers in Ahmedabad." />
            </Helmet>

            <Navbar isScrolled={isScrolled} />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        className="w-full h-full object-cover scale-105 animate-slow-zoom"
                        alt="Luxury Veneer Background"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-studio-primary font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Legacy of Excellence</span>
                        <h1 className="text-5xl md:text-8xl font-display font-medium text-ivory mb-8 leading-tight">
                            Where Materials <br /> <span className="italic text-studio-primary font-normal text-luxury-gradient">Become Design</span>
                        </h1>
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
                            <button
                                className="luxury-button min-w-[200px]"
                                onClick={() => window.open(`https://wa.me/919925111700?text=${encodeURIComponent("Hi Singhal Studio, I'd like to book a private viewing session.")}`, "_blank")}
                            >
                                Book a Private View
                            </button>
                            <a href="#collections" className="flex items-center gap-3 text-ivory/60 hover:text-ivory transition-colors group">
                                Explore Collections <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-32 bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-display mb-8 leading-relaxed">
                            Singhal Studio is a curated destination for architects and designers who value texture, detail, and material integrity.
                        </h2>
                        <p className="text-ivory/60 text-lg leading-relaxed mb-12">
                            Evolving from the legacy of Singhal Brothers, we represent a thoughtful transition from material trading to a curated boutique experience.
                        </p>
                        <div className="h-20 w-px bg-gradient-to-b from-studio-primary to-transparent mx-auto" />
                    </div>
                </div>
            </section>

            {/* Collections Preview */}
            <section id="collections" className="py-32 bg-charcoal">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-xl">
                            <span className="text-studio-primary font-bold tracking-widest uppercase text-xs mb-4 block underline underline-offset-8 decoration-studio-primary/30">Our Curation</span>
                            <h3 className="text-4xl md:text-6xl font-display font-bold">The Signature Collections</h3>
                        </div>
                        <p className="text-ivory/60 max-w-sm mb-2 text-sm leading-relaxed">
                            We update our inventory bi-weekly with rare finds and exclusive texture groups that are unavailable anywhere else in the region.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {collections.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="luxury-card group flex flex-col h-full bg-white/5 p-8 rounded-sm hover:bg-white/10 transition-colors border border-white/5"
                            >
                                <item.icon className="w-10 h-10 text-studio-primary mb-6 stroke-1 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-display font-bold mb-3 text-ivory">{item.title}</h4>
                                <p className="text-ivory/50 text-xs leading-relaxed mb-6 flex-grow">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.subtypes.map((sub, sIdx) => (
                                        <span key={sIdx} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 rounded text-studio-primary/80 border border-studio-primary/20">
                                            {sub}
                                        </span>
                                    ))}
                                </div>
                                <div className="h-px w-full bg-white/10 group-hover:bg-studio-primary/30 transition-colors mt-6" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="bg-charcoal-dark overflow-hidden py-32">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative z-10 rounded-sm overflow-hidden border border-white/5 shadow-2xl">
                                <img src={galleryImg} alt="Studio Gallery" className="w-full h-auto" />
                            </div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-studio-primary/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-studio-primary/5 rounded-full blur-3xl" />
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-studio-primary font-bold tracking-widest uppercase text-xs mb-4 block">Store Residency</span>
                            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 text-luxury-gradient">The Studio <br /> Philosophy</h3>
                            <p className="text-ivory/60 text-lg mb-12 leading-relaxed">
                                We believe in curated collections over large catalogues. Our studio is a space to explore, compare, and create with confidence—where you can feel the grain and observe the light-play on surfaces.
                            </p>

                            <ul className="space-y-6 mb-12">
                                {["Private material matching sessions", "Exclusive architectural discounts", "Bi-weekly arrivals of new stock"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-sm tracking-wide">
                                        <div className="w-1.5 h-1.5 rounded-full bg-studio-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="flex items-center gap-4 text-studio-primary font-bold group" onClick={() => window.open('https://maps.app.goo.gl/5eKGq32MCHQNohYW8', '_blank')}>
                                VIEW LOCATION ON MAPS <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-32 bg-charcoal border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-4xl md:text-7xl font-display font-bold mb-12 leading-tight">Ready to <span className="italic text-studio-primary">Elevate</span> Your Space?</h3>
                        <p className="text-ivory/50 text-xl mb-16 leading-relaxed">
                            Don't compromise on the visual anchor of your interiors. Visit Singhal Studio and find the perfect finish.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <button
                                className="luxury-button flex items-center justify-center gap-3 border-studio-primary text-studio-primary hover:bg-studio-primary hover:text-charcoal"
                                onClick={() => window.open(`https://wa.me/919925111700?text=${encodeURIComponent("Hi Singhal Studio, I'd like to book a material viewing session.")}`, "_blank")}
                            >
                                <Phone className="w-4 h-4" /> Whatsapp for Booking
                            </button>
                            <button
                                className="flex items-center justify-center gap-3 px-8 py-3 bg-ivory text-charcoal font-bold hover:bg-studio-primary transition-colors hover:text-charcoal"
                                onClick={() => window.open(`https://wa.me/919925111700?text=${encodeURIComponent("Hi Singhal Studio, I'd like to request your latest catalog.")}`, "_blank")}
                            >
                                Request Latest Catalog
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-charcoal-dark border-t border-white/5">
                <div className="container mx-auto px-6 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="flex flex-col items-center md:items-start">
                            <img src={studioLogo} alt="Singhal Studio" className="h-12 w-auto object-contain mb-4" />
                            <p className="text-ivory/60 text-xs tracking-widest uppercase">Luxury Interior Surfaces</p>
                        </div>

                        <div className="flex gap-8">
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-studio-primary hover:text-studio-primary transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-studio-primary hover:text-studio-primary transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://maps.app.goo.gl/5eKGq32MCHQNohYW8" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-studio-primary hover:text-studio-primary transition-all">
                                <MapPin className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="text-center md:text-right">
                            <p className="text-ivory/60 text-sm mb-1">Symmers, 11, Link-in Road,</p>
                            <p className="text-ivory/60 text-sm mb-4">Sarkhej, Ahmedabad - 382210</p>
                            <p className="text-ivory/30 text-[10px] tracking-widest">© 2026 SINGHAL STUDIO.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StudioPage;
