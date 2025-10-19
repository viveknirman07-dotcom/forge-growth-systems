import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CTABanner = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:bitwellforge@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Thanks!",
      description: "We'll reply within 24 hours.",
    });
  };

  return (
    <section id="contact" className="section-spacing bg-brand-black relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      {/* Rotating circular badge (inspired by Studio Graphene) */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="relative w-32 h-32 animate-spin" style={{ animationDuration: "15s" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text fontSize="9" fill="hsl(var(--brand-coral))">
              <textPath href="#circlePath" startOffset="0%">
                • contact us • bitwellforge@gmail.com •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-brand-coral rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-heading text-brand-white mb-4">
            We're looking forward to meeting you
          </h2>
          <p className="text-body text-brand-gray mb-8">
            Start with a simple audit. No pitch — just clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild
              size="lg"
              className="bg-brand-coral text-brand-white hover:bg-brand-coral/90 font-semibold px-10 rounded-full shadow-xl"
            >
              <a href="mailto:bitwellforge@gmail.com?subject=Growth%20Audit%20Request">
                Start Your Growth Audit
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-brand-white border-white/20 hover:bg-white/10 px-10 rounded-full"
            >
              <a href="https://www.instagram.com/bitwellforge/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          <Input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-white/5 border-white/10 text-brand-white placeholder:text-brand-gray rounded-xl"
          />
          
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-white/5 border-white/10 text-brand-white placeholder:text-brand-gray rounded-xl"
          />
          
          <Input
            type="text"
            placeholder="Profession / Company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="bg-white/5 border-white/10 text-brand-white placeholder:text-brand-gray rounded-xl"
          />
          
          <Textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={5}
            className="bg-white/5 border-white/10 text-brand-white placeholder:text-brand-gray resize-none rounded-xl"
          />
          
          <Button 
            type="submit"
            className="w-full bg-brand-coral text-brand-white hover:bg-brand-coral/90 font-semibold rounded-full shadow-lg py-6"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CTABanner;
