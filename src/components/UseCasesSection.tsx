
import { Building, User2, Stethoscope, GraduationCap, BarChart, HelpingHand, Plane } from "lucide-react";

const useCases = [
  {
    icon: <User2 className="h-10 w-10 text-primary" />,
    title: "Human Resources",
    description: "Streamline employee onboarding, answer FAQs, and assist with administrative tasks around the clock."
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: "Healthcare",
    description: "Provide patient information, schedule appointments, and offer preliminary health guidance."
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Education",
    description: "Deliver personalized learning experiences, answer student questions, and support administrative staff."
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Finance",
    description: "Assist with account inquiries, explain financial products, and provide real-time market information."
  },
  {
    icon: <HelpingHand className="h-10 w-10 text-primary" />,
    title: "Customer Service",
    description: "Handle customer inquiries, troubleshoot issues, and provide product information continuously."
  },
  {
    icon: <Plane className="h-10 w-10 text-primary" />,
    title: "Travel & Logistics",
    description: "Offer travel information, track shipments, and provide real-time updates on schedules and delays."
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming <span className="gradient-text">Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI avatars provide tailored solutions across multiple sectors, enhancing efficiency and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover:border-primary/30 transition-colors hover-float"
            >
              <div className="mb-5 text-primary">{useCase.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <Building className="h-12 w-12 text-primary" />
              <div>
                <h3 className="text-2xl font-semibold">Enterprise Solutions</h3>
                <p className="text-muted-foreground">Custom AI avatars tailored to your specific business needs</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="https://niloai.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
