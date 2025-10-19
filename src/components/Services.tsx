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
  const accentColors = [
    'brand-coral', 'brand-yellow', 'brand-mint', 
    'brand-orange', 'brand-blue', 'brand-coral',
    'brand-yellow', 'brand-mint'
  ];
  
  return (
    <section id="services" className="section-spacing bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
      {/* Premium decorative background elements */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-bold text-brand-coral mb-4 tracking-wider uppercase">Our expertise</p>
          <h2 className="text-heading text-brand-black mb-6 font-bold">Everything you need to scale</h2>
          <p className="text-body text-brand-gray leading-relaxed text-lg">
            From strategy to execution, we build growth systems that turn expertise into predictable revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white via-white to-gray-50/50 p-10 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{
                animationDelay: `${index * 80}ms`,
                opacity: 0,
                animation: "fadeInUp 520ms cubic-bezier(0.25, 1, 0.5, 1) forwards"
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/5 via-transparent to-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Colored accent circle */}
              <div className={`absolute top-8 right-8 w-4 h-4 bg-${accentColors[index]} rounded-full shadow-lg transition-transform duration-300 group-hover:scale-125`}></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-brand-black mb-4 pr-8 leading-tight">
                  {service.title}
                </h3>
                <p className="text-brand-gray text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
