
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-6">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">Oops! The page you're looking for doesn't exist.</p>
        
        <Button asChild size="lg" className="rounded-full">
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
