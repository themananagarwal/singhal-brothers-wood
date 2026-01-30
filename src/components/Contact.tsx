import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to discuss your requirements? Reach out to us for wholesale inquiries,
            product information, or to visit our store.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          {[
            {
              icon: MapPin,
              title: "Visit Us",
              content: (
                <a
                  href="https://maps.app.goo.gl/hyDpeWmxEhGPPov47?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link"
                >
                  <p className="text-muted-foreground group-hover/link:text-primary transition-colors">
                    Singhal Brothers<br />
                    4, Ganesh Estate, Sarkhej<br />
                    Ahmedabad, Gujarat 382210
                  </p>
                </a>
              )
            },
            {
              icon: Phone,
              title: "Call Us",
              content: (
                <>
                  <p className="text-muted-foreground mb-2">+91 98250 28300</p>
                  <p className="text-muted-foreground">+91 99783 28300</p>
                </>
              )
            },
            {
              icon: Clock,
              title: "Business Hours",
              content: (
                <p className="text-muted-foreground">
                  Monday - Saturday<br />
                  10:00 AM - 8:00 PM
                </p>
              )
            }
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-card h-full border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {card.title}
                  </h3>
                  {card.content}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary to-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
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
              <a
                href="https://wa.me/919825028300"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="heroOutline"
                  className="!bg-white text-primary border-white hover:border-primary hover:!bg-gray-100 hover:text-primary !backdrop-blur-none transition-all duration-300 w-full"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  WhatsApp Us
                </Button>
              </a>
              <Button variant="leather" size="lg">
                <Mail className="w-5 h-5" />
                Send Inquiry
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
