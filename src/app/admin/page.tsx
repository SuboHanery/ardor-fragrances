"use client";

import { useState } from "react";
import { LayoutDashboard, ShoppingBag, Users, Settings, Tag, MessageSquare, Plus, ArrowUpRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const TABS = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "products", label: "Products", icon: Tag },
    { id: "customers", label: "Customers", icon: Users },
    { id: "reviews", label: "Reviews", icon: MessageSquare },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-muted/20">
      
      {/* Admin Sidebar */}
      <aside className="w-64 bg-background border-r border-border flex flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-border">
          <h1 className="font-serif text-2xl font-bold tracking-widest">ARDOR <span className="text-xs text-accent uppercase block tracking-widest mt-1">Admin</span></h1>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id 
                  ? "bg-accent/10 text-accent" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <Button variant="outline" className="w-full justify-start text-muted-foreground">Sign Out</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl font-bold capitalize">{activeTab}</h2>
          <div className="flex items-center gap-4">
            <Input placeholder="Search..." className="w-64 bg-background" />
            <div className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
              AD
            </div>
          </div>
        </div>

        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Total Revenue", value: "$45,231.89", trend: "+20.1%", icon: TrendingUp },
                { label: "Orders", value: "+2350", trend: "+15%", icon: ShoppingBag },
                { label: "Active Customers", value: "+12,234", trend: "+10.5%", icon: Users },
                { label: "Pending Reviews", value: "12", trend: "-5%", icon: MessageSquare },
              ].map((kpi, idx) => (
                <div key={idx} className="bg-background border border-border rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-sm font-medium text-muted-foreground">{kpi.label}</p>
                    <kpi.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{kpi.value}</h3>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3" /> {kpi.trend} from last month
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Orders */}
              <div className="lg:col-span-2 bg-background border border-border rounded-xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Recent Orders</h3>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
                      <tr>
                        <th className="px-4 py-3">Order ID</th>
                        <th className="px-4 py-3">Customer</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Amount</th>
                        <th className="px-4 py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <tr key={i} className="border-b border-border last:border-0">
                          <td className="px-4 py-3 font-medium">#ORD-90{i}2</td>
                          <td className="px-4 py-3">customer{i}@email.com</td>
                          <td className="px-4 py-3">Oct {10 + i}, 2025</td>
                          <td className="px-4 py-3">${(100 + i * 25).toFixed(2)}</td>
                          <td className="px-4 py-3">
                            <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-xs font-semibold">Processing</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Low Stock Alerts */}
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-6">Low Stock Alerts</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-muted rounded bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=100&auto=format&fit=crop')" }} />
                        <div>
                          <p className="text-sm font-medium">Oud Reserve</p>
                          <p className="text-xs text-muted-foreground">50ml Variant</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-destructive">{5 - i} left</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="space-y-6">
            <div className="flex justify-end mb-6">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground"><Plus className="h-4 w-4 mr-2"/> Add Product</Button>
            </div>
            <div className="bg-background border border-border rounded-xl overflow-hidden">
               <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border">
                    <tr>
                      <th className="px-6 py-4">Product</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Price</th>
                      <th className="px-6 py-4">Inventory</th>
                      <th className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4].map((i) => (
                      <tr key={i} className="border-b border-border hover:bg-muted/10">
                        <td className="px-6 py-4 flex items-center gap-3">
                          <div className="w-10 h-10 bg-muted rounded bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=100&auto=format&fit=crop')" }} />
                          <span className="font-medium">Vanilla & Bergamot N°{i}</span>
                        </td>
                        <td className="px-6 py-4">Best Sellers</td>
                        <td className="px-6 py-4">$125.00</td>
                        <td className="px-6 py-4">{100 - i * 15} in stock</td>
                        <td className="px-6 py-4">
                          <Button variant="ghost" size="sm" className="text-accent hover:text-accent hover:bg-accent/10">Edit</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        )}

        {/* Placeholders for other tabs */}
        {["orders", "customers", "reviews", "settings"].includes(activeTab) && (
          <div className="bg-background border border-border rounded-xl p-12 text-center">
            <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Module Under Construction</h3>
            <p className="text-muted-foreground">The {activeTab} management module will be connected to the Prisma database shortly.</p>
          </div>
        )}
      </main>
    </div>
  );
}
