import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BitwellForge transformed our approach to client acquisition with systems that actually work.",
      author: "Sarah Chen",
      role: "Founder, TechConsult",
    },
    {
      quote: "Strategic clarity without the complexity. Their frameworks delivered results in weeks, not months.",
      author: "Marcus Williams",
      role: "CEO, Growth Partners",
    },
    {
      quote: "Finally, a growth partner that speaks our language and delivers measurable outcomes.",
      author: "Jessica Moore",
      role: "Director, Scale Ventures",
    },
    {
      quote: "Working with BitwellForge eliminated guesswork. We now have predictable pipeline and clear ROI.",
      author: "David Park",
      role: "VP Marketing, Innovate Labs",
    },
    {
      quote: "Their outbound systems cut our sales cycle in half while improving deal quality.",
      author: "Rachel Torres",
      role: "Founder, Enterprise Solutions",
    },
    {
      quote: "Calm, professional, effective. The kind of partner you want when scaling matters.",
      author: "James Anderson",
      role: "CEO, Digital Ventures",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="section-spacing">
        <div className="container-standard">
          <h1 className="text-display mb-6">Testimonials</h1>
          <p className="text-body-l text-muted-foreground mb-20 max-w-2xl">
            What our clients say about working with BitwellForge.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-border rounded-xl p-8 hover-lift"
              >
                <p className="text-body-l mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="text-caption font-medium">{testimonial.author}</p>
                  <p className="text-micro text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonials;
