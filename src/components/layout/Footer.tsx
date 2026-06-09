"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, Loader2, Mail } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      
      if (res.ok) {
        setStatus("success");
        if (data.previewUrl) setPreviewUrl(data.previewUrl);
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="font-serif text-3xl font-bold tracking-widest">
            ARDOR
          </Link>
          <p className="text-primary-foreground/70 max-w-xs font-sans text-sm">
            Luxury Fragrance Without Luxury Markups. See What You're Paying For.
          </p>
        </div>

        {/* Shop */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-semibold tracking-wide">Shop</h4>
          <ul className="space-y-2 font-sans text-sm text-primary-foreground/70">
            <li><Link href="/shop" className="hover:text-accent transition-colors">All Fragrances</Link></li>
            <li><Link href="/shop?category=bestsellers" className="hover:text-accent transition-colors">Best Sellers</Link></li>
            <li><Link href="/shop?category=new" className="hover:text-accent transition-colors">New Arrivals</Link></li>
            <li><Link href="/quiz" className="hover:text-accent transition-colors">Fragrance Quiz</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-semibold tracking-wide">Support</h4>
          <ul className="space-y-2 font-sans text-sm text-primary-foreground/70">
            <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            <li><Link href="/shipping" className="hover:text-accent transition-colors">Shipping Policy</Link></li>
            <li><Link href="/returns" className="hover:text-accent transition-colors">Returns & Exchanges</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-semibold tracking-wide">Join The Club</h4>
          <p className="text-primary-foreground/70 font-sans text-sm">
            Subscribe for 10% off your first order and exclusive access to new releases.
          </p>
          {status === "success" ? (
            <div className="mt-4 p-4 bg-accent/10 border border-accent rounded-md">
              <div className="flex items-center gap-2 text-accent font-medium mb-2 text-sm">
                <CheckCircle2 className="h-4 w-4" /> Subscribed successfully!
              </div>
              <p className="text-xs text-primary-foreground/80 mb-2">
                We've sent your 10% coupon to your inbox.
              </p>
              {previewUrl && (
                <a href={previewUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-accent hover:underline flex items-center gap-1">
                  <Mail className="h-3 w-3" /> View Email Preview
                </a>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col mt-2">
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email" 
                  required
                  disabled={status === "loading"}
                  className="bg-transparent border-b border-primary-foreground/30 focus:border-accent outline-none px-2 py-1 w-full text-sm transition-colors text-primary-foreground disabled:opacity-50"
                />
                <button type="submit" disabled={status === "loading"} className="text-accent font-semibold text-sm hover:text-accent/80 ml-2 disabled:opacity-50 flex items-center">
                  {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "SUBSCRIBE"}
                </button>
              </div>
              {status === "error" && <p className="text-red-400 text-xs mt-2">Failed to subscribe. Please try again.</p>}
            </form>
          )}
          <div className="flex gap-4 pt-4">
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors font-medium text-sm">INSTAGRAM</a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors font-medium text-sm">TWITTER</a>
            <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors font-medium text-sm">FACEBOOK</a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between font-sans text-xs text-primary-foreground/50">
        <p>&copy; {new Date().getFullYear()} ARDOR Fragrances. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-primary-foreground">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary-foreground">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
