"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function AdvisorPage() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Welcome to ARDOR. I am your personal AI Fragrance Advisor. Tell me about the scents you love, the mood you want to evoke, or a perfume you already like, and I'll find your perfect match."
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add User Message
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Mock AI Response
    setTimeout(() => {
      setIsTyping(false);
      setMessages([
        ...newMessages,
        {
          role: "ai",
          content: "Based on your preference for vanilla and woody notes, I highly recommend our **Oud & Vanilla Reserve**. It opens with sweet Madagascan vanilla and dries down to a rich Cambodian oud base. It has an eternal longevity (12+ hours) and is perfect for evening wear."
        }
      ]);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl h-[calc(100vh-160px)] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <Sparkles className="h-6 w-6 text-accent" /> AI Fragrance Advisor
        </h1>
        <p className="text-muted-foreground">Discover your signature scent through conversation.</p>
      </div>

      <div className="flex-1 bg-muted/10 border border-border rounded-2xl flex flex-col overflow-hidden">
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "ai" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                {msg.role === "ai" ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
              </div>
              
              <div className={`max-w-[80%] rounded-2xl p-4 ${msg.role === "ai" ? "bg-muted text-foreground rounded-tl-sm" : "bg-primary text-primary-foreground rounded-tr-sm"}`}>
                <p className="text-sm leading-relaxed">{msg.content}</p>
                
                {/* Mock Product Recommendation */}
                {msg.role === "ai" && messages.length > 1 && idx === messages.length - 1 && (
                  <div className="mt-4 bg-background border border-border rounded-lg p-4 flex gap-4 items-center">
                    <div className="w-16 h-20 bg-muted rounded bg-[url('https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center" />
                    <div>
                      <h4 className="font-serif font-bold">Oud & Vanilla Reserve</h4>
                      <p className="text-sm text-muted-foreground mb-2">$125.00</p>
                      <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 h-8 text-xs px-4">VIEW PRODUCT</Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                <Bot className="h-5 w-5" />
              </div>
              <div className="bg-muted text-foreground rounded-2xl rounded-tl-sm p-4 flex items-center gap-1">
                <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-background border-t border-border">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-2"
          >
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. I want something woody but sweet for winter..." 
              className="h-12 bg-muted/30 border-border focus-visible:ring-accent"
            />
            <Button type="submit" disabled={!input.trim() || isTyping} className="h-12 w-12 p-0 bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0">
              <Send className="h-5 w-5" />
            </Button>
          </form>
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1 text-xs">
            <button type="button" onClick={() => setInput("What's a good gift for a woman in her 30s?")} className="bg-muted px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-muted/80 transition-colors">Gift for a woman in her 30s</button>
            <button type="button" onClick={() => setInput("I like Tom Ford Oud Wood. What do you have similar?")} className="bg-muted px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-muted/80 transition-colors">Similar to Tom Ford Oud Wood</button>
            <button type="button" onClick={() => setInput("Looking for a fresh summer fragrance.")} className="bg-muted px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-muted/80 transition-colors">Fresh summer fragrance</button>
          </div>
        </div>
      </div>
    </div>
  );
}
