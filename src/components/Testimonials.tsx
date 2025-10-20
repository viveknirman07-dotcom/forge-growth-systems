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
    <section id="testimonials" className="section-spacing bg-brand-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading text-brand-white mb-4">Client words</h2>
        </div>
        
        <div className="max-w-3xl mx-auto relative min-h-[200px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${
                index === activeIndex 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <blockquote className="text-subheading text-brand-white mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-brand-muted font-medium">
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-brand-yellow w-8" 
                  : "bg-white/20 hover:bg-white/40"
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
