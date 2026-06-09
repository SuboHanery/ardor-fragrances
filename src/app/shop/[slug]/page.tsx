"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Heart, Share2, Plus, Minus, ArrowLeft, Truck, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";

export default function ProductDetailsPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : 'ardor-equinox';
  const foundProduct = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  
  const PRODUCT = {
    ...foundProduct,
    images: [
      foundProduct.image,
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop"
    ],
    performance: {
      longevity: "10+ hours (Climate Tested)",
      sillage: "Enormous in High Humidity",
      season: "Tropical, Summer, Spring",
      time: "Day & Evening"
    },
    ingredients: [
      { name: "Alcohol Denat.", percent: 70, origin: "France" },
      { name: "Fragrance (Parfum) - 17% Concentration", percent: 17, origin: "Grasse" },
      { name: "Aqua (Water)", percent: 13, origin: "Switzerland" },
    ]
  };

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [view360, setView360] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      
      {/* Breadcrumbs & Back */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
        <Link href="/shop" className="flex items-center hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Shop
        </Link>
        <span>/</span>
        <span className="text-foreground">{PRODUCT.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Product Images */}
        <div className="space-y-6">
          <div className="relative aspect-[4/5] bg-muted rounded-xl overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage + (view360 ? "360" : "")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: view360 
                    ? "url('https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop')" 
                    : `url(${PRODUCT.images[activeImage]})` 
                }}
              />
            </AnimatePresence>
            
            {/* 360 Toggle Button Mock */}
            <Button 
              variant="secondary" 
              className="absolute bottom-4 right-4 rounded-full bg-white/80 backdrop-blur-md text-black hover:bg-white"
              onClick={() => setView360(!view360)}
            >
              <RefreshCcw className="h-4 w-4 mr-2" /> {view360 ? "Exit 360°" : "View 360°"}
            </Button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {PRODUCT.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => { setActiveImage(idx); setView360(false); }}
                className={`relative w-24 h-32 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${activeImage === idx && !view360 ? "border-accent" : "border-transparent"}`}
              >
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{PRODUCT.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium">₹{PRODUCT.price.toLocaleString()}</span>
              <div className="flex items-center text-accent">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm text-foreground ml-2 underline cursor-pointer">{PRODUCT.reviews} Reviews</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {PRODUCT.description}
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center border border-border rounded-md h-12">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 h-full hover:bg-muted transition-colors"><Minus className="h-4 w-4" /></button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 h-full hover:bg-muted transition-colors"><Plus className="h-4 w-4" /></button>
              </div>
              <Button 
                onClick={() => addToCart({ id: PRODUCT.id, name: PRODUCT.name, price: PRODUCT.price, image: PRODUCT.images[0] }, quantity)}
                size="lg" 
                className="flex-1 h-12 bg-accent text-accent-foreground hover:bg-accent/90 tracking-widest font-semibold text-sm"
              >
                ADD TO CART - ₹{(PRODUCT.price * quantity).toLocaleString()}
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 border-border"><Heart className="h-4 w-4 mr-2" /> Add to Wishlist</Button>
              <Button variant="outline" size="icon" className="border-border"><Share2 className="h-4 w-4" /></Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-muted-foreground bg-muted p-4 rounded-md">
            <div className="flex items-center gap-2"><Truck className="h-4 w-4" /> Free shipping over ₹5000</div>
            <div className="flex items-center gap-2"><RefreshCcw className="h-4 w-4" /> 30-day returns</div>
          </div>

          <Accordion className="w-full">
            <AccordionItem value="notes">
              <AccordionTrigger className="font-serif text-lg">Fragrance Notes</AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Top Notes (0-30 mins)</h4>
                  <p>{PRODUCT.notes.top.join(", ")}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Heart Notes (1-4 hours)</h4>
                  <p>{PRODUCT.notes.middle.join(", ")}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Base Notes (4+ hours)</h4>
                  <p>{PRODUCT.notes.base.join(", ")}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="performance">
              <AccordionTrigger className="font-serif text-lg">Performance & Usage</AccordionTrigger>
              <AccordionContent className="pt-2">
                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Longevity</span>
                    <span className="font-medium">{PRODUCT.performance.longevity}</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Sillage</span>
                    <span className="font-medium">{PRODUCT.performance.sillage}</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Best Season</span>
                    <span className="font-medium">{PRODUCT.performance.season}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Time of Day</span>
                    <span className="font-medium">{PRODUCT.performance.time}</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="transparency">
              <AccordionTrigger className="font-serif text-lg">Ingredient Transparency</AccordionTrigger>
              <AccordionContent className="pt-2 space-y-4">
                <p className="text-sm text-muted-foreground">We believe you have the right to know exactly what you're spraying on your skin. Here is our full ingredient breakdown.</p>
                <div className="space-y-3">
                  {PRODUCT.ingredients.map(ing => (
                    <div key={ing.name} className="flex flex-col gap-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{ing.name}</span>
                        <span>{ing.percent}%</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Origin: {ing.origin}</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-accent" style={{ width: `${ing.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
    </div>
  );
}
