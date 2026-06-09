"use client";

import { motion } from "framer-motion";
import { Droplet, Leaf, ShieldCheck, Scale, ThermometerSun, Sun, Beaker } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            The Climate Problem
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 font-sans tracking-wide"
          >
            Luxury fragrances fade in your climate. We engineered one that doesn't.
          </motion.p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold mb-8">Designed for Paris. Failing in Mumbai.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Luxury fragrance is engineered for Paris, London, and New York—cool, dry climates. A $300 designer scent loses its sillage after 3 hours in Mumbai heat. A premium composition fades immediately in Dubai humidity.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Yet 4 billion people live in tropical and warm climates. The fragrance industry sees you as an afterthought. We see you as our North Star.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl font-bold">Climate-Engineered Performance</h2>
              <p className="text-lg text-muted-foreground">
                We engineer every ARDOR fragrance starting with tropical climates, not cool weather. When you choose ARDOR, you're choosing fragrance engineered for YOUR climate, not someone else's.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                    <Droplet className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-lg">15-17% Concentration</h4>
                  <p className="text-sm text-muted-foreground">Higher oil concentration for extreme heat resilience.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                    <Beaker className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-lg">Heat-Stable Accords</h4>
                  <p className="text-sm text-muted-foreground">Synthetic chemistry engineered to project in high humidity.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                    <Sun className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-lg">10+ Hours Guarantee</h4>
                  <p className="text-sm text-muted-foreground">Tested in Mumbai, Dubai, Singapore, and Nairobi.</p>
                </div>
                <div className="space-y-2">
                  <div className="h-10 w-10 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-lg">Distinctive Identity</h4>
                  <p className="text-sm text-muted-foreground">Original, premium compositions. No generic clones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-serif text-4xl font-bold mb-6">Experience True Performance</h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Join the conscious professionals in tropical climates who refuse to settle for underperforming fragrances.
          </p>
          <Link href="/shop/ardor-equinox">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-12 text-sm tracking-widest font-semibold">
              SHOP ARDOR EQUINOX
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
