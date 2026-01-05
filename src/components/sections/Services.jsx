import { useRef, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { personalServices, impostService, educationService } from "../../data/service";

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const scrollToSlide = (index) => {
    if (sliderRef.current) {
      const cardWidth = 280 + 16;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    const next = currentSlide < personalServices.length - 1 ? currentSlide + 1 : 0;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = currentSlide > 0 ? currentSlide - 1 : personalServices.length - 1;
    scrollToSlide(prev);
  };

  return (
    <section
      id="services"
      className="bg-[#040404] py-12 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 mb-4">
            <span className="text-[#d4ac3c] text-xs sm:text-sm font-medium tracking-wide">Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            Layanan yang
            <span className="block text-[#d4ac3c]">Saya Tawarkan</span>
          </h2>
          <div className="w-16 h-1 bg-[#d4ac3c] mb-4"></div>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            Solusi strategis untuk berbagai kebutuhan bisnis, dari konsultasi hingga eksekusi penuh
          </p>
        </div>

        {/* Impost Media Block */}
        <div className="mb-10 lg:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Layanan Agency</h3>
          <div className="rounded-lg border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 p-6 sm:p-8 hover:bg-[#d4ac3c]/10 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
              <div className="text-[#d4ac3c] flex-shrink-0 scale-90 sm:scale-100">{impostService.icon}</div>
              <div className="space-y-3 w-full">
                <h4 className="text-xl sm:text-2xl font-bold text-white">{impostService.title}</h4>
                <p className="text-gray-400 text-sm sm:text-base">{impostService.description}</p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{impostService.details}</p>
                <a
                  href={impostService.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#d4ac3c] hover:text-[#c49a2f] font-semibold text-sm sm:text-base transition-colors mt-2"
                >
                  <span>Kunjungi Website Impost Media</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Services Block - dengan slider di mobile */}
        <div className="mb-10 lg:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Layanan Personal</h3>

          {/* Mobile: Horizontal Scroll dengan buttons */}
          <div className="md:hidden relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4ac3c] text-[#040404] p-2 rounded-full shadow-lg hover:bg-[#c49a2f] transition-all duration-300 -ml-2"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d4ac3c] text-[#040404] p-2 rounded-full shadow-lg hover:bg-[#c49a2f] transition-all duration-300 -mr-2"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>

            {/* Slider Container */}
            <div
              ref={sliderRef}
              className="overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <div
                className="flex space-x-4 px-8"
                style={{ width: "max-content" }}
              >
                {personalServices.map((service, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 hover:bg-[#d4ac3c]/10 transition-all duration-300"
                    style={{ width: "280px", flexShrink: 0, scrollSnapAlign: "center" }}
                  >
                    <div className="p-5 space-y-3 h-full flex flex-col">
                      <div className="text-[#d4ac3c] scale-90 origin-left">{service.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">{service.title}</h4>
                        <p className="text-[#d4ac3c] text-xs mb-2">{service.subtitle}</p>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>

                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center justify-between w-full pt-3 border-t border-[#d4ac3c]/20 text-[#d4ac3c] hover:text-[#c49a2f] transition-colors"
                      >
                        <span className="text-sm font-semibold">Selengkapnya</span>
                        <ChevronDown
                          size={18}
                          className={`transform transition-transform duration-300 ${
                            expandedCard === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedCard === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-300 text-sm leading-relaxed pt-3 border-t border-[#d4ac3c]/20">
                          {service.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {personalServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-[#d4ac3c]" : "w-2 bg-[#d4ac3c]/30 hover:bg-[#d4ac3c]/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {personalServices.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 hover:bg-[#d4ac3c]/10 transition-all duration-300"
              >
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="text-[#d4ac3c] scale-90 origin-left">{service.icon}</div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{service.title}</h4>
                    <p className="text-[#d4ac3c] text-xs sm:text-xs mb-2">{service.subtitle}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{service.description}</p>
                  </div>

                  <button
                    onClick={() => toggleCard(index)}
                    className="flex items-center justify-between w-full pt-3 border-t border-[#d4ac3c]/20 text-[#d4ac3c] hover:text-[#c49a2f] transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold">Selengkapnya</span>
                    <ChevronDown
                      size={18}
                      className={`transform transition-transform duration-300 ${
                        expandedCard === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedCard === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pt-3 border-t border-[#d4ac3c]/20">
                      {service.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Layanan Pendidikan</h3>
          <div className="rounded-lg border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0">
              <div className="text-[#d4ac3c] flex-shrink-0 scale-90 sm:scale-100">{educationService.icon}</div>
              <div className="space-y-3 flex-1 w-full">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{educationService.title}</h4>
                  <p className="text-[#d4ac3c] text-xs sm:text-sm mb-2">{educationService.subtitle}</p>
                  <p className="text-gray-400 text-sm sm:text-base">{educationService.description}</p>
                </div>

                <button
                  onClick={() => toggleCard("education")}
                  className="flex items-center space-x-2 text-[#d4ac3c] hover:text-[#c49a2f] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold">Selengkapnya</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform duration-300 ${
                      expandedCard === "education" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === "education" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-3 border-t border-[#d4ac3c]/20">
                    {educationService.details}
                  </p>
                  <div className="mt-4 sm:mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-5 py-2.5 bg-[#d4ac3c] text-[#040404] font-semibold text-xs sm:text-sm hover:bg-[#c49a2f] transition-colors rounded"
                    >
                      Diskusi Kolaborasi Akademik
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 sm:mt-12 text-center border-t border-[#d4ac3c]/20 pt-8 sm:pt-10">
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
            Tertarik dengan layanan yang saya tawarkan?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#d4ac3c] text-[#040404] text-sm sm:text-base font-semibold tracking-wide hover:bg-[#c49a2f] transition-all duration-300 rounded"
          >
            Ajukan Diskusi Strategis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
