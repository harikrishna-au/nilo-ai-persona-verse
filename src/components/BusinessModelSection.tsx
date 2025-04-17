
import { Lightbulb, Target, Coins, Users2 } from "lucide-react";

const BusinessModelSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Business Model</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Coins className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Revenue Streams</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>One-time Setup Fee: Custom AI avatar development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>Subscription Model: Monthly/Annual maintenance and support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>Licensing Fees: Avatars licensed for multiple departments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>Pay-Per-Use: Charges based on avatar interactions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Target Audience</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>Enterprise Clients: HR, healthcare, finance, customer service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>SMEs & Startups: Affordable, customizable virtual assistants</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>Developers & Innovators: Independent creators needing specialized avatars</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Future Applications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Multilingual Political Avatars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Smart Airport Avatars Replacing Kiosks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Next-Gen AI Teachers for Global Classrooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Virtual Hiring Officers & Onboarding Reps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Retail & Banking AI Assistants</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users2 className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Value Proposition</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Personalized, 24/7 AI-powered avatars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Cost-effective, scalable solutions for various industries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Enhanced productivity and customer experience</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Ethical Considerations</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">Privacy</p>
                  <p className="text-sm text-muted-foreground">No permanent data storage ensures user privacy.</p>
                </div>
                <div>
                  <p className="font-medium">Ethics</p>
                  <p className="text-sm text-muted-foreground">Transparent design avoids hidden data collection.</p>
                </div>
                <p className="text-sm text-muted-foreground mt-3">Our design values transparency and inclusivity. We aim for broad market reach and high ethical standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
