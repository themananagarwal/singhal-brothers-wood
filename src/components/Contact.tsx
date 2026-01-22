import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to discuss your requirements? Reach out to us for wholesale inquiries, 
            product information, or to visit our showroom.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Visit Us
              </h3>
              <p className="text-muted-foreground">
                Singhal Brothers<br />
                Timber Market, Rakhial<br />
                Ahmedabad, Gujarat 380023
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Call Us
              </h3>
              <p className="text-muted-foreground mb-2">
                +91 98765 43210
              </p>
              <p className="text-muted-foreground">
                +91 79 2658 1234
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                Business Hours
              </h3>
              <p className="text-muted-foreground">
                Monday - Saturday<br />
                9:00 AM - 7:00 PM
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-leather/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Contact us today for wholesale pricing, product catalog, or to schedule 
              a visit to our warehouse and showroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroOutline" className="border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
              <Button variant="leather" size="lg">
                <Mail className="w-5 h-5" />
                Send Inquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
