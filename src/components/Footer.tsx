import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-wood-dark font-display font-bold text-xl">SB</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Singhal Brothers</h3>
                <p className="text-xs text-primary-foreground/70">Since 1998</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Gujarat's trusted wholesale supplier of premium plywood and wood products 
              for over 25 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Products", "Singhal Studio", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {["Commercial Plywood", "Shuttering Plywood", "Blockboards", "MDF Boards", "Flush Doors", "Veneers & Laminates"].map((product) => (
                <li key={product}>
                  <span className="text-primary-foreground/80">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Timber Market, Rakhial<br />
                  Ahmedabad, Gujarat 380023
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-primary-foreground/80">info@singhalbrothers.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Singhal Brothers. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
