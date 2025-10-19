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
    <section id="approach" className="section-spacing bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Premium decorative background shapes */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-yellow/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-coral/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-bold text-brand-coral mb-4 tracking-wider uppercase">Our Process</p>
          <h2 className="text-heading text-brand-black mb-6 font-bold">Discovery. Design. Build.</h2>
          <p className="text-body text-brand-gray text-lg leading-relaxed">
            Our systematic process transforms insights into measurable results.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Premium timeline connector with gradient */}
          <div className="absolute top-16 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-coral via-brand-yellow to-brand-mint hidden md:block rounded-full shadow-sm"></div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Enhanced step number circle */}
                <div className={`w-32 h-32 mx-auto mb-8 rounded-full bg-${colors[index]} flex items-center justify-center relative z-10 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl`}>
                  <span className="text-4xl font-bold text-brand-white">{index + 1}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-brand-black mb-4 leading-tight">{step.title}</h3>
                <p className="text-brand-gray text-base leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
