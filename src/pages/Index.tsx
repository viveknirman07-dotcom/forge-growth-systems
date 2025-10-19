import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatWeDo />
      <Services />
      <Approach />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
