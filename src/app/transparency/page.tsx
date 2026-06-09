"use client";

import { motion } from "framer-motion";
import { Search, Percent, PackageOpen, FlaskConical, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TransparencyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Radical Transparency
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 font-sans tracking-wide"
          >
            We believe you deserve to know exactly what goes into your fragrance, and exactly what it costs to make.
          </motion.p>
        </div>
      </section>

      {/* The Cost Breakdown */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">The Real Cost of ARDOR EQUINOX</h2>
            <p className="text-muted-foreground text-lg">
              Traditional designer fragrances mark up their products by 10x to pay for celebrity endorsements and expensive retail space. We sell directly to you. Here is the exact cost breakdown for a 50ml bottle of ARDOR EQUINOX (₹12,199).
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-muted/10 border border-border rounded-2xl p-8 md:p-12">
            <div className="space-y-8">
              {[
                { label: "Premium Ingredients & formulation", cost: "₹2,749", percent: 22, desc: "Sourced from Grasse. 17% oil concentration." },
                { label: "Packaging & Glass", cost: "₹1,499", percent: 12, desc: "Heavy frosted glass, custom cap, sustainable box." },
                { label: "Fulfillment & Shipping", cost: "₹1,249", percent: 10, desc: "Warehousing and direct-to-door delivery." },
                { label: "Taxes & Duties", cost: "₹999", percent: 8, desc: "Average global tax footprint." },
                { label: "R&D / Climate Engineering", cost: "₹2,099", percent: 17, desc: "Testing in tropical climates, synthetic chemistry." },
                { label: "Our Profit", cost: "₹3,604", percent: 31, desc: "Reinvested into the business and our team." },
              ].map((item, i) => (
                <div key={item.label} className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <h4 className="font-bold font-serif text-lg">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="block font-medium text-lg">{item.cost}</span>
                      <span className="text-sm text-accent font-bold">{item.percent}%</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-border flex justify-between items-center text-xl font-bold">
              <span>Retail Price</span>
              <span>₹12,199.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Transparency */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Nothing to Hide</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The fragrance industry legally protects formulas as "trade secrets," allowing brands to hide harmful chemicals under the single word "Fragrance" on the label. We think that's unacceptable.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-accent">
                    <FlaskConical className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Safe Synthetics</h4>
                    <p className="text-sm text-muted-foreground">We use synthetic accords not to cut costs, but to engineer heat-stability and protect endangered botanicals (like natural Oud and Sandalwood).</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-accent">
                    <Percent className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Full Concentration Disclosure</h4>
                    <p className="text-sm text-muted-foreground">We tell you the exact oil concentration of every bottle (15-17%) so you know exactly how it will perform.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-accent">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Ethical Sourcing</h4>
                    <p className="text-sm text-muted-foreground">All natural ingredients are traced to their origin to ensure fair labor practices and sustainable harvesting.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-4xl font-bold mb-6">See the Science</h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Explore the full ingredient breakdowns and cost structures of our performance collection.
          </p>
          <Link href="/shop">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-12 text-sm tracking-widest font-semibold">
              EXPLORE THE COLLECTION
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
