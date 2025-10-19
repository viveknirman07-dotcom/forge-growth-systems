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
  const colors = ['brand-coral', 'brand-yellow', 'brand-mint'];
  
  return (
    <section id="approach" className="section-spacing-compact bg-brand-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-brand-coral/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-heading text-brand-black mb-4">Discovery. Design. Build.</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-brand-coral via-brand-yellow to-brand-mint rounded-full"></div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Number circle with color accent */}
                <div className={`w-16 h-16 rounded-full bg-${colors[index]} text-brand-white font-bold text-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold text-brand-black mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">
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
