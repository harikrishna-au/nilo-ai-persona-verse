
import { MessageSquare, Zap, LucideGlobe, Clock, Database, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Voice & Text Understanding",
    description: "Seamlessly processes and understands both voice and text inputs for natural interactions."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Contextual Intelligence",
    description: "Responds with relevant information by understanding the context of conversations."
  },
  {
    icon: <Database className="h-6 w-6 text-primary" />,
    title: "Task Execution",
    description: "Performs tasks through API interactions, automating processes and workflows."
  },
  {
    icon: <LucideGlobe className="h-6 w-6 text-primary" />,
    title: "Multilingual Support",
    description: "Communicates effectively in multiple languages, breaking down international barriers."
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "24/7 Availability",
    description: "Always available to provide support, information, and assistance when needed."
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
    title: "Personalized Interactions",
    description: "Tailors responses based on user preferences, history, and specific requirements."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">Intelligent Interactions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI avatars combine advanced technologies to deliver seamless, efficient, and personalized experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50 hover-float"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
