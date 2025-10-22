import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.06)] py-20">
      <div className="container-standard">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo Column */}
          <div>
            <img src={logo} alt="BitwellForge" className="h-10 w-10 mb-4" />
            <p className="text-caption text-muted-foreground">
              Momentum systems that compound attention into meaningful outcomes.
            </p>
          </div>

          {/* Navigate Column */}
          <div>
            <h4 className="text-caption font-medium mb-4">Navigate</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] w-fit">
                home
              </Link>
              <Link to="/services" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] w-fit">
                services
              </Link>
              <Link to="/testimonials" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] w-fit">
                testimonials
              </Link>
              <Link to="/about" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] w-fit">
                about
              </Link>
              <Link to="/contact" className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] w-fit">
                contact
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-caption font-medium mb-4">Contact</h4>
            <a 
              href="mailto:bitwellforge@gmail.com" 
              className="text-caption text-muted-foreground hover:text-foreground hover-underline transition-colors duration-[120ms] block mb-4 w-fit"
            >
              bitwellforge@gmail.com
            </a>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/bitwellforge/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-[120ms]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/bitwellforge/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-[120ms]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
