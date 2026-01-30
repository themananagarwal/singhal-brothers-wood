import { useState, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Info, CheckCircle2, ShoppingCart, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import mdfDirImg from "@/assets/mdf-dir.png";
import mdfDwrImg from "@/assets/mdf-dwr.png";
import mdfHdhmrImg from "@/assets/mdf-hdhmr.png";

// Product Data
const categories = ["All", "Plywood", "Shuttering Plywood", "Blockboards", "MDF", "Flushdoors"] as const;
type Category = typeof categories[number];
const individualCategories = categories.filter(c => c !== "All");

const placeholderGrey = "https://placehold.co/600x400/e2e8f0/64748b?text=Singhal+Brothers";

interface Product {
    id: string;
    name: string;
    category: Category;
    type: "Commercial" | "MR" | "BWP" | "BWR" | "Decorative" | "Other";
    size: string;
    face: string;
    coreType?: string;
    coreColor?: string;
    thickness?: string;
    description: string;
    image: string;
    availableSizes?: string[];
    availableThicknesses?: string[];
}

const productData: Product[] = [
    // SIPL 303 (Order #1)
    {
        id: "p-sipl-303",
        name: "SIPL 303 Ply",
        category: "Plywood",
        type: "BWR",
        size: "8x4",
        face: "Gurjan Face",
        coreType: "Full Core Full Panel",
        coreColor: "All Red Core",
        thickness: "6mm, 9mm, 12mm, 18mm",
        description: "BWR Grade, 100% Calibrated in 12 and 18 mm.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4", "6x4", "7x3", "6x3"],
        availableThicknesses: ["6mm", "9mm", "12mm", "18mm"]
    },
    // SIPL 710 (Order #2)
    {
        id: "p-sipl-710",
        name: "SIPL 710 Ply",
        category: "Plywood",
        type: "BWP",
        size: "8x4",
        face: "Gurjan Face",
        coreType: "Full Core Full Panel",
        coreColor: "All Red Core",
        thickness: "6mm, 9mm, 12mm, 18mm",
        description: "BWP Grade, 100% Calibrated in 12 and 18 mm.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4", "6x4", "7x3", "6x3"],
        availableThicknesses: ["6mm", "9mm", "12mm", "18mm"]
    },
    // Paramount BWR (Order #3)
    {
        id: "p-paramount-bwr",
        name: "Paramount BWR Ply",
        category: "Plywood",
        type: "BWR",
        size: "8x4",
        face: "Gurjan Face",
        coreType: "Full Core Full Panel",
        coreColor: "Red & White (Alternate)",
        thickness: "6mm, 9mm, 12mm, 18mm",
        description: "BWR Grade, Semi Calibrated.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4", "6x4", "7x3", "6x3"],
        availableThicknesses: ["6mm", "9mm", "12mm", "18mm"]
    },
    // Paramount BWP (Order #4)
    {
        id: "p-paramount-bwp",
        name: "Paramount BWP Ply",
        category: "Plywood",
        type: "BWP",
        size: "8x4",
        face: "Gurjan Face",
        coreType: "Full Core Full Panel",
        coreColor: "All Red Core",
        thickness: "6mm, 9mm, 12mm, 18mm",
        description: "BWP Grade 710 certified, Semi Calibrated.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4", "6x4", "7x3", "6x3"],
        availableThicknesses: ["6mm", "9mm", "12mm", "18mm"]
    },
    // Kespar (Order #5)
    {
        id: "p-kespar",
        name: "Kespar Ply",
        category: "Plywood",
        type: "BWP",
        size: "8x4",
        face: "Gurjan Face",
        coreType: "Full Core Full Panel",
        coreColor: "All Red Core",
        thickness: "6mm, 9mm, 12mm, 18mm",
        description: "BWP Grade 710 certified, Semi Calibrated.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4", "6x4", "7x3", "6x3"],
        availableThicknesses: ["6mm", "9mm", "12mm", "18mm"]
    },
    // Wood9 (Order #6)
    {
        id: "p-wood9",
        name: "Wood9 Ply",
        category: "Plywood",
        type: "MR",
        size: "8x4",
        face: "Okume Face",
        coreType: "Full Core Full Panel",
        coreColor: "Red & White (Alternate)",
        thickness: "6mm, 9mm, 12mm, 18mm",
        description: "MR Grade.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4", "6x4", "7x3", "6x3"],
        availableThicknesses: ["6mm", "9mm", "12mm", "18mm"]
    },
    // British Club (Order #7)
    {
        id: "p-british-club",
        name: "British Club Ply",
        category: "Plywood",
        type: "BWR",
        size: "8x4",
        face: "Gurjan Face",
        coreType: "Full Core Full Panel",
        coreColor: "Red & White (Alternate)",
        thickness: "6mm, 9mm, 12mm, 18mm",
        description: "BWR Grade, Chemical Treated.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4", "6x4", "7x3", "6x3"],
        availableThicknesses: ["6mm", "9mm", "12mm", "18mm"]
    },
    // V Ply (Order #8)
    {
        id: "p-v-ply",
        name: "V Ply",
        category: "Plywood",
        type: "BWR",
        size: "8x4",
        face: "Gurjan Face",
        coreType: "Full Core Full Panel",
        coreColor: "Red & White (Alternate)",
        thickness: "6mm, 9mm, 12mm, 18mm",
        description: "BWR Grade.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4", "6x4", "7x3", "6x3"],
        availableThicknesses: ["6mm", "9mm", "12mm", "18mm"]
    },
    // Eco Plus (Order #9)
    {
        id: "p-eco-plus",
        name: "Eco Plus Ply",
        category: "Plywood",
        type: "BWR",
        size: "8x4",
        face: "Gurjan Face",
        coreType: "Full Core Full Panel",
        coreColor: "Red & White (Alternate)",
        thickness: "6mm, 9mm, 12mm, 18mm",
        description: "BWR Grade.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4", "6x4", "7x3", "6x3"],
        availableThicknesses: ["6mm", "9mm", "12mm", "18mm"]
    },
    // Existing MDF (User wanted to keep these)
    {
        id: "m2",
        name: "Century Prowud MDF DIR",
        category: "MDF",
        type: "Other",
        size: "8' x 4'",
        face: "Premium MDF",
        thickness: "2.1mm, 3.3mm, 5.5mm, 7.5mm, 11mm, 17mm",
        description: "High-quality direct-printable (DIR) MDF board from Century Prowud, perfect for industrial and decorative applications.",
        image: mdfDirImg,
        availableSizes: ["8' x 4'"],
        availableThicknesses: ["2.1mm", "3.3mm", "5.5mm", "7.5mm", "11mm", "17mm"]
    },
    {
        id: "m3",
        name: "Century Prowud MDF DWR",
        category: "MDF",
        type: "Other",
        size: "8' x 4'",
        face: "Premium MDF",
        thickness: "3.3mm, 5.5mm, 7.5mm, 11mm, 16.5mm, 17mm, 25mm",
        description: "Deep-water resistant (DWR) MDF board from Century Prowud, offering superior moisture protection and durability.",
        image: mdfDwrImg,
        availableSizes: ["8' x 4'"],
        availableThicknesses: ["3.3mm", "5.5mm", "7.5mm", "11mm", "16.5mm", "17mm", "25mm"]
    },
    {
        id: "m4",
        name: "Century Prowud MDF HDHMR",
        category: "MDF",
        type: "Other",
        size: "8' x 4'",
        face: "Premium MDF",
        thickness: "3mm, 6mm, 8mm, 12mm, 18mm, 25mm",
        description: "High-density high-moisture resistant (HDHMR) MDF board from Century Prowud, ideal for kitchens and areas prone to high humidity.",
        image: mdfHdhmrImg,
        availableSizes: ["8' x 4'"],
        availableThicknesses: ["3mm", "6mm", "8mm", "12mm", "18mm", "25mm"]
    },
    // SIPL Blockboards (Different cards for 19mm and 25mm)
    {
        id: "bb-sipl-19",
        name: "SIPL Blockboard (19mm)",
        category: "Blockboards",
        type: "Commercial",
        size: "8x4",
        face: "Gurjan Face",
        coreType: "Double Core",
        coreColor: "100% Pine Wood",
        thickness: "19mm",
        description: "Calibrated blockboard for high strength.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4"],
        availableThicknesses: ["19mm"]
    },
    {
        id: "bb-sipl-25",
        name: "SIPL Blockboard (25mm)",
        category: "Blockboards",
        type: "Commercial",
        size: "8x4",
        face: "Gurjan Face",
        coreType: "Triple Core",
        coreColor: "100% Pine Wood",
        thickness: "25mm",
        description: "Calibrated blockboard for high strength.",
        image: placeholderGrey,
        availableSizes: ["8x4", "7x4"],
        availableThicknesses: ["25mm"]
    },
    // Shuttering Plywood
    {
        id: "sp-metroplex-30",
        name: "Metroplex Shuttering Ply 30Kg",
        category: "Shuttering Plywood",
        type: "Other",
        size: "8x4",
        face: "MUF Grade",
        coreColor: "Red Film",
        description: "MUF Grade Shuttering Plywood. 30Kg specification, ideal for construction formwork.",
        image: placeholderGrey,
        availableSizes: ["8x4"],
        availableThicknesses: ["12mm"]
    },
    {
        id: "sp-nitro-30",
        name: "Nitro Shuttering Ply 30Kg",
        category: "Shuttering Plywood",
        type: "Other",
        size: "8x4",
        face: "Film Faced",
        coreColor: "Red/Black Film",
        description: "Film Faced, All Glue Line Core. 100% Waterproof. 30 Kg specification.",
        image: placeholderGrey,
        availableSizes: ["8x4"],
        availableThicknesses: ["12mm"]
    },
    {
        id: "sp-nitro-34",
        name: "Nitro Shuttering Ply 34Kg",
        category: "Shuttering Plywood",
        type: "Other",
        size: "8x4",
        face: "Film Faced",
        coreColor: "Red/Black Film",
        description: "Film Faced, All Glue Line Core. 100% Waterproof. 34 Kg specification.",
        image: placeholderGrey,
        availableSizes: ["8x4"],
        availableThicknesses: ["12mm"]
    },
    {
        id: "sp-orbi-30",
        name: "Orbi Shuttering Ply 30kg",
        category: "Shuttering Plywood",
        type: "Other",
        size: "8x4",
        face: "Mirror Finish",
        coreColor: "Red/Black Film",
        description: "Mirror Finish, All Glue Line Core. Dent Free, 100% Waterproof. 30 kg specification.",
        image: placeholderGrey,
        availableSizes: ["8x4"],
        availableThicknesses: ["12mm"]
    },
    {
        id: "sp-orbi-34",
        name: "Orbi Shuttering Ply 34kg",
        category: "Shuttering Plywood",
        type: "Other",
        size: "8x4",
        face: "Mirror Finish",
        coreColor: "Red/Black Film",
        description: "Mirror Finish, All Glue Line Core. Dent Free, 100% Waterproof. 34 kg specification.",
        image: placeholderGrey,
        availableSizes: ["8x4"],
        availableThicknesses: ["12mm"]
    },
    // Flushdoors
    {
        id: "fd-pine",
        name: "SIPL Flushdoor",
        category: "Flushdoors",
        type: "Other",
        size: "Variable",
        face: "Gurjan Face",
        coreType: "Solid Core",
        coreColor: "100% Pine Wood",
        thickness: "30mm, 35mm",
        description: "Calibrated. High strength and durability.",
        image: placeholderGrey,
        availableSizes: ["81x36", "81x32", "81x27", "78x36", "78x27"],
        availableThicknesses: ["30mm", "35mm"]
    }
];

const ProductsPage = () => {
    const { addToCart } = useCart();
    const location = useLocation();
    const [selectedCategories, setSelectedCategories] = useState<Category[]>(["All"]);
    const [searchQuery, setSearchQuery] = useState("");

    // Configuration State
    const [configuringProduct, setConfiguringProduct] = useState<Product | null>(null);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedThickness, setSelectedThickness] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    useEffect(() => {
        // Handle category navigation from landing page
        if (location.state && (location.state as any).category) {
            const cat = (location.state as any).category as Category;
            if (categories.includes(cat)) {
                setSelectedCategories([cat]);
            }
        }
    }, [location.state]);

    const handleCategoryToggle = (cat: Category) => {
        if (cat === "All") {
            setSelectedCategories(["All"]);
            return;
        }

        let next = selectedCategories.filter(c => c !== "All");
        if (next.includes(cat)) {
            next = next.filter(c => c !== cat);
        } else {
            next = [...next, cat];
        }

        if (next.length === 0 || next.length === individualCategories.length) {
            setSelectedCategories(["All"]);
        } else {
            setSelectedCategories(next);
        }
    };

    const filteredProducts = useMemo(() => {
        return productData.filter(p => {
            const matchesCategory = selectedCategories.includes("All") || selectedCategories.includes(p.category);
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategories, searchQuery]);

    const handleOpenConfiguration = (product: Product) => {
        setConfiguringProduct(product);
        setSelectedSize(product.availableSizes?.[0] || product.size);
        setSelectedThickness(product.availableThicknesses?.[0] || "");
        setSelectedQuantity(1);
    };

    const handleAddToCart = () => {
        if (!configuringProduct) return;
        addToCart({
            id: configuringProduct.id,
            name: configuringProduct.name,
            image: configuringProduct.image,
            category: configuringProduct.category,
            size: selectedSize,
            thickness: selectedThickness,
            quantity: selectedQuantity
        });
        setConfiguringProduct(null);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Helmet>
                <title>Wood & Plywood Products | Singhal Brothers Catalog</title>
                <meta name="description" content="Explore our wide range of premium plywood, blockboards, and flush doors. Find the best plywood shop near you for wholesale industrial and home solutions in Ahmedabad." />
                <meta name="keywords" content="Singhal Brothers Products, Plywood shop near me, wholesale plywood near me, ISI plywood wholesalers near me, Plywood Catalog, MDF Boards Ahmedabad, Flush Doors Ahmedabad, Blockboards Gujarat, Shuttering Plywood Supplier, best wood shop near me" />
                <link rel="canonical" href="https://singhalbrothers.com/products" />
            </Helmet>
            <Header />

            <main className="pt-24 pb-20">
                <section className="bg-primary/5 py-12 md:py-20 mb-8 overflow-hidden relative">
                    {/* Decorative accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                                Our Extensive <br />
                                <span className="text-primary">Catalog</span>
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                                Explore our full range of premium wood and plywood products. Wholesale industrial
                                solutions for every construction and design need.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <div className="container mx-auto px-4">
                    {/* Filters and Search */}
                    <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {categories.map((cat) => (
                                <Button
                                    key={cat}
                                    variant={selectedCategories.includes(cat) ? "default" : "outline"}
                                    onClick={() => handleCategoryToggle(cat)}
                                    className="rounded-full px-6 transition-all duration-300"
                                >
                                    {cat}
                                </Button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search products..."
                                className="pl-10 rounded-full border-primary/20 focus:border-primary shadow-sm"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    key={product.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Card className="group flex flex-col h-full border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl overflow-hidden bg-card">
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <Badge className="absolute top-4 right-4 bg-primary/90 text-white border-none backdrop-blur-sm">
                                                {product.type}
                                            </Badge>
                                            <Badge className="absolute top-4 left-4 bg-white/90 text-primary border-none backdrop-blur-sm">
                                                {product.category}
                                            </Badge>
                                        </div>

                                        <CardHeader className="pb-2">
                                            <CardTitle className="font-display text-2xl group-hover:text-primary transition-colors">
                                                {product.name}
                                            </CardTitle>
                                            <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                                                {product.description}
                                            </p>
                                        </CardHeader>

                                        <CardContent className="flex-1 space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-secondary/50 p-3 rounded-lg border border-border/50">
                                                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Base Size</p>
                                                    <p className="text-sm font-bold text-foreground">{product.size}</p>
                                                </div>
                                                {product.category !== "Shuttering Plywood" && (
                                                    <div className="bg-secondary/50 p-3 rounded-lg border border-border/50">
                                                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Face</p>
                                                        <p className="text-sm font-bold text-foreground">{product.face}</p>
                                                    </div>
                                                )}
                                                {product.category !== "Shuttering Plywood" && product.coreType && (
                                                    <div className="bg-secondary/50 p-3 rounded-lg border border-border/50">
                                                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Core Type</p>
                                                        <p className="text-sm font-bold text-foreground">{product.coreType}</p>
                                                    </div>
                                                )}
                                                {product.coreColor && (
                                                    <div className="bg-secondary/50 p-3 rounded-lg border border-border/50">
                                                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                                                            {product.category === "Shuttering Plywood" ? "Film Color" : "Core Color/Wood"}
                                                        </p>
                                                        <p className="text-sm font-bold text-foreground">{product.coreColor}</p>
                                                    </div>
                                                )}
                                                {product.thickness && (
                                                    <div className="bg-secondary/50 p-3 rounded-lg border border-border/50 col-span-2">
                                                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Thickness Options</p>
                                                        <p className="text-sm font-bold text-foreground italic">{product.thickness}</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-primary font-medium">
                                                <CheckCircle2 className="w-4 h-4" />
                                                <span>Serving Wholesale & Project Inquiries</span>
                                            </div>
                                        </CardContent>

                                        <CardFooter className="pt-2 pb-6 grid grid-cols-2 gap-3">
                                            <Button
                                                variant="outline"
                                                className="w-full border-primary/20 hover:bg-primary/5"
                                                onClick={() => window.open(`https://wa.me/919825028300?text=${encodeURIComponent(`Hi, I'm interested in inquiring about ${product.name}.`)}`, "_blank")}
                                            >
                                                Inquire Now
                                            </Button>
                                            <Button
                                                className="w-full"
                                                onClick={() => handleOpenConfiguration(product)}
                                            >
                                                <ShoppingCart className="w-4 h-4 mr-2" />
                                                Add to Quote
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredProducts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <Info className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-xl text-muted-foreground font-display">No products found matching your criteria.</p>
                            <Button
                                variant="link"
                                onClick={() => { setSelectedCategories(["All"]); setSearchQuery(""); }}
                                className="mt-2 text-primary"
                            >
                                Clear all filters
                            </Button>
                        </motion.div>
                    )}
                </div>

                {/* Configuration Dialog */}
                <Dialog open={!!configuringProduct} onOpenChange={() => setConfiguringProduct(null)}>
                    <DialogContent className="sm:max-w-md bg-card border-primary/20">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-display flex items-center gap-2">
                                <ShoppingCart className="w-6 h-6 text-primary" />
                                Configure Quote
                            </DialogTitle>
                        </DialogHeader>

                        {configuringProduct && (
                            <div className="space-y-6 py-4">
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{configuringProduct.name}</h4>
                                    <p className="text-sm text-muted-foreground">{configuringProduct.category} • {configuringProduct.type}</p>
                                </div>

                                {configuringProduct.availableSizes && (
                                    <div className="space-y-3">
                                        <Label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Select Size</Label>
                                        <div className="flex flex-wrap gap-2">
                                            {configuringProduct.availableSizes.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setSelectedSize(size)}
                                                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${selectedSize === size
                                                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                                        : "bg-secondary/50 border-border hover:border-primary/50"
                                                        }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {configuringProduct.availableThicknesses && (
                                    <div className="space-y-3">
                                        <Label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Select Thickness</Label>
                                        <div className="flex flex-wrap gap-2">
                                            {configuringProduct.availableThicknesses.map((thickness) => (
                                                <button
                                                    key={thickness}
                                                    onClick={() => setSelectedThickness(thickness)}
                                                    className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all ${selectedThickness === thickness
                                                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                                        : "bg-secondary/50 border-border hover:border-primary/50"
                                                        }`}
                                                >
                                                    {thickness}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-3">
                                    <Label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Quantity (Sheets/Units)</Label>
                                    <div className="flex items-center gap-4 border border-border rounded-xl p-2 w-fit bg-secondary/30">
                                        <button
                                            onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                                            className="p-2 hover:text-primary transition-colors hover:bg-white rounded-lg"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="text-xl font-bold font-display w-12 text-center">{selectedQuantity}</span>
                                        <button
                                            onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                                            className="p-2 hover:text-primary transition-colors hover:bg-white rounded-lg"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-muted-foreground italic mt-1">*Final quote may vary based on quantity and location.</p>
                                </div>
                            </div>
                        )}

                        <DialogFooter className="sm:justify-between gap-4">
                            <Button variant="ghost" onClick={() => setConfiguringProduct(null)}>
                                Cancel
                            </Button>
                            <Button
                                className="flex-1 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20"
                                onClick={handleAddToCart}
                            >
                                Add to Quote Cart
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </main>

            <Footer />
        </div>
    );
};

export default ProductsPage;
