"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Package, Heart, Gift, Share2, CreditCard, MapPin, Settings } from "lucide-react";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  const TABS = [
    { id: "profile", label: "Profile", icon: User },
    { id: "orders", label: "Order History", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "rewards", label: "Rewards & Points", icon: Gift },
    { id: "referrals", label: "Refer a Friend", icon: Share2 },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "payments", label: "Payment Methods", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-bold mb-2">My Account</h1>
            <p className="text-muted-foreground text-sm">Welcome back, John Doe</p>
          </div>
          
          <nav className="flex flex-col space-y-1">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? "bg-accent/10 text-accent" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
            <button className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors mt-4">
              Sign Out
            </button>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-muted/5 rounded-xl p-6 md:p-8 border border-border min-h-[600px]">
          
          {activeTab === "profile" && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl">Profile Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background p-6 rounded-lg border border-border flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-4">
                    <Gift className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-2xl">1,250</h3>
                  <p className="text-sm text-muted-foreground">Reward Points</p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-4">
                    <Package className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-2xl">4</h3>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                </div>
                <div className="bg-background p-6 rounded-lg border border-border flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-2xl">12</h3>
                  <p className="text-sm text-muted-foreground">Wishlist Items</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl">Order History</h2>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-background border border-border rounded-lg p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold">Order #ORD-7A92{i}B</span>
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full uppercase tracking-wider">Delivered</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Placed on Oct 12, 2025 • $185.00</p>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "rewards" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="font-serif text-2xl">Rewards & Points</h2>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Current Balance</p>
                  <p className="font-semibold text-3xl text-accent">1,250 <span className="text-lg">pts</span></p>
                </div>
              </div>
              
              <div className="bg-background border border-border rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">How to earn points</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex justify-between"><span>Create an account</span> <span>+500 pts</span></li>
                  <li className="flex justify-between"><span>Make a purchase</span> <span>10 pts per $1</span></li>
                  <li className="flex justify-between"><span>Leave a review</span> <span>+200 pts</span></li>
                  <li className="flex justify-between"><span>Refer a friend</span> <span>+1,000 pts</span></li>
                </ul>
              </div>

              <h3 className="font-serif text-xl mb-4">Available Rewards</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-background border border-border rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">$10 Off Discount</h4>
                  <p className="text-sm text-muted-foreground mb-4">Apply a $10 discount to your next order.</p>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Redeem for 1,000 pts</Button>
                </div>
                <div className="bg-background border border-border rounded-lg p-6 opacity-50">
                  <h4 className="font-bold text-lg mb-2">Free Discovery Set</h4>
                  <p className="text-sm text-muted-foreground mb-4">Get a free 3-piece discovery set.</p>
                  <Button disabled className="w-full">Redeem for 2,500 pts</Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "referrals" && (
            <div className="space-y-6 text-center max-w-lg mx-auto py-12">
              <div className="h-24 w-24 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Share2 className="h-12 w-12" />
              </div>
              <h2 className="font-serif text-3xl mb-4">Give 10%, Get 1,000 Points</h2>
              <p className="text-muted-foreground mb-8">Invite your friends to ARDOR. They get 10% off their first order, and you get 1,000 reward points when they make a purchase.</p>
              
              <div className="bg-background border border-border rounded-lg p-4 flex items-center justify-between gap-4">
                <code className="text-sm bg-muted px-4 py-2 rounded flex-1 text-left overflow-x-auto">https://ardor.com/ref/johndoe123</code>
                <Button>Copy Link</Button>
              </div>
            </div>
          )}

          {/* Placeholders for other tabs */}
          {["wishlist", "addresses", "payments", "settings"].includes(activeTab) && (
            <div className="flex flex-col items-center justify-center h-full text-center py-20 opacity-50">
              <Settings className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="font-serif text-2xl mb-2">Coming Soon</h2>
              <p className="text-muted-foreground">This section is currently under development.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
