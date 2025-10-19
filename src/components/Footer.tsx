import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-white border-t border-border py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-brand-black mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-brand-gray">
              <li><a href="#services" className="hover:text-brand-black transition-colors">Strategy</a></li>
              <li><a href="#services" className="hover:text-brand-black transition-colors">Sales</a></li>
              <li><a href="#services" className="hover:text-brand-black transition-colors">Marketing</a></li>
              <li><a href="#services" className="hover:text-brand-black transition-colors">Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-brand-black mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-brand-gray">
              <li><a href="#whatwedo" className="hover:text-brand-black transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-brand-black transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-brand-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-brand-black mb-4">Connect</h3>
            <a 
              href="https://www.instagram.com/bitwellforge/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-gray hover:text-brand-black transition-colors"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-brand-gray">
          <p>© {currentYear} Bitwellforge • bitwellforge@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
