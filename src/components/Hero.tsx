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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      </div>
      
      {/* Multiple Glowing Orbs */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38vw] h-[38vw] rounded-full blur-[120px] opacity-22 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, hsl(var(--brand-yellow)) 0%, transparent 70%)" }}
      ></div>
      <div 
        className="absolute top-2/3 left-1/4 w-[25vw] h-[25vw] rounded-full blur-[100px] opacity-15 animate-pulse-glow"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--brand-yellow) / 0.6) 0%, transparent 70%)",
          animationDelay: "1s"
        }}
      ></div>
      <div 
        className="absolute top-1/2 right-1/4 w-[20vw] h-[20vw] rounded-full blur-[90px] opacity-18 animate-pulse-glow"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--brand-yellow) / 0.5) 0%, transparent 70%)",
          animationDelay: "2s"
        }}
      ></div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-yellow rounded-full animate-float-up opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-brand-yellow rounded-full animate-float-up opacity-30" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-brand-yellow rounded-full animate-float-up opacity-50" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-brand-yellow rounded-full animate-float-up opacity-35" style={{ animationDelay: "3s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-brand-yellow rounded-full animate-float-up opacity-45" style={{ animationDelay: "1.5s" }}></div>
      </div>

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
          className="text-display text-brand-white mb-6 animate-fade-in-up font-display"
          style={{ 
            textShadow: "var(--shadow-text)",
            animationDelay: "100ms",
            opacity: 0,
            animationFillMode: "forwards"
          }}
        >
          Momentum systems that compound attention into outcomes.
        </h1>
        
        <p 
          className="text-subheading text-brand-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-up"
          style={{ 
            textShadow: "var(--shadow-text)",
            animationDelay: "200ms",
            opacity: 0,
            animationFillMode: "forwards"
          }}
        >
          Designed for professionals, entrepreneurs, and brands who operate with intention
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
            className="bg-brand-yellow text-brand-black hover:bg-brand-yellow-soft font-semibold px-8 py-6 text-base rounded-[10px] transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
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
            className="glass text-brand-white hover:bg-white/20 px-8 py-6 text-base rounded-[10px] transition-all duration-500 hover:scale-105"
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>

        <p 
          className="text-sm text-brand-muted mt-8 animate-fade-in-up"
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
