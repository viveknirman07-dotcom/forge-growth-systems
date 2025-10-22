import { Link, useLocation } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "home", href: "/" },
    { label: "services", href: "/services" },
    { label: "testimonials", href: "/testimonials" },
    { label: "about", href: "/about" },
    { label: "contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-[rgba(0,0,0,0.06)]">
      <div className="container-standard">
        <div className="flex items-center justify-between h-[72px] md:h-[72px] sm:h-[56px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="BitwellForge" 
              className="h-10 w-10 transition-opacity duration-[120ms] hover:opacity-70"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-caption hover-underline transition-colors duration-[120ms] ${
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
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

          {/* Mobile Menu Button - Simplified for now */}
          <div className="md:hidden">
            {/* Mobile menu implementation can be added later if needed */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
