import { Button } from "@/components/ui/button";

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="section-spacing bg-brand-white relative overflow-hidden">
      {/* Decorative geometric shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border-4 border-brand-coral/10"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-mint/20 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-brand-gray mb-4 uppercase tracking-wider">What we do</p>
            <h2 className="text-heading text-brand-black mb-6">
              We create growth architectures that turn expertise into revenue.
            </h2>
            <p className="text-body text-brand-gray mb-8">
              Strategy, sales, performance, and systems — engineered to convert attention into predictable clients.
            </p>
            <Button 
              asChild
              className="bg-brand-black text-brand-white hover:bg-brand-black/90 rounded-full px-8 shadow-lg"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
          
          <div className="relative flex items-center justify-center">
            {/* Playful geometric composition inspired by Studio Graphene */}
            <div className="relative w-80 h-80">
              {/* Large yellow circle */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-56 h-56 bg-brand-yellow rounded-full opacity-80 animate-float"></div>
              
              {/* Coral starburst shape */}
              <div className="absolute right-0 top-0 w-48 h-48 bg-brand-coral rounded-full opacity-70 animate-float" 
                   style={{ 
                     clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                     animationDelay: "0.5s"
                   }}>
              </div>
              
              {/* Mint accent circle */}
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-brand-mint rounded-full opacity-60 animate-float" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
