import { Link, useLocation } from "react-router-dom";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/bitwellforge-logo.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: "home", href: "/" },
    { label: "services", href: "/services" },
    { label: "testimonials", href: "/testimonials" },
    { label: "about", href: "/about" },
    { label: "contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-[hsl(var(--line-hair))]">
      <div className="container-standard">
        <div className="flex items-center justify-between h-[72px] lg:h-[72px] md:h-[64px] sm:h-[56px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <img 
              src={logo} 
              alt="BitwellForge" 
              className="h-10 w-10 transition-all duration-[160ms] group-hover:scale-[1.02] group-hover:opacity-96"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-[16px] font-normal lowercase hover-underline transition-colors duration-[120ms] ${
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
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

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button
                className="text-foreground hover:text-muted-foreground transition-colors duration-[120ms]"
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="top" 
              className="bg-[#0A0A0A] border-[hsl(var(--line-hair))] max-h-[90vh] overflow-y-auto rounded-b-2xl shadow-[0_16px_60px_rgba(0,0,0,0.60)]"
            >
              <nav className="flex flex-col gap-0 mt-8">
                {navItems.map((item, index) => (
                  <div key={item.href}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-[22px] font-normal lowercase py-4 block transition-colors duration-[120ms] ${
                        location.pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="h-[1px] bg-[hsl(var(--line-hair))]" />
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Mobile Social Icons */}
              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-[hsl(var(--line-hair))]">
                <a
                  href="https://www.instagram.com/bitwellforge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-[120ms]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/bitwellforge/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-[120ms]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
