
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">TradeMentor</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="text-gray-700 hover:text-blue-600 transition-colors">Explore</Link>
            <Link to="/community" className="text-gray-700 hover:text-blue-600 transition-colors">Community</Link>
            <Link to="/trading-journal" className="text-gray-700 hover:text-blue-600 transition-colors">Journal</Link>
            <Link to="/referral" className="text-gray-700 hover:text-blue-600 transition-colors">Referral</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</Link>
            <Button variant="outline" className="mr-2">Login</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/explore" className="text-gray-700 hover:text-blue-600">Explore</Link>
              <Link to="/community" className="text-gray-700 hover:text-blue-600">Community</Link>
              <Link to="/trading-journal" className="text-gray-700 hover:text-blue-600">Journal</Link>
              <Link to="/referral" className="text-gray-700 hover:text-blue-600">Referral</Link>
              <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
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
