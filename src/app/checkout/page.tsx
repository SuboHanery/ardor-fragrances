"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, CreditCard, Truck, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const { items, cartTotal } = useCart();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-background min-h-[80vh]">
      <h1 className="font-serif text-3xl font-bold text-center mb-10">Secure Checkout</h1>
      
      {/* Stepper */}
      <div className="max-w-3xl mx-auto flex justify-between items-center mb-12 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-border -z-10" />
        {[
          { num: 1, label: "Information" },
          { num: 2, label: "Shipping" },
          { num: 3, label: "Payment" },
          { num: 4, label: "Review" }
        ].map(s => (
          <div key={s.num} className="flex flex-col items-center gap-2 bg-background px-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${step >= s.num ? "bg-accent border-accent text-accent-foreground" : "bg-background border-border text-muted-foreground"}`}>
              {step > s.num ? <CheckCircle2 className="h-5 w-5" /> : s.num}
            </div>
            <span className={`text-xs uppercase tracking-wider font-semibold ${step >= s.num ? "text-foreground" : "text-muted-foreground"}`}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Main Checkout Flow */}
        <div className="xl:col-span-2 space-y-8">
          
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl">Contact Information</h2>
              <Input placeholder="Email" type="email" className="h-12 bg-muted/20" />
              
              <h2 className="font-serif text-2xl pt-6">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="h-12 bg-muted/20" />
                <Input placeholder="Last Name" className="h-12 bg-muted/20" />
                <Input placeholder="Address" className="col-span-2 h-12 bg-muted/20" />
                <Input placeholder="City" className="h-12 bg-muted/20" />
                <Input placeholder="State" className="h-12 bg-muted/20" />
                <Input placeholder="ZIP Code" className="h-12 bg-muted/20" />
                <Input placeholder="Country" className="h-12 bg-muted/20" />
              </div>
              <Button onClick={() => setStep(2)} className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 mt-4">CONTINUE TO SHIPPING</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl">Shipping Method</h2>
              <div className="border border-border rounded-md overflow-hidden">
                <label className="flex justify-between items-center p-4 border-b border-border cursor-pointer hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" className="text-accent focus:ring-accent" defaultChecked />
                    <div>
                      <div className="font-medium">Standard Shipping</div>
                      <div className="text-sm text-muted-foreground">3-5 Business Days</div>
                    </div>
                  </div>
                  <span className="font-medium">Free</span>
                </label>
                <label className="flex justify-between items-center p-4 border-b border-border cursor-pointer hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" className="text-accent focus:ring-accent" />
                    <div>
                      <div className="font-medium">Express Shipping</div>
                      <div className="text-sm text-muted-foreground">1-2 Business Days</div>
                    </div>
                  </div>
                  <span className="font-medium">₹1,500</span>
                </label>
                <label className="flex justify-between items-center p-4 cursor-pointer hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" className="text-accent focus:ring-accent" />
                    <div>
                      <div className="font-medium">Overnight</div>
                      <div className="text-sm text-muted-foreground">Next Business Day</div>
                    </div>
                  </div>
                  <span className="font-medium">₹2,500</span>
                </label>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" onClick={() => setStep(1)} className="h-12 px-8">BACK</Button>
                <Button onClick={() => setStep(3)} className="flex-1 h-12 bg-primary text-primary-foreground hover:bg-primary/90">CONTINUE TO PAYMENT</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl flex items-center gap-2"><CreditCard className="h-6 w-6"/> Payment</h2>
              <p className="text-sm text-muted-foreground flex items-center gap-1"><Lock className="h-3 w-3"/> All transactions are secure and encrypted.</p>
              
              <div className="border border-border rounded-md p-6 bg-muted/10">
                {/* Mock Stripe Element */}
                <div className="space-y-4">
                  <Input placeholder="Card Number" className="h-12" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="MM / YY" className="h-12" />
                    <Input placeholder="CVC" className="h-12" />
                  </div>
                  <Input placeholder="Name on Card" className="h-12" />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="outline" onClick={() => setStep(2)} className="h-12 px-8">BACK</Button>
                <Button onClick={() => setStep(4)} className="flex-1 h-12 bg-primary text-primary-foreground hover:bg-primary/90">REVIEW ORDER</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl">Review & Place Order</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-border p-6 rounded-md">
                <div>
                  <h4 className="font-semibold mb-2">Shipping Details</h4>
                  <p className="text-sm text-muted-foreground">John Doe<br/>123 Luxury Ave<br/>New York, NY 10001<br/>Standard Shipping</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Payment Details</h4>
                  <p className="text-sm text-muted-foreground">Card ending in 4242<br/>Billing address same as shipping</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="outline" onClick={() => setStep(3)} className="h-12 px-8">BACK</Button>
                <Button className="flex-1 h-12 bg-accent text-accent-foreground hover:bg-accent/90 text-sm tracking-widest font-bold">PLACE ORDER</Button>
              </div>
            </div>
          )}

        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-muted/30 p-6 md:p-8 rounded-xl h-fit sticky top-24">
          <h3 className="font-serif text-xl font-semibold mb-6">Order Summary</h3>
          
          <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
            {items.map(item => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-16 bg-muted rounded bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}/>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-muted-foreground text-xs">Qty: {item.quantity}</p>
                  </div>
                </div>
                <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            {items.length === 0 && (
              <p className="text-sm text-muted-foreground">Your cart is empty.</p>
            )}
          </div>

          <div className="space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Taxes (Included)</span>
              <span>₹0</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-border mt-4 pt-4 text-lg font-medium">
            <span>Total</span>
            <span>₹{cartTotal.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
