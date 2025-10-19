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
    <section id="testimonials" className="section-spacing bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Premium decorative background elements */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-brand-coral/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-brand-yellow/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-brand-coral mb-4 tracking-wider uppercase">Testimonials</p>
          <h2 className="text-heading text-brand-black mb-6 font-bold">Client words</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative min-h-[280px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center px-8 transition-all duration-700 ${
                index === activeIndex 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-8 scale-95 pointer-events-none"
              }`}
            >
              <blockquote className="text-subheading text-brand-black mb-8 italic font-medium leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-brand-gray font-semibold text-lg">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === activeIndex 
                  ? "bg-brand-coral w-10 shadow-lg" 
                  : "bg-brand-black/20 hover:bg-brand-black/40 w-2.5"
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
