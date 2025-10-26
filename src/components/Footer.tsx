import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/bitwellforge-logo.png";
const Footer = () => {
  return <footer className="border-t border-[hsl(var(--line-hair))] py-20">
      <div className="container-standard">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Logo Column */}
          <div>
            <img src={logo} alt="BitwellForge" className="h-10 w-10 mb-4 opacity-100" />
          </div>

          {/* Navigate Column */}
          <div>
            <h4 className="text-caption font-medium mb-6 text-foreground">Navigate</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] w-fit lowercase">
                home
              </Link>
              <Link to="/services" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] w-fit lowercase">
                services
              </Link>
              <Link to="/testimonials" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] w-fit lowercase">
                testimonials
              </Link>
              <Link to="/about" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] w-fit lowercase">
                about
              </Link>
              <Link to="/contact" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] w-fit lowercase">
                contact
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-caption font-medium mb-6 text-foreground">Contact</h4>
            <a href="mailto:bitwellforge@gmail.com" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] block mb-6 w-fit">v@bitwellforge.com</a>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/bitwellforge/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-[120ms]" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/bitwellforge/about/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-[120ms]" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;