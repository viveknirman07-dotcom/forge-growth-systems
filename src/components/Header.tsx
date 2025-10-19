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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/98 backdrop-blur-xl shadow-lg" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Bitwellforge"
              className="h-8 w-8 transition-transform duration-500 group-hover:rotate-180"
            />
            <span className="text-brand-black font-bold text-lg">Bitwellforge</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            <a href="#whatwedo" className="text-brand-gray hover:text-brand-black transition-all duration-300 text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-coral after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <a href="#services" className="text-brand-gray hover:text-brand-black transition-all duration-300 text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-coral after:transition-all after:duration-300 hover:after:w-full">
              Services
            </a>
            <a href="#approach" className="text-brand-gray hover:text-brand-black transition-all duration-300 text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-coral after:transition-all after:duration-300 hover:after:w-full">
              Process
            </a>
            <a href="#testimonials" className="text-brand-gray hover:text-brand-black transition-all duration-300 text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-coral after:transition-all after:duration-300 hover:after:w-full">
              Testimonials
            </a>
            <a href="#contact" className="text-brand-gray hover:text-brand-black transition-all duration-300 text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-coral after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
          </nav>

          <a
            href="https://www.instagram.com/bitwellforge/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gray hover:text-brand-coral transition-all duration-300 hover:scale-110"
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
