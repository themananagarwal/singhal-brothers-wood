import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductsPage from "./pages/Products";
import Studio from "./pages/Studio";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Helmet>
            <link rel="icon" type="image/png" href="/favicon.png?v=2" />
            <link rel="shortcut icon" href="/favicon.ico?v=2" />
          </Helmet>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/studio" element={<Studio />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </CartProvider>
  </HelmetProvider>
);

export default App;
