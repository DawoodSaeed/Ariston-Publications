import { Link } from "react-router-dom";
import { ShoppingCart, Search, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.svg"
            alt="Ariston Publications"
            className="h-12"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium">
            About Us
          </Link>
          <Link to="/journals" className="text-sm font-medium">
            Journals
          </Link>
          <Link to="/books" className="text-sm font-medium">
            Books
          </Link>
          <Link to="/news" className="text-sm font-medium">
            News and Events
          </Link>
          <Link to="/services" className="text-sm font-medium">
            Our Services
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 text-[10px] font-medium text-white flex items-center justify-center">
              0
            </span>
          </Button>
          <Link to="/login">
            <Button variant="outline" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </Link>
          <Button variant="default" className="bg-blue-800 hover:bg-blue-700">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
