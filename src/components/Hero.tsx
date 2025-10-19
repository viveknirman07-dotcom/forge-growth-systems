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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50/30">
      {/* Premium geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large ambient glows */}
        <div className="absolute top-20 right-[10%] w-[600px] h-[600px] bg-brand-yellow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-[5%] w-[700px] h-[700px] bg-brand-coral/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-[30%] w-[500px] h-[500px] bg-brand-mint/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Decorative geometric shapes */}
        <div className="absolute top-32 left-[15%] w-40 h-40 border-2 border-brand-coral/20 rounded-full"></div>
        <div className="absolute bottom-32 right-[12%] w-32 h-32 bg-brand-orange/10 rotate-45 rounded-2xl"></div>
        <div className="absolute top-1/3 right-[8%] w-24 h-24 border-2 border-brand-mint/30 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center pt-32 px-6">
        <img
          ref={logoRef}
          src={logo}
          alt="Bitwellforge Logo"
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-12 cursor-pointer opacity-0"
          onClick={handleLogoPunch}
          style={{ filter: "drop-shadow(0 4px 24px rgba(255, 107, 90, 0.25))" }}
        />
        
        <h1 
          className="text-display text-brand-black mb-8 animate-fade-in-up font-bold tracking-tight"
          style={{ 
            animationDelay: "100ms",
            opacity: 0,
            animationFillMode: "forwards"
          }}
        >
          We forge growth systems.
        </h1>
        
        <p 
          className="text-subheading text-brand-gray mb-16 max-w-3xl mx-auto animate-fade-in-up leading-relaxed"
          style={{ 
            animationDelay: "200ms",
            opacity: 0,
            animationFillMode: "forwards"
          }}
        >
          For professionals, entrepreneurs, and brands who demand clarity, performance, and scale.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up"
          style={{ 
            animationDelay: "300ms",
            opacity: 0,
            animationFillMode: "forwards"
          }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-brand-black text-brand-white hover:bg-brand-black/90 font-semibold px-12 py-7 text-base rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-xl"
          >
            <a href="mailto:bitwellforge@gmail.com?subject=Growth%20Audit%20Request">
              Start Your Growth Audit
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="bg-white/50 backdrop-blur-sm text-brand-black border-2 border-brand-black/15 hover:bg-white hover:border-brand-black/30 px-12 py-7 text-base rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>

        <p 
          className="text-sm text-brand-gray mt-12 animate-fade-in-up font-medium"
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
