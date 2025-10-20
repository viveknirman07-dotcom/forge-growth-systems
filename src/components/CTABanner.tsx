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
      {/* Multiple animated glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-20 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, hsl(var(--brand-yellow)) 0%, transparent 70%)" }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-[35vw] h-[35vw] rounded-full blur-[100px] opacity-15 animate-pulse-glow"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--brand-yellow) / 0.6) 0%, transparent 70%)",
          animationDelay: "1.5s"
        }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12 animate-fade-in-up" style={{ opacity: 0 }}>
          <h2 className="text-heading text-brand-white mb-4 font-display">
            We're looking forward to meeting you
          </h2>
          <p className="text-body text-brand-muted mb-8">
            Start with a simple audit. No pitch — just clarity.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-scale-in"
            style={{ opacity: 0, animationDelay: "150ms" }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-brand-yellow text-brand-black hover:bg-brand-yellow-soft font-semibold px-8 rounded-[10px] transition-all duration-500 hover:scale-110 hover:shadow-2xl"
              style={{ boxShadow: "var(--shadow-yellow)" }}
            >
              <a href="mailto:bitwellforge@gmail.com?subject=Growth%20Audit%20Request">
                Start Your Growth Audit
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="glass text-brand-white hover:bg-white/20 rounded-[10px] transition-all duration-500 hover:scale-110"
            >
              <a href="https://www.instagram.com/bitwellforge/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="max-w-xl mx-auto space-y-4 animate-fade-in-up"
          style={{ opacity: 0, animationDelay: "300ms" }}
        >
          <div className="glass rounded-2xl p-6 space-y-4">
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-brand-white placeholder:text-brand-muted transition-all duration-300 focus:bg-white/10 focus:scale-105"
            />
            
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-brand-white placeholder:text-brand-muted transition-all duration-300 focus:bg-white/10 focus:scale-105"
            />
            
            <Input
              type="text"
              placeholder="Profession / Company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-white/5 border-white/10 text-brand-white placeholder:text-brand-muted transition-all duration-300 focus:bg-white/10 focus:scale-105"
            />
            
            <Textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-white/5 border-white/10 text-brand-white placeholder:text-brand-muted resize-none transition-all duration-300 focus:bg-white/10 focus:scale-105"
            />
            
            <Button 
              type="submit"
              className="w-full bg-brand-yellow text-brand-black hover:bg-brand-yellow-soft font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTABanner;
