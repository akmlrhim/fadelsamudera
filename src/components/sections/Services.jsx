import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { personalServices, impostService, educationService } from "../../data/service";

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      id="services"
      className="bg-[#040404] py-8"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 mb-6">
            <span className="text-[#d4ac3c] text-sm font-medium tracking-wide">Services</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Layanan yang
            <span className="block text-[#d4ac3c]">Saya Tawarkan</span>
          </h2>
          <div className="w-20 h-1 bg-[#d4ac3c] mb-6"></div>
          <p className="text-gray-400 text-lg">
            Solusi strategis untuk berbagai kebutuhan bisnis, dari konsultasi hingga eksekusi penuh
          </p>
        </div>

        {/* Impost Media Block */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Layanan Agency</h3>
          <div className="rounded-lg border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 p-8 hover:bg-[#d4ac3c]/10 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-6">
                <div className="text-[#d4ac3c] flex-shrink-0">{impostService.icon}</div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold text-white">{impostService.title}</h4>
                  <p className="text-gray-400">{impostService.description}</p>
                  <p className="text-gray-300 leading-relaxed">{impostService.details}</p>
                  <a
                    href={impostService.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-[#d4ac3c] hover:text-[#c49a2f] font-semibold transition-colors mt-4"
                  >
                    <span>Kunjungi Website Impost Media</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Services Block */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Layanan Personal</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalServices.map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 hover:bg-[#d4ac3c]/10 transition-all duration-300"
              >
                <div className="p-6 space-y-4">
                  <div className="text-[#d4ac3c]">{service.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                    <p className="text-[#d4ac3c] text-xs mb-3">{service.subtitle}</p>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>

                  <button
                    onClick={() => toggleCard(index)}
                    className="flex items-center justify-between w-full pt-4 border-t border-[#d4ac3c]/20 text-[#d4ac3c] hover:text-[#c49a2f] transition-colors"
                  >
                    <span className="text-sm font-semibold">Selengkapnya</span>
                    <ChevronDown
                      size={20}
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
                    <p className="text-gray-300 text-sm leading-relaxed pt-4 border-t border-[#d4ac3c]/20">
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
          <h3 className="text-2xl font-bold text-white mb-6">Layanan Pendidikan</h3>
          <div className="rounded-lg border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 p-8">
            <div className="flex items-start space-x-6">
              <div className="text-[#d4ac3c] flex-shrink-0">{educationService.icon}</div>
              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{educationService.title}</h4>
                  <p className="text-[#d4ac3c] text-sm mb-3">{educationService.subtitle}</p>
                  <p className="text-gray-400">{educationService.description}</p>
                </div>

                <button
                  onClick={() => toggleCard("education")}
                  className="flex items-center space-x-2 text-[#d4ac3c] hover:text-[#c49a2f] transition-colors"
                >
                  <span className="text-sm font-semibold">Selengkapnya</span>
                  <ChevronDown
                    size={20}
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
                  <p className="text-gray-300 leading-relaxed pt-4 border-t border-[#d4ac3c]/20">
                    {educationService.details}
                  </p>
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center px-6 py-3 bg-[#d4ac3c] text-[#040404] font-semibold text-sm hover:bg-[#c49a2f] transition-colors"
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
        <div className="mt-12 text-center border-t border-[#d4ac3c]/20 pt-12">
          <p className="text-gray-400 text-lg mb-6">Tertarik dengan layanan yang saya tawarkan?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4ac3c] text-[#040404] font-semibold tracking-wide hover:bg-[#c49a2f] transition-all duration-300 rounded-lg"
          >
            Ajukan Diskusi Strategis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
