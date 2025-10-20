import { Button } from "@/components/ui/button";

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="section-spacing bg-brand-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-brand-muted mb-4 uppercase tracking-wider">What we do</p>
            <h2 className="text-heading text-brand-black mb-6">
              We create growth architectures that turn expertise into revenue.
            </h2>
            <p className="text-body text-brand-muted mb-8">
              Strategy, sales, performance, and systems — engineered to convert attention into predictable clients.
            </p>
            <Button 
              asChild
              className="bg-brand-black text-brand-white hover:bg-brand-surface rounded-full px-8"
            >
              <a href="#services">Our Services</a>
            </Button>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="relative w-48 h-48 animate-float">
              <div className="absolute inset-0 bg-brand-yellow/20 rounded-full blur-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-brand-yellow/30 rounded-full"></div>
                <div className="absolute w-24 h-24 border-4 border-brand-yellow/50 rounded-full"></div>
                <div className="absolute w-16 h-16 bg-brand-yellow rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
