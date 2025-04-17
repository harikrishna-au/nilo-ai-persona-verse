
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b backdrop-blur-md bg-background/80 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                Nilo AI
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#use-cases" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Use Cases
            </a>
            <a href="#technology" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Technology
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              About
            </a>
          </div>
          
          <div className="flex items-center">
            <Button asChild className="rounded-full">
              <a 
                href="https://niloai.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium"
              >
                Try Prototype
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
