import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ArrowUp,
  Globe,
  Music,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Article", href: "#article" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Layanan Impost Media", href: "#services" },
    { name: "Strategic Consultation", href: "#services" },
    { name: "Digital Marketing Strategy", href: "#services" },
    { name: "Growth Advisory", href: "#services" },
    { name: "Corporate Training", href: "#services" },
  ];

  const socialMedia = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/fadelsamudera", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/fadelsamudera", label: "Instagram" },
    { icon: <Globe size={20} />, href: "https://www.impostmedia.com", label: "Website" },
  ];

  return (
    <footer className="bg-[#040404] border-t border-[#d4ac3c]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#d4ac3c] flex items-center justify-center">
                <span className="text-[#040404] font-bold text-xl">F</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-lg tracking-tight">Fadel</span>
                <span className="text-[#d4ac3c] text-xs tracking-widest">SAMUDERA</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              CEO & Konsultan Digital Marketing yang fokus pada hasil omzet nyata dan pertumbuhan bisnis berkelanjutan.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 border border-[#d4ac3c]/30 hover:border-[#d4ac3c] bg-[#d4ac3c]/5 hover:bg-[#d4ac3c] text-[#d4ac3c] hover:text-[#040404] flex items-center justify-center transition-all duration-300 rounded"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#d4ac3c] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Layanan</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-[#d4ac3c] transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail
                  className="text-[#d4ac3c] flex-shrink-0 mt-1"
                  size={18}
                />
                <a
                  href="mailto:samuderafadel@gmail.com"
                  className="text-gray-400 hover:text-[#d4ac3c] transition-colors text-sm"
                >
                  samuderafadel@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone
                  className="text-[#d4ac3c] flex-shrink-0 mt-1"
                  size={18}
                />
                <a
                  href="tel:+6281257444623"
                  className="text-gray-400 hover:text-[#d4ac3c] transition-colors text-sm"
                >
                  +62 812-5744-4623
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  className="text-[#d4ac3c] flex-shrink-0 mt-1"
                  size={18}
                />
                <span className="text-gray-400 text-sm">
                  Banjarbaru & Balikpapan,
                  <br />
                  Kalimantan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d4ac3c]/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Fadel Samudera. All rights reserved.
            </p>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-[#d4ac3c] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#d4ac3c] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#d4ac3c] hover:bg-[#c49a2f] text-[#040404] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
