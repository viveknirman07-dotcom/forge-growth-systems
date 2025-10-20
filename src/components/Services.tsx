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
    <section id="services" className="section-spacing bg-brand-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0V0zm10 10v80h80V10H10z' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E\")",
          backgroundSize: "100px 100px"
        }}></div>
      </div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full blur-[100px] opacity-15 animate-pulse-glow" 
        style={{ background: "radial-gradient(circle, hsl(var(--brand-yellow)) 0%, transparent 70%)" }}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up" style={{ opacity: 0 }}>
          <h2 className="text-heading text-brand-white mb-4 font-display">Our expertise</h2>
          <p className="text-body text-brand-muted">Minimal cards. Crisp copy. Measurable outputs.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover glass rounded-[14px] p-6 group transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 80}ms`,
                opacity: 0,
                animation: "fadeInUp 520ms cubic-bezier(0.25, 1, 0.5, 1) forwards"
              }}
            >
              <div className="absolute inset-0 rounded-[14px] bg-gradient-to-br from-brand-yellow/0 to-brand-yellow/0 group-hover:from-brand-yellow/5 group-hover:to-brand-yellow/10 transition-all duration-500"></div>
              <h3 className="text-xl font-semibold text-brand-white mb-3 relative z-10 font-display group-hover:text-brand-yellow transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed relative z-10">
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
