import { useState, useEffect } from "react";

const testimonials = [
  { 
    quote: "Bitwellforge brought clarity and precision to our scaling.", 
    author: "Consultant — Early-stage Startup" 
  },
  { 
    quote: "Our systems finally feel built, not patched.", 
    author: "Founder — B2B Services" 
  },
  { 
    quote: "Every motion and detail felt intentional.", 
    author: "Coach — Education" 
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section-spacing bg-brand-black relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-10 animate-pulse-glow"
        style={{ background: "radial-gradient(circle, hsl(var(--brand-yellow)) 0%, transparent 70%)" }}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up" style={{ opacity: 0 }}>
          <h2 className="text-heading text-brand-white mb-4 font-display">Client words</h2>
        </div>
        
        <div className="max-w-3xl mx-auto relative min-h-[250px] flex items-center justify-center">
          {/* Glass card background */}
          <div className="absolute inset-0 glass rounded-3xl"></div>
          
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center p-8 transition-all duration-700 ${
                index === activeIndex 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-8 scale-95 pointer-events-none"
              }`}
            >
              <blockquote className="text-subheading text-brand-white mb-6 italic font-display">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-brand-yellow font-medium">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 hover:scale-125 ${
                index === activeIndex 
                  ? "bg-brand-yellow w-12 shadow-lg shadow-brand-yellow/50" 
                  : "bg-white/20 hover:bg-white/40 w-2"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
