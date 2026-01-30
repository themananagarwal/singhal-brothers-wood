import { motion } from "framer-motion";
import { ArrowLeft, Instagram, Facebook, Mail, Phone, Hammer, Sparkles, Ruler } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import studioLogo from "@/assets/studio-logo.png";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StudioPage = () => {
    // ... state ...
    const [statusIndex, setStatusIndex] = useState(0);
    const statuses = [
        "Sanding down the rough edges...",
        "Applying the final polish to the pixels...",
        "Matching the grain of the design...",
        "Laminating the navigation bars...",
        "Selecting the perfect finish...",
        "Seasoning the code for extra durability..."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setStatusIndex((prev) => (prev + 1) % statuses.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center relative overflow-hidden font-display selection:bg-gold/30">
            <Helmet>
                <title>Singhal Studio | Luxury Decorative Veneers & Designer Wood Ahmedabad</title>
                <meta name="description" content="Singhal Studio - Redefining luxury surfaces. Discover premium decorative solutions, exotic veneers, and designer laminates. Find the finest luxury veneer shop near you in Ahmedabad." />
                <meta name="keywords" content="Singhal Studio, luxury veneer shop near me, designer wood near me, Luxury Veneers Ahmedabad, Decorative Surface Design, Designer Wood Finishes Gujarat, Exotic Veneers Ahmedabad, Singhal Decor Luxury Alternative, premium laminates Ahmedabad" />
                <link rel="canonical" href="https://singhalbrothers.com/studio" />
            </Helmet>
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 py-12 flex flex-col items-center relative z-10">
                {/* Back to main site */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-8 left-4 md:left-12"
                >
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Singhal Brothers</span>
                    </Link>
                </motion.div>

                {/* Logo Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <img
                        src={studioLogo}
                        alt="Singhal Studio"
                        className="h-20 md:h-28 w-auto hover:rotate-1 transition-transform duration-500"
                    />
                </motion.div>

                {/* Content */}
                <div className="max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                            <Sparkles className="w-4 h-4 text-gold animate-spin-slow" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                                Grain-ing your patience...
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                            Website is <span className="text-gold">Under Construction.</span><br />
                            <span className="text-3xl md:text-4xl text-white/40 font-medium">(The Good Kind)</span>
                        </h1>

                        <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-sans">
                            We're currently applying the final polish to our digital showroom.
                            Just like a rare veneer, greatness takes time to reveal its grain.
                            Don't get <span className="text-gold border-b border-gold/30 italic">bored</span> — we're crafting something stunning.
                        </p>
                    </motion.div>

                    {/* Quirky Quirks */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-8 mb-16"
                    >
                        {[
                            { icon: Hammer, label: "Code Hand-Polished" },
                            { icon: Ruler, label: "100% Termite-Free Pixels" },
                            { icon: Sparkles, label: "Kiln-Dried Servers" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/40 grayscale hover:grayscale-0 transition-all">
                                <item.icon className="w-4 h-4 text-gold" />
                                <span className="text-xs uppercase tracking-widest font-bold">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Dynamic Status + Progress */}
                    <div className="max-w-md mx-auto mb-20 space-y-4">
                        <motion.div
                            key={statusIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs font-mono text-gold uppercase tracking-[0.2em]"
                        >
                            Status: {statuses[statusIndex]}
                        </motion.div>
                        <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.8 }}
                                className="absolute inset-y-0 left-0 w-[85%] bg-gold"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                        <Button
                            className="bg-gold hover:bg-gold/90 text-white px-10 py-7 text-lg font-bold rounded-none border border-gold shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
                            onClick={() => window.location.href = "mailto:manav@singhalstudio.in"}
                        >
                            Get Early Access
                        </Button>
                        <Button
                            variant="outline"
                            className="border-white/20 bg-transparent hover:bg-white/5 text-white px-10 py-7 text-lg font-bold rounded-none transition-all"
                            onClick={() => {
                                const contact = document.getElementById('contact-info');
                                contact?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Talk to Our Craftsmen
                        </Button>
                    </div>

                    {/* Footer / Social Info */}
                    <motion.div
                        id="contact-info"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10"
                    >
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <div className="flex items-center gap-3 text-white">
                                <Mail className="w-5 h-5 text-gold" />
                                <span className="font-bold uppercase tracking-wider text-xs">Email the Studio</span>
                            </div>
                            <p className="text-white/40 text-sm">manav@singhalstudio.in</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
                            <div className="flex items-center gap-3 text-white">
                                <Phone className="w-5 h-5 text-gold" />
                                <span className="font-bold uppercase tracking-wider text-xs">Direct Line</span>
                            </div>
                            <p className="text-white/40 text-sm">+91 99251 11700</p>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <div className="flex items-center gap-3 text-white">
                                <Instagram className="w-5 h-5 text-gold" />
                                <span className="font-bold uppercase tracking-wider text-xs">Stay Grained</span>
                            </div>
                            <div className="flex gap-4">
                                <a href="https://instagram.com/singhalstudio.india" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-white/40 hover:text-gold transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Credits */}
            <div className="absolute bottom-8 w-full text-center text-white/20 text-[10px] tracking-[0.3em] uppercase">
                &copy; {new Date().getFullYear()} Singhal Studio | Part of the Singhal Brothers Legacy
            </div>
        </div>
    );
};

export default StudioPage;
