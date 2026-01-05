import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Article", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#040404] shadow-lg shadow-[#d4ac3c]/10" : "bg-[#040404]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <a
              href="#home"
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-[#d4ac3c] flex items-center justify-center">
                <span className="text-[#040404] font-bold text-xl">F</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-lg tracking-tight">Fadel</span>
                <span className="text-[#d4ac3c] text-xs tracking-widest">SAMUDERA</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#d4ac3c] transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-[#d4ac3c] text-[#040404] font-semibold text-sm tracking-wide hover:bg-[#c49a2f] transition-colors duration-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-[#d4ac3c] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 pt-2 pb-6 space-y-3 bg-[#040404] border-t border-[#d4ac3c]/20">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-white hover:text-[#d4ac3c] hover:bg-[#d4ac3c]/10 transition-all duration-200 text-sm font-medium tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block px-4 py-3 bg-[#d4ac3c] text-[#040404] font-semibold text-sm tracking-wide text-center hover:bg-[#c49a2f] transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
