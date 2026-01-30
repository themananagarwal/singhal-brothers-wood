import React from "react";
import { useCart } from "@/context/CartContext";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus, MessageCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
    const { items, removeFromCart, updateQuantity, totalItems, clearCart } = useCart();

    const handleGetGeneralQuote = () => {
        const message = `Hi Singhal Brothers, I would like to inquire about several items:\n\n${items
            .map((item, index) => {
                const spec = [item.size, item.thickness].filter(Boolean).join(" ");
                return `${index + 1}. ${item.name} (${spec}) - Quantity: ${item.quantity}`;
            })
            .join("\n")}\n\nPlease provide a combined quote for these items.`;

        window.open(`https://wa.me/919825028300?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background selection:bg-primary/20">
                <SheetHeader className="pb-4">
                    <SheetTitle className="flex items-center gap-2 text-2xl font-display">
                        <ShoppingCart className="w-6 h-6 text-primary" />
                        Your Quote Cart
                    </SheetTitle>
                </SheetHeader>

                <Separator />

                <div className="flex-1 overflow-y-auto py-6 space-y-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                            <ShoppingCart className="w-16 h-16 stroke-1" />
                            <div>
                                <p className="text-xl font-display">Your cart is empty</p>
                                <p className="text-sm">Add items from our catalog to get a combined quote.</p>
                            </div>
                            <Button variant="outline" onClick={onClose} className="rounded-full">
                                Browse Products
                            </Button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className="flex gap-4 group">
                                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-border">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex-1 min-w-0 py-1">
                                    <div className="flex justify-between items-start gap-2">
                                        <div>
                                            <h4 className="font-bold text-foreground leading-tight truncate">
                                                {item.name}
                                            </h4>
                                            <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
                                                <span className="text-[10px] bg-secondary px-2 py-0.5 rounded-full text-muted-foreground font-bold uppercase">
                                                    {item.category}
                                                </span>
                                                {(item.size || item.thickness) && (
                                                    <span className="text-[10px] text-primary font-bold">
                                                        {[item.size, item.thickness].filter(Boolean).join(" • ")}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-muted-foreground hover:text-destructive transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-3 mt-3">
                                        <div className="flex items-center border border-border rounded-full bg-secondary/30">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:text-primary transition-colors pr-2 pl-3"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:text-primary transition-colors pl-2 pr-3"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <SheetFooter className="pt-6 border-t border-border flex flex-col gap-4 sm:flex-col items-stretch">
                        <div className="flex justify-between items-center px-1">
                            <span className="text-muted-foreground font-medium">Total items selected:</span>
                            <span className="text-xl font-bold font-display">{totalItems}</span>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <Button
                                size="lg"
                                className="w-full rounded-xl h-14 text-lg font-bold shadow-lg shadow-primary/20"
                                onClick={handleGetGeneralQuote}
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Get Combined Quote
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-muted-foreground hover:text-destructive"
                                onClick={clearCart}
                            >
                                Clear all items
                            </Button>
                        </div>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
