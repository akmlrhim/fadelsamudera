import React, { useState } from "react";
import {
  ChevronDown,
  Building2,
  MessageSquare,
  BarChart3,
  Users,
  Presentation,
  Handshake,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const impostService = {
    icon: <Building2 size={32} />,
    title: "Layanan Impost Media",
    description: "Agensi digital marketing dengan fokus pada hasil omzet nyata",
    details:
      "Full-service digital marketing agency yang berani mengikat pekerjaan pada hasil. Mulai dari strategy, execution, hingga reporting transparan dengan jaminan uang kembali bila target tidak tercapai.",
    link: "https://impostmedia.com/",
    isExternal: true,
  };

  const personalServices = [
    {
      icon: <MessageSquare size={32} />,
      title: "Strategic Business Consultation",
      subtitle: "Entry Point – Low Commitment, High Trust",
      description: "Diagnosis fase bisnis & arah strategi 90 hari ke depan",
      details:
        "Sesi konsultasi 60-90 menit untuk owner bisnis yang mentok & bingung arah. Termasuk diagnosis fase bisnis, identifikasi bottleneck, dan rekomendasi realistis dengan action plan prioritas.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Digital Marketing Strategy & System",
      subtitle: "Core Offer – Authority Builder",
      description: "Perancangan sistem digital marketing berbasis data",
      details:
        "Audit marketing & funnel lengkap, perancangan sistem digital marketing, channel strategy, KPI & target. Deliverable berupa strategy deck, funnel map, dan timeline 60-90 hari.",
    },
    {
      icon: <Users size={32} />,
      title: "Growth Advisory (Retainer)",
      subtitle: "High Ticket – High Trust",
      description: "Pendampingan strategis untuk scale bisnis",
      details:
        '2-4 sesi diskusi per bulan untuk review keputusan strategis, evaluasi performa marketing, arah scale & efisiensi. Menjadi "second brain" untuk owner/direksi dalam pengambilan keputusan.',
    },
    {
      icon: <Presentation size={32} />,
      title: "Corporate Training & Speaking",
      subtitle: "Authority & Exposure",
      description: "Seminar, workshop & in-house training",
      details:
        "Topik meliputi digital marketing berbasis sistem, growth mindset, risk & decision making, dan scale tanpa menghancurkan cashflow. Untuk korporat, institusi, kampus & komunitas bisnis.",
    },
    {
      icon: <Handshake size={32} />,
      title: "Strategic Partnership",
      subtitle: "Selective – Case by Case",
      description: "Joint project & revenue sharing",
      details:
        "Kolaborasi strategis untuk investor, mitra ekspansi, atau bisnis yang ingin JV. Bentuk dapat berupa equity-based, revenue sharing, atau advisory + execution via Impost Media.",
    },
  ];

  const educationService = {
    icon: <BookOpen size={32} />,
    title: "Kolaborasi Akademik & Industri",
    subtitle: "Academic–Industry Collaboration",
    description: "Program kolaborasi institusi pendidikan dengan industri",
    details:
      "Praktisi industri sebagai pengajar, penyelarasan kurikulum berbasis industri, project terapan, dan pengembangan kompetensi. Menciptakan lulusan yang siap kerja, siap berpikir, dan siap bertanggung jawab.",
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
            className="inline-flex items-center px-8 py-4 bg-[#d4ac3c] text-[#040404] font-semibold tracking-wide hover:bg-[#c49a2f] transition-all duration-300"
          >
            Ajukan Diskusi Strategis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
