
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { DarkModeToggle } from "./DarkModeToggle";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">TradeMentor</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="text-foreground hover:text-primary transition-colors">Explore</Link>
            <Link to="/community" className="text-foreground hover:text-primary transition-colors">Community</Link>
            <Link to="/trading-journal" className="text-foreground hover:text-primary transition-colors">Journal</Link>
            <Link to="/referral" className="text-foreground hover:text-primary transition-colors">Referral</Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link>
            <DarkModeToggle />
            <Button variant="outline" className="mr-2">Login</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/explore" className="text-foreground hover:text-primary">Explore</Link>
              <Link to="/community" className="text-foreground hover:text-primary">Community</Link>
              <Link to="/trading-journal" className="text-foreground hover:text-primary">Journal</Link>
              <Link to="/referral" className="text-foreground hover:text-primary">Referral</Link>
              <Link to="/faq" className="text-foreground hover:text-primary">FAQ</Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Login</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
