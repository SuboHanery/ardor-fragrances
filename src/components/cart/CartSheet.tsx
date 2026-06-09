"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function CartSheet() {
  const { items, cartTotal, itemCount, removeFromCart, updateQuantity } = useCart();

  return (
    <Sheet>
      <SheetTrigger className="relative flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent/10 transition-colors focus:outline-none">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-accent-foreground font-bold">
            {itemCount}
          </span>
        )}
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-md flex flex-col border-border bg-background p-0">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="font-serif text-2xl">Your Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingCart className="h-12 w-12 mb-4 opacity-20" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div 
                  className="w-20 h-24 bg-muted rounded-md bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-serif font-medium leading-none mb-1">{item.name}</h4>
                      <span className="text-sm text-muted-foreground">50ml</span>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-border rounded-md h-8">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 h-full hover:bg-muted transition-colors"
                      ><Minus className="h-3 w-3" /></button>
                      <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 h-full hover:bg-muted transition-colors"
                      ><Plus className="h-3 w-3" /></button>
                    </div>
                    <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-border p-6 bg-muted/20">
          <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="font-serif text-xl font-medium">Subtotal</span>
            <span className="font-medium text-xl">₹{cartTotal.toLocaleString()}</span>
          </div>
          <Link href="/checkout">
            <Button disabled={items.length === 0} className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 text-sm tracking-widest font-semibold flex items-center justify-between px-6">
              <span>CHECKOUT</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
