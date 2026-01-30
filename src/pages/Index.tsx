import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Singhal Brothers Plywood | Premium Wood & Veneers in Ahmedabad</title>
        <meta name="description" content="Singhal Brothers Plywood - Gujarat's leading supplier of premium plywood, designer veneers, and custom wood solutions. Trusted by wholesalers and builders since 1998 in Ahmedabad." />
        <meta name="keywords" content="Singhal Brothers Plywood, Singhal Marketing, Singhal Decor, Singhal, Brothers, Plywood, Laminates, Blockboards, Shuttering Ply, Flushdoors, MDF, Century MDF, DIR, DWR, HDHMR, Premium Plus, Action Tesa, Paramount, singhalply.com, Hill Wood, Flexi Ply, Green Tree, Singhal Marketing Plywood, Singhal Decor Plywood, Akshat Agarwal Plywood, Abhishek Agarwal Plywood, Manoj Agarwal Plywood, Abhishek Agarwal, Akshat Agarwal, Manoj Agarwal, Kailash Agarwal, Manav Agarwal, PMC Vendor, PMC Plywood Vendor, Singhal Brothers, Singhal Studio, Plywood shop near me, wholesale plywood near me, Singhal Brothers Plywood, Singhal Marketing alternative, Singhal Decor alternative, Plywood Ahmedabad, Best Plywood Wholesaler Ahmedabad, Veneers and Laminates Gujarat, Singhal Ply Ahmedabad, ISI grade plywood near me, shuttering plywood wholesale, wood dealers Ahmedabad" />
        <link rel="canonical" href="https://singhalbrothers.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Singhal Brothers",
              "description": "Gujarat's leading supplier of premium plywood, blockboards, and designer veneers. Trusted by wholesalers and homeowners since 1998.",
              "alternateName": ["Singhal Studio", "Singhal Ply Ahmedabad", "Singhal Marketing", Singhal Decor", "Plywood Indiamart", "Plywood Gujarat", "Plywood Ahmedabad" ],
              "url": "https://singhalbrothers.com",
              "telephone": "+91 98250 28300",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "IN"
              },
              "founder": [
                {"@type": "Person", "name": "Manoj Agarwal"},
                {"@type": "Person", "name": "Abhishek Agarwal"},
                {"@type": "Person", "name": "Akshat Agarwal"},
                {"@type": "Person", "name": "Kailash Agarwal"},
                {"@type": "Person", "name": "Manav Agarwal"}
              ],
              "knowsAbout": [
                "Plywood", "Laminates", "Blockboards", "Shuttering Ply", "Flushdoors", 
                "MDF", "Century Prowud", "Action Tesa", "Kerala Plywood", "Paramount", "Hill Wood", 
                "Flexi Ply", "Green Tree", "PMC Vendor", "Commercial Plywood"
              ],
              "sameAs": [
                "https://facebook.com/singhalbrothers",
                "https://instagram.com/singhalstudio.india"
              ]
            }
          `}
        </script>
      </Helmet>
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
