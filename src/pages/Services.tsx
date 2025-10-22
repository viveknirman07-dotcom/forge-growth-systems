import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      name: "Business Consulting and Growth Strategy",
      blurb: "Custom-built blueprints for scale that align market, model and message.",
      bullets: [
        "Growth roadmaps",
        "Offer and pricing design",
        "Go-to-market architecture",
        "Measurement planning",
      ],
    },
    {
      name: "High-Ticket Sales Consulting",
      blurb: "Systems that consistently attract and convert premium clients without spray-and-pray.",
      bullets: [
        "Pipeline design",
        "Sales messaging and scripts",
        "Qualification frameworks",
        "Enablement and review",
      ],
    },
    {
      name: "Performance Marketing",
      blurb: "Revenue-maximizing campaigns with clear attribution and creative that earns attention.",
      bullets: [
        "Paid media strategy",
        "Creative direction",
        "A/B testing and experimentation",
        "Attribution and reporting",
      ],
    },
    {
      name: "B2B Lead Generation",
      blurb: "Targeted funnels that reach real decision-makers with respect and precision.",
      bullets: [
        "ICP and account lists",
        "Offer hooks and angles",
        "Landing experiences",
        "Calendaring and follow-up",
      ],
    },
    {
      name: "LinkedIn Outreach and Positioning",
      blurb: "Authority-led strategies that convert conversations into clients.",
      bullets: [
        "Profile architecture",
        "Content and POV system",
        "Warm and cold outreach",
        "Relationship pipelines",
      ],
    },
    {
      name: "SEO and Digital Visibility",
      blurb: "Frameworks to dominate organic search and expand discoverability.",
      bullets: [
        "Technical SEO",
        "Content architecture",
        "On-page and internal links",
        "Search analytics",
      ],
    },
    {
      name: "Social Media Growth",
      blurb: "Data-backed methods to amplify influence and brand reach without noise.",
      bullets: [
        "Channel strategy",
        "Content system",
        "Creative templates",
        "Insights and cadence",
      ],
    },
    {
      name: "Digital Product and Course Consulting",
      blurb: "Guide experts to package knowledge and monetize at scale with clean learning flows.",
      bullets: [
        "Curriculum design",
        "Platform selection",
        "Pricing and funnels",
        "Launch and iteration",
      ],
    },
    {
      name: "PR and Branding Solutions",
      blurb: "Establish credibility, thought leadership and market authority with intent.",
      bullets: [
        "Narrative and messaging",
        "Media targets and outreach",
        "Founder's brand system",
        "Asset kit and guidelines",
      ],
    },
  ];

  const faq = [
    {
      q: "Do you work with early stage teams?",
      a: "Yes, if there is a real offer and a responsible owner. We prefer focused operators over vanity metrics.",
    },
    {
      q: "How do engagements start?",
      a: "We begin with a short clarity call, define outcomes and then propose the smallest useful system to deliver them.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="section-spacing">
        <div className="container-narrow">
          <h1 className="text-display mb-6">Services</h1>
          <p className="text-body-l text-muted-foreground mb-20">
            Systems that reduce randomness and increase repeatability.
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-border rounded-xl p-6 hover-lift"
              >
                <h3 className="text-h4 mb-3">{service.name}</h3>
                <p className="text-body-m text-muted-foreground mb-4">
                  {service.blurb}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="text-caption text-muted-foreground flex items-start">
                      <span className="mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-h2 mb-8">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
