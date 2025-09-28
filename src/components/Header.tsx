import { User, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isTeachersOpen, setIsTeachersOpen] = useState(false);

  return (
    <header className="relative z-20 px-4 py-6">
      <div className="container mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              educhain
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsTeachersOpen(!isTeachersOpen)}
              >
                <User className="h-4 w-4" />
                For Teachers
                <ChevronDown className="h-3 w-3" />
              </button>
              {isTeachersOpen && (
                <div className="absolute top-full mt-2 left-0 w-48 bg-card border-2 border-border rounded-sm shadow-brutal p-2">
                  <a href="#" className="block px-3 py-2 hover:bg-muted rounded-sm">Lesson Plans</a>
                  <a href="#" className="block px-3 py-2 hover:bg-muted rounded-sm">Quiz Generator</a>
                  <a href="#" className="block px-3 py-2 hover:bg-muted rounded-sm">Resources</a>
                </div>
              )}
            </div>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="/why-pteb" className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </div>
          
          {/* CTA and User */}
          <div className="flex items-center gap-4">
            <Button variant="brutal" size="default">
              Try it Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="h-10 w-10 rounded-full bg-muted border-2 border-border flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}