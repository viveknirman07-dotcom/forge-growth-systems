import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="section-spacing">
        <div className="container-narrow">
          <h1 className="text-display mb-12">About</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-body-l text-foreground mb-6 leading-relaxed">
              BitwellForge is a growth systems firm helping modern brands and
              professionals build calm, compounding business momentum without
              noise, complexity or dependency on trends.
            </p>

            <p className="text-body-l text-foreground mb-6 leading-relaxed">
              We engineer inbound and outbound client acquisition systems that
              generate consistent, qualified, high-value demand. Our approach
              blends strategy, performance marketing, intelligent outbound and
              automation to create scalable and reliable growth infrastructure.
            </p>

            <p className="text-body-l text-foreground mb-6 leading-relaxed">
              No pressure. No overwhelm. No guesswork. Only systems designed for
              clarity, control and long-term sustainability.
            </p>

            <p className="text-body-l text-foreground mb-12 leading-relaxed">
              If you value intentional growth over short-term tactics, we quietly
              build the foundation that makes it possible.
            </p>

            <div className="mt-12">
              <Button asChild size="lg" className="hover-lift">
                <Link to="/contact">
                  Start a conversation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
