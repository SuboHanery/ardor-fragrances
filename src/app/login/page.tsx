"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

export default function LoginPage() {
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
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Access your ARDOR account
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
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-foreground">
                    Password
                  </label>
                  <div className="text-sm">
                    <Link href="#" className="font-medium text-accent hover:text-accent/80 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    autoComplete="current-password" 
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
                  SIGN IN <Lock className="ml-2 h-4 w-4" />
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
                  Don't have an account?{' '}
                  <Link href="/register" className="font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center">
                    Create one now <ArrowRight className="ml-1 h-3 w-3" />
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
