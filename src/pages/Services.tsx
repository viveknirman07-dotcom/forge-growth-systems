import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Services = () => {
  const services = [{
    name: "Business Consulting and Growth Strategy",
    blurb: "Custom-built blueprints for scale that align market, model and message.",
    bullets: ["Growth roadmaps", "Offer and pricing design", "Go-to-market architecture", "Measurement planning"]
  }, {
    name: "High-Ticket Sales Consulting",
    blurb: "Systems that consistently attract and convert premium clients without spray-and-pray.",
    bullets: ["Pipeline design", "Sales messaging and scripts", "Qualification frameworks", "Enablement and review"]
  }, {
    name: "Performance Marketing",
    blurb: "Revenue-maximizing campaigns with clear attribution and creative that earns attention.",
    bullets: ["Paid media strategy", "Creative direction", "A/B testing and experimentation", "Attribution and reporting"]
  }, {
    name: "B2B Lead Generation",
    blurb: "Targeted funnels that reach real decision-makers with respect and precision.",
    bullets: ["ICP and account lists", "Offer hooks and angles", "Landing experiences", "Calendaring and follow-up"]
  }, {
    name: "LinkedIn Outreach and Positioning",
    blurb: "Authority-led strategies that convert conversations into clients.",
    bullets: ["Profile architecture", "Content and POV system", "Warm and cold outreach", "Relationship pipelines"]
  }, {
    name: "SEO and Digital Visibility",
    blurb: "Frameworks to dominate organic search and expand discoverability.",
    bullets: ["Technical SEO", "Content architecture", "On-page and internal links", "Search analytics"]
  }, {
    name: "Social Media Growth",
    blurb: "Data-backed methods to amplify influence and brand reach without noise.",
    bullets: ["Channel strategy", "Content system", "Creative templates", "Insights and cadence"]
  }, {
    name: "Digital Product and Course Consulting",
    blurb: "Guide experts to package knowledge and monetize at scale with clean learning flows.",
    bullets: ["Curriculum design", "Platform selection", "Pricing and funnels", "Launch and iteration"]
  }, {
    name: "PR and Branding Solutions",
    blurb: "Establish credibility, thought leadership and market authority with intent.",
    bullets: ["Narrative and messaging", "Media targets and outreach", "Founder's brand system", "Asset kit and guidelines"]
  }];
  const faq = [{
    q: "Do you work with early stage teams?",
    a: "Yes, if there is a real offer and a responsible owner. We prefer focused operators over vanity metrics."
  }, {
    q: "How do engagements start?",
    a: "We begin with a short clarity call, define outcomes and then propose the smallest useful system to deliver them."
  }];
  return <div className="min-h-screen bg-background">
      <Header />

      <section className="section-spacing">
        <div className="container-narrow">
          <h1 className="text-display mb-6">Services</h1>
          <p className="text-h3 text-muted-foreground font-normal">
            Systems that reduce randomness and increase repeatability.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-narrow">
          <div className="space-y-12">
            {services.map((service, index) => <div key={index} className="border-t border-[hsl(var(--line-hair))] pt-12 first:border-t-0 first:pt-0">
                <h2 className="text-h3 mb-4">{service.name}</h2>
                <p className="text-body-l text-muted-foreground mb-6">{service.blurb}</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.bullets.map((bullet, bulletIndex) => <li key={bulletIndex} className="text-body-m text-muted-foreground flex items-start">
                      <span className="text-foreground mr-3">—</span>
                      {bullet}
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>

      <section className="section-spacing border-t border-[hsl(var(--line-hair))]">
        <div className="container-narrow bg-stone-950 rounded">
          <h2 className="text-h2 mb-12">Frequently asked ></h2>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border-[hsl(var(--line-hair))]">
                <AccordionTrigger className="text-h4 text-left hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-body-l text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Services;