import { Button } from "@/components/ui/button";

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="section-spacing bg-brand-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left" style={{ opacity: 0 }}>
            <p className="text-sm font-semibold text-brand-muted mb-4 uppercase tracking-wider">What we do</p>
            <h2 className="text-heading text-brand-black mb-6 font-display">
              We create growth architectures that turn expertise into revenue.
            </h2>
            <p className="text-body text-brand-muted mb-8">
              Strategy, sales, performance, and systems — engineered to convert attention into predictable clients.
            </p>
            <Button 
              asChild
              className="bg-brand-black text-brand-white hover:bg-brand-surface rounded-full px-8 transition-all duration-500 hover:scale-110 hover:shadow-xl"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
          
          <div className="relative flex items-center justify-center animate-slide-in-right" style={{ opacity: 0, animationDelay: "200ms" }}>
            <div className="relative w-56 h-56 animate-float-up">
              <div className="absolute inset-0 bg-brand-yellow/20 rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-4 border-brand-yellow/30 rounded-full animate-spin" style={{ animationDuration: "20s" }}></div>
                <div className="absolute w-28 h-28 border-4 border-brand-yellow/50 rounded-full animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}></div>
                <div className="absolute w-20 h-20 bg-brand-yellow rounded-full animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
