import { ArrowRight, Award, TrendingUp, UserCheck, Users } from "lucide-react";
import ceoPic from "../../assets/fadelsamudera.jpeg";
import React from "react";

const Hero = () => {
  const stats = [
    { icon: <Users size={24} />, value: "20+", label: "Clients" },
    { icon: <Award size={24} />, value: "3+", label: "Years Experience" },
    { icon: <TrendingUp size={24} />, value: "150%", label: "Average ROI" },
  ];

  return (
    <section className="relative min-h-screen bg-[#040404] flex items-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#d4ac3c]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#d4ac3c]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#d4ac3c 1px, transparent 1px), linear-gradient(90deg, #d4ac3c 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 border border-[#d4ac3c]/30 bg-[#d4ac3c]/5">
              <span className="w-2 h-2 bg-[#d4ac3c] rounded-full animate-pulse"></span>
              <span className="text-[#d4ac3c] text-sm font-medium tracking-wide">Digital Marketing Expert</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transforming
                <span className="block text-[#d4ac3c]">Brands Into</span>
                Digital Leaders
              </h1>
              <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-xl">
                Strategic digital marketing solutions that drive measurable growth and build lasting connections with
                your audience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#d4ac3c] text-[#040404] font-semibold tracking-wide hover:bg-[#c49a2f] transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#d4ac3c] text-[#d4ac3c] font-semibold tracking-wide hover:bg-[#d4ac3c]/10 transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#d4ac3c]/20">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="space-y-2"
                >
                  <div className="text-[#d4ac3c]">{stat.icon}</div>
                  <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative lg:h-[800px] h-[600px]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4ac3c]/20 to-transparent"></div>

            {/* CEO Image Container */}
            <div className="relative h-full flex items-center justify-center">
              <div className="w-full h-full">
                <img
                  src={ceoPic}
                  alt="CEO Professional Photo"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#040404]/60 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="absolute bottom-8 left-0 bg-[#040404] border border-[#d4ac3c]/30 p-6 shadow-xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#d4ac3c] flex items-center justify-center">
                  <UserCheck
                    className="text-[#040404]"
                    size={24}
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">Fadel Samudera</div>
                  <div className="text-gray-400 text-xs">CEO CV.Impost Media Indonesia</div>
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
