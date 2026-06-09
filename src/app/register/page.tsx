"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, UserPlus } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mt-6 text-center font-serif text-4xl font-bold tracking-tight text-foreground">
            Join ARDOR
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Create an account to track orders and save your wishlist.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className="bg-muted/10 py-8 px-4 shadow-sm border border-border sm:rounded-xl sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-foreground">
                    First name
                  </label>
                  <div className="mt-2">
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      type="text" 
                      required 
                      className="h-12 bg-background border-border focus-visible:ring-accent" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-foreground">
                    Last name
                  </label>
                  <div className="mt-2">
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      type="text" 
                      required 
                      className="h-12 bg-background border-border focus-visible:ring-accent" 
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">
                  Email address
                </label>
                <div className="mt-2">
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    required 
                    className="h-12 bg-background border-border focus-visible:ring-accent" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-foreground">
                  Password
                </label>
                <div className="mt-2">
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    autoComplete="new-password" 
                    required 
                    className="h-12 bg-background border-border focus-visible:ring-accent" 
                  />
                </div>
              </div>

              <div>
                <Button 
                  type="submit" 
                  className="w-full flex justify-center items-center h-12 bg-accent text-accent-foreground hover:bg-accent/90 tracking-widest font-semibold text-sm transition-colors"
                >
                  CREATE ACCOUNT <UserPlus className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm leading-6">
                  <span className="bg-background px-6 text-muted-foreground">Or</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link href="/login" className="font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center">
                    <ArrowLeft className="mr-1 h-3 w-3" /> Sign in instead
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
