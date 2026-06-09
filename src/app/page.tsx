"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Droplet, Eye, Sun, ThermometerSun } from "lucide-react";
import { PRODUCTS } from "@/data/products";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Engineer Your Fragrance. <br className="hidden md:block"/> Elevate Your Climate.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 font-sans tracking-wide mb-10 max-w-2xl"
          >
            The first global luxury fragrance brand engineered specifically for tropical and warm climates. 10+ hours of performance, guaranteed.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/shop/ardor-equinox">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto h-14 px-8 text-sm tracking-widest font-semibold">
                DISCOVER EQUINOX
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black w-full sm:w-auto h-14 px-8 text-sm tracking-widest font-semibold bg-transparent">
                OUR ENGINEERING
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold mb-6">Fragrance that Actually Works Where You Live</h2>
            <p className="text-muted-foreground text-lg">Luxury fragrances are formulated in Paris for cool climates. They fade in heat and dissipate in humidity. ARDOR changes that.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="h-16 w-16 rounded-full bg-primary/5 flex items-center justify-center text-accent">
                <ThermometerSun className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Climate-Engineered</h3>
              <p className="text-muted-foreground">Formulated for 15-17% concentration with synthetic accords chosen specifically for heat stability.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="h-16 w-16 rounded-full bg-primary/5 flex items-center justify-center text-accent">
                <Sun className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Performance-Proven</h3>
              <p className="text-muted-foreground">Tested in Mumbai, Dubai, and Bangkok. We measure tropical sillage and guarantee 10+ hours longevity.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center space-y-4"
            >
              <div className="h-16 w-16 rounded-full bg-primary/5 flex items-center justify-center text-accent">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold">Uncompromising Luxury</h3>
              <p className="text-muted-foreground">Not clones. Original compositions crafted from premium ingredients that respect where you live.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Equinox */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
               <div className="absolute inset-0 bg-black/20" />
            </div>
            <div>
              <span className="text-accent font-semibold tracking-widest text-xs uppercase mb-4 block">THE FIRST LAUNCH</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">ARDOR EQUINOX</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                The fragrance luxury brands forgot to engineer. A masterful composition designed to project perfectly through intense humidity while maintaining its deep, sophisticated character.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="border-b border-primary-foreground/20 pb-4">
                  <span className="block text-accent text-sm font-bold tracking-wider mb-1">COMPOSITION</span>
                  <p>Yuzu (top) | Iso E Super + Oud (heart) | Ambroxan + Cashmere Musks (base)</p>
                </div>
                <div className="border-b border-primary-foreground/20 pb-4">
                  <span className="block text-accent text-sm font-bold tracking-wider mb-1">CONCENTRATION</span>
                  <p>17% (Engineered for tropical performance)</p>
                </div>
                <div>
                  <span className="block text-accent text-sm font-bold tracking-wider mb-1">LONGEVITY</span>
                  <p>10+ hours in 35°C+ heat</p>
                </div>
              </div>

              <Link href="/shop/ardor-equinox">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-10 tracking-widest font-bold">
                  SHOP ARDOR EQUINOX
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">The Performance Collection</h2>
              <p className="text-muted-foreground">Original compositions engineered for the heat.</p>
            </div>
            <Link href="/shop" className="hidden sm:flex items-center gap-2 text-sm font-semibold tracking-wider hover:text-accent transition-colors">
              VIEW ALL <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-muted mb-4 overflow-hidden rounded-md">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${product.image})` }} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <Link href={`/shop/${product.slug}`} className="absolute inset-0 z-0"><span className="sr-only">View</span></Link>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <Link href={`/shop/${product.slug}`}>
                      <h3 className="font-serif text-lg font-semibold mb-1 uppercase hover:text-accent transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                  </div>
                  <span className="font-medium text-lg">₹{product.price.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Join the Performance Club</h2>
          <p className="text-muted-foreground mb-8">Subscribe for exclusive access to new climate-engineered releases and fragrance science insights.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white" />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">SUBSCRIBE</Button>
          </div>
        </div>
      </section>
      
    </div>
  );
}
