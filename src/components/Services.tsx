const services = [
  { 
    title: "Business Consulting & Growth Strategy", 
    desc: "Blueprints, GTM, pricing, and operating models engineered for scale." 
  },
  { 
    title: "High-Ticket Sales Systems", 
    desc: "Premium offer design, funnels, and closing enablement for predictable revenue." 
  },
  { 
    title: "Performance Marketing", 
    desc: "Meta/Google/YouTube ad ecosystems focused on revenue, not vanity metrics." 
  },
  { 
    title: "B2B Lead Generation", 
    desc: "Authority-led outreach and automation that reach real decision-makers." 
  },
  { 
    title: "LinkedIn Authority & Outreach", 
    desc: "Positioning, content, and DM systems that convert conversations into clients." 
  },
  { 
    title: "SEO & Digital Visibility", 
    desc: "Technical & content frameworks that make you findable and credible." 
  },
  { 
    title: "Digital Products & Courses", 
    desc: "Turn expertise into scalable programs with clean launches and automation." 
  },
  { 
    title: "Systems & Automation", 
    desc: "CRM setup (HubSpot/GoHighLevel), workflows, and ops that scale quietly." 
  }
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-brand-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading text-brand-white mb-4">Our expertise</h2>
          <p className="text-body text-brand-muted">Minimal cards. Crisp copy. Measurable outputs.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover bg-white/[0.03] border border-white/[0.08] rounded-[14px] p-6"
              style={{
                animationDelay: `${index * 80}ms`,
                opacity: 0,
                animation: "fadeInUp 520ms cubic-bezier(0.25, 1, 0.5, 1) forwards"
              }}
            >
              <h3 className="text-xl font-semibold text-brand-white mb-3">
                {service.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
