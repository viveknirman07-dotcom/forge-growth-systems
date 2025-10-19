import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Hero = () => {
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Entrance animation
    if (logoRef.current) {
      logoRef.current.style.animation = "scaleIn 550ms cubic-bezier(0.25, 1, 0.5, 1) forwards, spin 700ms cubic-bezier(0.25, 1, 0.5, 1) 120ms";
    }
  }, []);

  const handleLogoPunch = () => {
    if (logoRef.current) {
      logoRef.current.style.animation = "none";
      setTimeout(() => {
        if (logoRef.current) {
          logoRef.current.style.animation = "spin 700ms cubic-bezier(0.25, 1, 0.5, 1)";
        }
      }, 10);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-white">
      {/* Playful geometric shapes */}
      <div className="absolute top-20 right-[15%] w-64 h-64 bg-brand-yellow rounded-full opacity-60 blur-3xl animate-float"></div>
      <div className="absolute bottom-32 left-[10%] w-80 h-80 bg-brand-coral/40 rounded-full opacity-50 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-[25%] w-48 h-48 bg-brand-mint/50 rounded-full opacity-40 blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-40 left-[20%] w-32 h-32 border-4 border-brand-coral/30 rounded-full"></div>
      <div className="absolute bottom-40 right-[15%] w-24 h-24 bg-brand-orange/20" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-20">
        <img
          ref={logoRef}
          src={logo}
          alt="Bitwellforge Logo"
          className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-8 cursor-pointer opacity-0"
          onClick={handleLogoPunch}
          style={{ filter: "drop-shadow(0 0 20px rgba(255, 215, 102, 0.4))" }}
        />
        
        <h1 
          className="text-display text-brand-black mb-6 animate-fade-in-up"
          style={{ 
            animationDelay: "100ms",
            opacity: 0,
            animationFillMode: "forwards"
          }}
        >
          We forge growth systems.
        </h1>
        
        <p 
          className="text-subheading text-brand-gray mb-12 max-w-3xl mx-auto animate-fade-in-up"
          style={{ 
            animationDelay: "200ms",
            opacity: 0,
            animationFillMode: "forwards"
          }}
        >
          For professionals, entrepreneurs, and brands who demand clarity, performance, and scale.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ 
            animationDelay: "300ms",
            opacity: 0,
            animationFillMode: "forwards"
          }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-brand-black text-brand-white hover:bg-brand-black/90 font-semibold px-10 py-6 text-base rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            <a href="mailto:bitwellforge@gmail.com?subject=Growth%20Audit%20Request">
              Start Your Growth Audit
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent text-brand-black border-brand-black/20 hover:bg-brand-light px-10 py-6 text-base rounded-full transition-all duration-300"
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>

        <p 
          className="text-sm text-brand-gray mt-8 animate-fade-in-up"
          style={{ 
            animationDelay: "400ms",
            opacity: 0,
            animationFillMode: "forwards"
          }}
        >
          First 10 clients: priority onboarding + discounted pilot.
        </p>
      </div>
    </section>
  );
};

export default Hero;
