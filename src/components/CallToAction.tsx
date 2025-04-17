
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-500/10 via-secondary/10 to-amber-700/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience the Future of <span className="gradient-text">AI Interaction</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Try our prototype today and see how Nilo AI avatars can transform your business operations and customer experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full text-lg px-8 gradient-bg">
              <a 
                href="https://niloai.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Prototype <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-lg border-amber-700/20">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            No sign-up required. Experience our AI avatar technology instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
