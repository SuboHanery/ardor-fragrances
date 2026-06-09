"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, RefreshCcw } from "lucide-react";
import Link from "next/link";

const QUIZ_QUESTIONS = [
  {
    id: "gender",
    question: "Who are you shopping for?",
    options: ["Myself (Feminine)", "Myself (Masculine)", "Myself (Unisex)", "It's a Gift"]
  },
  {
    id: "occasion",
    question: "When do you plan to wear this most?",
    options: ["Everyday Office", "Date Night", "Special Occasions", "Gym / Active", "All of the above"]
  },
  {
    id: "vibe",
    question: "Which of these words best describes your style?",
    options: ["Elegant & Classic", "Bold & Daring", "Fresh & Clean", "Mysterious & Dark", "Sweet & Playful"]
  },
  {
    id: "notes",
    question: "What scents are you naturally drawn to?",
    options: ["Vanilla & Sweet", "Woody & Resinous", "Fresh Citrus", "Soft Florals", "Spicy & Warm"]
  }
];

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [QUIZ_QUESTIONS[currentStep].id]: option });
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setShowResults(true);
      }, 2500);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 min-h-[80vh] flex flex-col items-center justify-center">
      
      {!isCalculating && !showResults && (
        <div className="w-full max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">Find Your Signature Scent</h1>
            <p className="text-muted-foreground">Answer a few quick questions to let our AI Fragrance Advisor find your perfect match.</p>
          </div>

          <div className="bg-muted/10 border border-border p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-muted">
              <motion.div 
                className="h-full bg-accent" 
                initial={{ width: `${(currentStep / QUIZ_QUESTIONS.length) * 100}%` }}
                animate={{ width: `${((currentStep) / QUIZ_QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-accent font-semibold tracking-widest text-xs uppercase mb-4 block">
                  Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl mb-8">{QUIZ_QUESTIONS[currentStep].question}</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {QUIZ_QUESTIONS[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="p-4 border border-border rounded-lg text-left hover:border-accent hover:bg-accent/5 transition-all focus:outline-none focus:ring-1 focus:ring-accent font-medium text-foreground"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex justify-between items-center h-10">
              {currentStep > 0 ? (
                <button onClick={handleBack} className="text-muted-foreground hover:text-foreground flex items-center text-sm transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </button>
              ) : <div />}
              <span className="text-muted-foreground text-sm">{currentStep + 1} / {QUIZ_QUESTIONS.length}</span>
            </div>
          </div>
        </div>
      )}

      {isCalculating && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center text-center space-y-6"
        >
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          <h2 className="font-serif text-2xl">Analyzing your preferences...</h2>
          <p className="text-muted-foreground max-w-sm">Our AI is matching your lifestyle and scent profile with our luxury catalog.</p>
        </motion.div>
      )}

      {showResults && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl text-center"
        >
          <h2 className="font-serif text-4xl mb-4">Your Perfect Match</h2>
          <p className="text-muted-foreground mb-12">Based on your answers, we've found the fragrance that perfectly suits your profile.</p>

          <div className="bg-muted/5 border border-border rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center text-left">
            <div className="w-full md:w-1/3 aspect-[3/4] bg-muted rounded-lg bg-[url('https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center" />
            
            <div className="w-full md:w-2/3 space-y-6">
              <div>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 inline-block">98% MATCH</span>
                <h3 className="font-serif text-3xl font-bold mb-2">Midnight Oud & Bergamot</h3>
                <p className="text-muted-foreground">The perfect balance of dark, mysterious woods and fresh, uplifting citrus. Ideal for your "Bold & Daring" style and "Date Night" occasions.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="block text-muted-foreground mb-1">Top Notes</span>
                  <span className="font-medium">Bergamot, Lemon, Pink Pepper</span>
                </div>
                <div>
                  <span className="block text-muted-foreground mb-1">Base Notes</span>
                  <span className="font-medium">Cambodian Oud, Amber, Musk</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                <Link href="/shop/midnight-oud" className="flex-1">
                  <Button className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 text-sm tracking-widest font-semibold">
                    SHOP FULL SIZE - $145
                  </Button>
                </Link>
                <Button variant="outline" className="h-12 border-border" onClick={restartQuiz}>
                  <RefreshCcw className="h-4 w-4 mr-2" /> Retake Quiz
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
}
