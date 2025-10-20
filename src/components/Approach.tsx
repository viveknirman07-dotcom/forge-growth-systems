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
    <section id="approach" className="section-spacing-compact bg-brand-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading text-brand-black mb-4">Discovery. Design. Build.</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-brand-yellow/30"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Number circle */}
                <div className="w-16 h-16 rounded-full bg-brand-yellow text-brand-black font-bold text-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold text-brand-black mb-3">
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
