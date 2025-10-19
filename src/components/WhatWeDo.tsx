import { Button } from "@/components/ui/button";

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="section-spacing bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
      {/* Premium decorative shapes */}
      <div className="absolute top-20 right-20 w-[450px] h-[450px] bg-brand-coral/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-[450px] h-[450px] bg-brand-mint/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <p className="text-sm font-bold text-brand-coral mb-4 tracking-wider uppercase">What we do</p>
            <h2 className="text-heading text-brand-black mb-8 leading-tight font-bold">
              We create growth architectures that turn expertise into revenue.
            </h2>
            <p className="text-body text-brand-gray mb-10 leading-relaxed text-lg">
              Strategy, sales, performance, and systems — engineered to convert attention into predictable clients.
            </p>
            <Button 
              asChild
              className="bg-brand-black text-brand-white hover:bg-brand-black/90 rounded-full px-10 py-7 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl font-semibold text-base"
            >
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
          
          {/* Premium graphic composition */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Large ambient glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-coral/25 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-mint/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }}></div>
            
            {/* Geometric shapes with premium styling */}
            <div className="absolute top-24 left-24 w-40 h-40 border-3 border-brand-orange/20 rounded-full shadow-lg"></div>
            <div className="absolute bottom-24 right-24 w-48 h-48">
              <div className="w-full h-full bg-gradient-to-br from-brand-coral/15 to-brand-orange/10 rounded-3xl rotate-12 shadow-xl"></div>
            </div>
            
            {/* Enhanced starburst */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-32 h-32">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1.5 h-16 bg-gradient-to-t from-brand-yellow/70 to-brand-yellow/20"
                    style={{
                      transform: `rotate(${i * 22.5}deg) translateY(-50%)`,
                      transformOrigin: "0 0"
                    }}
                  ></div>
                ))}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-orange rounded-full shadow-xl"></div>
              </div>
            </div>
            
            {/* Additional decorative circles */}
            <div className="absolute top-16 right-32 w-20 h-20 bg-brand-blue/15 rounded-full"></div>
            <div className="absolute bottom-32 left-16 w-16 h-16 border-2 border-brand-mint/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
