import { ArrowRight, Award, TrendingUp, UserCheck, Users } from "lucide-react";
import ceoPic from "../../assets/fadelsamudera.webp";

const Hero = () => {
  const stats = [
    { icon: <Users size={24} />, value: "20+", label: "Clients" },
    { icon: <Award size={24} />, value: "3+", label: "Years Experience" },
    { icon: <TrendingUp size={24} />, value: "150%", label: "Average ROI" },
  ];

  return (
    <section
      className="relative bg-[#040404] overflow-hidden"
      id="home"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-[#d4ac3c]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-[#d4ac3c]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#d4ac3c 1px, transparent 1px), linear-gradient(90deg, #d4ac3c 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 border border-[#d4ac3c]/30 bg-[#d4ac3c]/5">
              <span className="w-1.5 h-1.5 bg-[#d4ac3c] rounded-full animate-pulse"></span>
              <span className="text-[#d4ac3c] text-xs sm:text-sm font-medium tracking-wide">
                Digital Marketing Expert
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white leading-tight">
                Saya membantu perusahaan dan pemilik bisnis
                <span className="block text-[#d4ac3c] mt-1.5">menaikkan omset 2–3× lipat</span>
                <span className="block text-white mt-1">dengan digital marketing dalam 90 hari.</span>
              </h1>
              <div className="space-y-2 pt-2">
                <p className="text-gray-400 text-sm sm:text-base font-medium">Bukan dengan trik instan.</p>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Tapi dengan sistem digital marketing, keputusan strategis berbasis data, dan proses ketat yang tidak
                  semua bisnis sanggup jalani.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-6 py-3 bg-[#d4ac3c] text-[#040404] text-sm sm:text-base font-semibold tracking-wide hover:bg-[#c49a2f] transition-all duration-300"
              >
                Mulai Konsultasi
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#d4ac3c] text-[#d4ac3c] text-sm sm:text-base font-semibold tracking-wide hover:bg-[#d4ac3c]/10 transition-all duration-300"
              >
                Lihat Portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#d4ac3c]/20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="space-y-1"
                >
                  <div className="text-[#d4ac3c] scale-90 origin-left transform">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] mt-8 lg:mt-0">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4ac3c]/20 to-transparent"></div>

            {/* CEO Image Container */}
            <div className="relative h-full flex items-center justify-center overflow-hidden">
              <div className="w-full h-full">
                <img
                  loading="lazy"
                  src={ceoPic}
                  alt="Fadel Samudera - CEO Professional Photo"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040404]/80 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* CEO Info Card */}
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-0 bg-[#040404] border border-[#d4ac3c]/30 p-4 shadow-xl max-w-[240px] sm:max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d4ac3c] flex items-center justify-center shrink-0">
                  <UserCheck className="text-[#040404] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-white text-sm sm:text-base font-semibold leading-tight">Fadel Samudera</div>
                  <div className="text-gray-400 text-[10px] sm:text-xs mt-0.5">CEO CV. Impost Media Indonesia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
