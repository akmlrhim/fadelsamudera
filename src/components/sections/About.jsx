import React from "react";
import { Target, TrendingUp, Users, Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: <Briefcase size={20} />, text: "CEO & Founder CV Impost Media Indonesia" },
    { icon: <Users size={20} />, text: "Memimpin puluhan karyawan & tim profesional" },
    { icon: <Award size={20} />, text: "Top 40 Startup Indonesia dari Kalimantan" },
    { icon: <Target size={20} />, text: "Fokus pada kenaikan omzet nyata" },
  ];

  const expertise = [
    "Meta Ads & Digital Advertising",
    "CRM & ERP Implementation",
    "High-Converting Funnel",
    "Content Strategy & Viral Marketing",
    "Marketplace Optimization",
  ];

  return (
    <section
      id="about"
      className="bg-[#040404] py-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 mb-6">
            <span className="text-[#d4ac3c] text-sm font-medium tracking-wide">About Me</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Siapa saya
            <span className="block text-[#d4ac3c]">Sebenarnya?</span>
          </h2>
          <div className="w-20 h-1 bg-[#d4ac3c] mb-8"></div>

          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p className="text-lg">
              CEO & konsultan digital marketing yang bekerja lintas industri dan lintas kota di Indonesia. Pendiri{" "}
              <span className="text-[#d4ac3c] font-semibold">CV Impost Media Indonesia</span>, agensi yang berani
              mengikat pekerjaannya pada hasil omzet dengan jaminan uang kembali bila target tidak tercapai.
            </p>
            <p>
              Di Balikpapan, berada di level direksi & strategi untuk bisnis pengadaan barang & jasa serta event
              organizer, termasuk proyek yang berhasil memenangkan tender pemerintah daerah.
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border border-[#d4ac3c]/20 bg-[#d4ac3c]/5 hover:bg-[#d4ac3c]/10 transition-all duration-300"
            >
              <div className="text-[#d4ac3c] mb-4">{item.icon}</div>
              <p className="text-sm text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Background Story */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap
                className="text-[#d4ac3c]"
                size={28}
              />
              <h3 className="text-2xl font-bold text-white">Fondasi yang Berbeda</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Berlatar belakang <span className="text-white font-semibold">S-1 Teknik Pertambangan</span>, cara berpikir
              Fadel ditempa untuk sederhana tapi tegas: ukur → uji → mitigasi → putuskan berbasis data.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Berbekal kombinasi teknik dan digital marketing, pendekatan yang digunakan bukan trial and error
              sembarangan, tapi framework terstruktur yang menyelamatkan bisnis dari kehancuran.
            </p>

            {/* Quote Box */}
            <div className="border-l-4 border-[#d4ac3c] pl-6 py-4 bg-[#d4ac3c]/5 mt-8">
              <p className="text-white text-lg italic leading-relaxed">
                "Ini bukan teori. Ini kerja lapangan. Dari kamar kos hingga ruang meeting, dari kegagalan hingga
                keberhasilan."
              </p>
              <p className="text-[#d4ac3c] font-semibold mt-4">— Fadel Samudera</p>
            </div>
          </div>

          {/* Expertise Box */}
          <div className="border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp
                className="text-[#d4ac3c]"
                size={28}
              />
              <h3 className="text-2xl font-bold text-white">Keahlian Utama</h3>
            </div>
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <div className="w-1.5 h-1.5 bg-[#d4ac3c]"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white text-center">Dipercaya Oleh</h4>
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-marquee space-x-12">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex space-x-12 items-center flex-shrink-0"
                >
                  <div className="flex items-center justify-center w-48 h-24 bg-white/5 border border-[#d4ac3c]/20 px-6 hover:bg-white/10 transition-all">
                    <span className="text-white/80 text-sm font-semibold text-center">CitraLand Banjarmasin</span>
                  </div>
                  <div className="flex items-center justify-center w-48 h-24 bg-white/5 border border-[#d4ac3c]/20 px-6 hover:bg-white/10 transition-all">
                    <span className="text-white/80 text-sm font-semibold text-center">Shafwah Property</span>
                  </div>
                  <div className="flex items-center justify-center w-48 h-24 bg-white/5 border border-[#d4ac3c]/20 px-6 hover:bg-white/10 transition-all">
                    <span className="text-white/80 text-sm font-semibold text-center">Rumah BUMN</span>
                  </div>
                  <div className="flex items-center justify-center w-48 h-24 bg-white/5 border border-[#d4ac3c]/20 px-6 hover:bg-white/10 transition-all">
                    <span className="text-white/80 text-sm font-semibold text-center">TDA Community</span>
                  </div>
                  <div className="flex items-center justify-center w-48 h-24 bg-white/5 border border-[#d4ac3c]/20 px-6 hover:bg-white/10 transition-all">
                    <span className="text-white/80 text-sm font-semibold text-center">Ciputra Group</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;
