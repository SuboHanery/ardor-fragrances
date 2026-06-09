"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartSheet } from "@/components/cart/CartSheet";

export function Navbar() {
  const pathname = usePathname();

  const NAV_LINKS = [
    { href: "/shop", label: "FRAGRANCES" },
    { href: "/about", label: "OUR STORY" },
    { href: "/transparency", label: "TRANSPARENCY" },
    { href: "/quiz", label: "FIND YOUR SCENT" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-foreground">
            ARDOR
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium tracking-wide">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`transition-colors relative pb-1 ${
                  isActive 
                    ? "text-accent" 
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/login">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <CartSheet />
        </div>
      </div>
    </header>
  );
}
