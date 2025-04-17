
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(151,112,74,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_at_bottom_left,rgba(92,90,81,0.12),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-amber-200/20 px-3 py-1 text-sm">
              <span className="mr-1 h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
              <span>Intelligent AI Avatars for Businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Next-Gen AI Avatar <br className="hidden md:block" />
              For 24/7 Personalized Support
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Nilo AI delivers real-time, multilingual, personalized interactions through intelligent avatars — reducing costs and boosting productivity across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="rounded-full" size="lg">
                <a 
                  href="https://niloai.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Prototype <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" size="lg">
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/205d65b4-a02a-44c7-9b43-b8bbd36608b9.png" 
                  alt="Nilo AI Avatar" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute -left-4 -right-4 -top-4 -bottom-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-amber-700/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
