const steps = [
  { 
    title: "Discover", 
    desc: "Audit goals, data, and constraints. Align on outcomes and KPIs." 
  },
  { 
    title: "Design", 
    desc: "Architect offers, funnels, channels, and automations into a clear blueprint." 
  },
  { 
    title: "Build & Optimize", 
    desc: "Launch, measure, and refine until performance stabilizes and scales." 
  }
];

const Approach = () => {
  return (
    <section id="approach" className="section-spacing-compact bg-brand-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] bg-brand-yellow/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up" style={{ opacity: 0 }}>
          <h2 className="text-heading text-brand-black mb-4 font-display">Discovery. Design. Build.</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline connector */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-brand-yellow/10 via-brand-yellow/30 to-brand-yellow/10 rounded-full overflow-hidden">
            <div 
              className="h-full w-1/3 bg-brand-yellow/60 animate-shimmer" 
              style={{ 
                backgroundImage: "linear-gradient(90deg, transparent, rgba(255, 215, 102, 0.4), transparent)",
                backgroundSize: "200% 100%"
              }}
            ></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative text-center animate-rotate-in"
                style={{ 
                  opacity: 0,
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Enhanced Number circle with glow */}
                <div className="w-16 h-16 rounded-full bg-brand-yellow text-brand-black font-bold text-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg transition-all duration-500 hover:scale-125 hover:rotate-12 hover:shadow-2xl font-display">
                  <div className="absolute inset-0 rounded-full bg-brand-yellow/40 blur-lg animate-pulse-glow"></div>
                  <span className="relative z-10">{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-brand-black mb-3 font-display">
                  {step.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
