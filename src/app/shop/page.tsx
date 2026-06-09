"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal, Star, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([0, 25000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("bestsellers");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);

  const { addToCart } = useCart();

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const toggleNote = (note: string) => {
    setSelectedNotes(prev => prev.includes(note) ? prev.filter(n => n !== note) : [...prev, note]);
  };

  let filteredProducts = PRODUCTS.filter(p => {
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && !p.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    if (selectedCategories.length > 0 && !selectedCategories.includes(p.collection)) {
      return false;
    }
    
    if (selectedNotes.length > 0) {
      const allNotes = [...p.notes.top, ...p.notes.middle, ...p.notes.base, p.description].join(" ").toLowerCase();
      const hasNote = selectedNotes.some(note => allNotes.includes(note.toLowerCase()));
      if (!hasNote) return false;
    }

    return true;
  });

  filteredProducts.sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "newest") return parseInt(b.id) - parseInt(a.id);
    return b.reviews - a.reviews;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 flex flex-col lg:flex-row gap-8">
      
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden flex items-center justify-between mb-4">
        <h1 className="font-serif text-3xl font-bold">Fragrances</h1>
        <Button variant="outline" size="sm">
          <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      {/* Sidebar Filters */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24 space-y-8 h-[calc(100vh-8rem)] overflow-y-auto pb-8 pr-2">
          <div>
            <h1 className="font-serif text-3xl font-bold mb-2">Fragrances</h1>
            <p className="text-sm text-muted-foreground mb-6">Showing {filteredProducts.length} results</p>
          </div>

          <Accordion defaultValue={["category", "price", "notes"]}>
            <AccordionItem value="category">
              <AccordionTrigger className="text-sm font-semibold tracking-wide">CATEGORY</AccordionTrigger>
              <AccordionContent className="space-y-2">
                {["Flagship", "Tropical Heat", "Geographic", "Performance", "Aromatic", "Abstract", "Bonus"].map(cat => (
                  <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-accent focus:ring-accent"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className="text-sm text-foreground/80">{cat}</span>
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="price">
              <AccordionTrigger className="text-sm font-semibold tracking-wide">PRICE</AccordionTrigger>
              <AccordionContent className="pt-4 pb-2 px-1">
                <Slider 
                  defaultValue={[0, 25000]} 
                  value={priceRange}
                  max={25000} 
                  min={0} 
                  step={500} 
                  onValueChange={(val) => setPriceRange(val as number[])}
                  className="mb-4"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="notes">
              <AccordionTrigger className="text-sm font-semibold tracking-wide">FRAGRANCE FAMILY</AccordionTrigger>
              <AccordionContent className="space-y-2">
                {["Woody", "Floral", "Fresh", "Oriental", "Citrus"].map(note => (
                  <label key={note} className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 text-accent focus:ring-accent"
                      checked={selectedNotes.includes(note)}
                      onChange={() => toggleNote(note)}
                    />
                    <span className="text-sm text-foreground/80">{note}</span>
                  </label>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar: Search and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search fragrances..." 
              className="pl-9 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full sm:w-[200px]">
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bestsellers">Best Sellers</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.length === 0 ? (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              No fragrances match your filters.
            </div>
          ) : (
            displayedProducts.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] bg-muted mb-4 overflow-hidden rounded-md">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {idx === 0 && <Badge className="bg-white text-black hover:bg-white">BEST SELLER</Badge>}
                  {idx === 2 && <Badge className="bg-accent text-white hover:bg-accent">NEW</Badge>}
                </div>

                <Button variant="ghost" size="icon" className="absolute top-3 right-3 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white text-black transition-colors">
                  <Heart className="h-4 w-4" />
                </Button>

                <Link href={`/shop/${product.slug}`} className="absolute inset-0 z-0">
                  <span className="sr-only">View {product.name}</span>
                </Link>

                <Button 
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity w-11/12 bg-white text-black hover:bg-white/90 z-10"
                >
                  QUICK ADD
                </Button>
              </div>
              
              <div className="flex justify-between items-start mt-auto">
                <div>
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="font-serif text-lg font-semibold mb-1 hover:text-accent transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="text-xs text-muted-foreground ml-1 font-medium">{product.rating} ({product.reviews})</span>
                  </div>
                </div>
                <span className="font-medium text-lg">₹{product.price.toLocaleString()}</span>
              </div>
            </motion.div>
          )))}
        </div>

        {/* Load More */}
        {visibleCount < filteredProducts.length && (
          <div className="mt-16 flex justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 tracking-widest text-sm font-semibold border-border hover:bg-muted"
              onClick={() => setVisibleCount(prev => prev + 12)}
            >
              LOAD MORE
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
