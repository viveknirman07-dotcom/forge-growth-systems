import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const pillars = [
    {
      title: "Strategy and Architecture",
      body: "Positioning, offer structure and system roadmaps that reduce randomness and increase repeatability.",
    },
    {
      title: "Performance Marketing",
      body: "Paid acquisition, creative direction and measurement designed for steady, high quality pipeline.",
    },
    {
      title: "Outbound and Automation",
      body: "Account lists, messaging, sequences and CRM automation that lift deal velocity with fewer moving parts.",
    },
  ];

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
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-narrow text-center">
          <h1 className="text-display mb-6 fade-in">
            We engineer momentum systems that compound attention into meaningful outcomes.
          </h1>
          <p className="text-body-l text-muted-foreground mb-12 max-w-2xl mx-auto">
            Growth systems, not noise. Strategy, performance marketing, intelligent outbound and automation that work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="hover-lift">
              <Link to="/services">
                View services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover-lift">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-standard">
          <h2 className="text-h2 text-center mb-16">What we do</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-h3 mb-4">{pillar.title}</h3>
                <p className="text-body-m text-muted-foreground">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="section-spacing">
        <div className="container-standard">
          <h2 className="text-h2 text-center mb-16">Selected testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-border rounded-xl p-6 hover-lift"
              >
                <p className="text-body-m mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="text-caption font-medium">{testimonial.author}</p>
                  <p className="text-micro text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="hover-lift">
              <Link to="/testimonials">
                See all testimonials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-narrow text-center">
          <h2 className="text-h2 mb-8">Ready for calm, compounding growth</h2>
          <Button asChild size="lg" className="hover-lift">
            <Link to="/contact">
              Start a conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
