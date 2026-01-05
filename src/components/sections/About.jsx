import { TrendingUp, GraduationCap } from "lucide-react";
import { achievements } from "../../data/achievement";
import { expertise } from "../../data/expertise";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#040404] py-12 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 mb-4">
            <span className="text-[#d4ac3c] text-xs sm:text-sm font-medium tracking-wide">About Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            Siapa saya
            <span className="block text-[#d4ac3c]">Sebenarnya?</span>
          </h2>
          <div className="w-16 h-1 bg-[#d4ac3c] mb-6"></div>

          <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
            <p>
              CEO & konsultan digital marketing yang bekerja lintas industri dan lintas kota di Indonesia. Pendiri{" "}
              <span className="text-[#d4ac3c] font-semibold">CV Impost Media Indonesia</span>, agensi yang berani
              mengikat pekerjaannya pada hasil omset dengan jaminan uang kembali bila target tidak tercapai.
            </p>
            <p>
              Di Balikpapan, berada di level direksi & strategi untuk bisnis pengadaan barang & jasa serta event
              organizer, termasuk proyek yang berhasil memenangkan tender pemerintah daerah.
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 lg:mb-16">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border border-[#d4ac3c]/20 bg-[#d4ac3c]/5 hover:bg-[#d4ac3c]/10 transition-all duration-300"
            >
              <div className="text-[#d4ac3c] mb-3 scale-90">{item.icon}</div>
              <p className="text-xs sm:text-sm text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Background Story */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap
                className="text-[#d4ac3c]"
                size={24}
              />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Fondasi yang Berbeda</h3>
            </div>
            <div className="text-sm sm:text-base text-gray-400 leading-relaxed space-y-4">
              <p>
                Berlatar belakang <span className="text-white font-semibold">S-1 Teknik Pertambangan</span>, cara
                berpikir Fadel ditempa untuk sederhana tapi tegas: ukur → uji → mitigasi → putuskan berbasis data.
              </p>
              <p>
                Berbekal kombinasi teknik dan digital marketing, pendekatan yang digunakan bukan trial and error
                sembarangan, tapi framework terstruktur yang menyelamatkan bisnis dari kehancuran.
              </p>
            </div>

            {/* Quote Box */}
            <div className="border-l-4 border-[#d4ac3c] pl-4 py-3 bg-[#d4ac3c]/5 mt-6">
              <p className="text-white text-sm sm:text-base italic leading-relaxed">
                "Ini bukan teori. Ini kerja lapangan. Dari kamar kos hingga ruang meeting, dari kegagalan hingga
                keberhasilan."
              </p>
              <p className="text-[#d4ac3c] text-sm font-semibold mt-2">— Fadel Samudera</p>
            </div>
          </div>

          {/* Expertise Box */}
          <div className="border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 p-6 h-fit">
            <div className="flex items-center space-x-3 mb-5">
              <TrendingUp
                className="text-[#d4ac3c]"
                size={24}
              />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Keahlian Utama</h3>
            </div>
            <div className="space-y-3">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <div className="w-1.5 h-1.5 bg-[#d4ac3c] shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="space-y-6">
          <h4 className="text-xl sm:text-2xl font-bold text-white text-center">Dipercaya Oleh</h4>
          <div className="relative overflow-hidden py-4 sm:py-6">
            <div className="flex animate-marquee space-x-6 sm:space-x-12">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex space-x-6 sm:space-x-12 items-center flex-shrink-0"
                >
                  <div className="flex items-center justify-center w-40 h-20 bg-white/5 border border-[#d4ac3c]/20 px-4 hover:bg-white/10 transition-all">
                    <span className="text-white/80 text-xs sm:text-sm font-semibold text-center">
                      CitraLand Banjarmasin
                    </span>
                  </div>
                  <div className="flex items-center justify-center w-40 h-20 bg-white/5 border border-[#d4ac3c]/20 px-4 hover:bg-white/10 transition-all">
                    <span className="text-white/80 text-xs sm:text-sm font-semibold text-center">Shafwah Property</span>
                  </div>
                  <div className="flex items-center justify-center w-40 h-20 bg-white/5 border border-[#d4ac3c]/20 px-4 hover:bg-white/10 transition-all">
                    <span className="text-white/80 text-xs sm:text-sm font-semibold text-center">Rumah BUMN</span>
                  </div>
                  <div className="flex items-center justify-center w-40 h-20 bg-white/5 border border-[#d4ac3c]/20 px-4 hover:bg-white/10 transition-all">
                    <span className="text-white/80 text-xs sm:text-sm font-semibold text-center">TDA Community</span>
                  </div>
                  <div className="flex items-center justify-center w-40 h-20 bg-white/5 border border-[#d4ac3c]/20 px-4 hover:bg-white/10 transition-all">
                    <span className="text-white/80 text-xs sm:text-sm font-semibold text-center">Ciputra Group</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
