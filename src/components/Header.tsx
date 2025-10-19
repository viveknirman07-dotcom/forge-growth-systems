import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-white/95 backdrop-blur-lg shadow-md" : "bg-brand-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Bitwellforge"
              className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="text-brand-black font-semibold text-lg">Bitwellforge</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#whatwedo" className="text-brand-gray hover:text-brand-black transition-colors text-sm font-medium">
              About
            </a>
            <a href="#services" className="text-brand-gray hover:text-brand-black transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#approach" className="text-brand-gray hover:text-brand-black transition-colors text-sm font-medium">
              Process
            </a>
            <a href="#testimonials" className="text-brand-gray hover:text-brand-black transition-colors text-sm font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-brand-gray hover:text-brand-black transition-colors text-sm font-medium">
              Contact
            </a>
          </nav>

          <a
            href="https://www.instagram.com/bitwellforge/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gray hover:text-brand-black transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
