import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-white border-t border-border py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-brand-black mb-4 font-display">Services</h3>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Strategy</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Sales</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Marketing</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-brand-black mb-4 font-display">Company</h3>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><a href="#whatwedo" className="hover:text-brand-yellow transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-brand-yellow transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-brand-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-brand-black mb-4 font-display">Connect</h3>
            <a 
              href="https://www.instagram.com/bitwellforge/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-yellow transition-colors"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-brand-muted">
          <p>© {currentYear} Bitwellforge • bitwellforge@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
