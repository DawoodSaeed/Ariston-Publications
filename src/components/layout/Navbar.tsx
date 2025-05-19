import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Search, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/journals", label: "Journals" },
    { path: "/books", label: "Books" },
    { path: "/news", label: "News and Events" },
    { path: "/services", label: "Our Services" },
    { path: "/contactUs", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center group">
          <img
            src="/images/logo.svg"
            alt="Ariston Publications"
            className="h-12 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium relative py-2 transition-colors duration-200",
                "hover:text-blue-800",
                location.pathname === item.path
                  ? "text-blue-800"
                  : "text-gray-600"
              )}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 transform origin-left transition-transform duration-300" />
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-blue-50 hover:text-blue-800 transition-colors duration-200"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-blue-50 hover:text-blue-800 transition-colors duration-200"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-800 text-[10px] font-medium text-white flex items-center justify-center animate-pulse">
              0
            </span>
          </Button>
          <Link to="/login">
            <Button
              variant="outline"
              className="flex items-center gap-2 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-800 transition-colors duration-200"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </Link>
          <Link to="/contactUs">
            <Button
              variant="default"
              className="bg-blue-800 hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
