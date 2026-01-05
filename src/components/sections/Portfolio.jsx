import React, { useState, useRef, useEffect } from "react";
import { TrendingUp, Target, Users, ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioCard from "../ui/PortfolioCard";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSlide = (index) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    const next = currentSlide === portfolios.length - 1 ? 0 : currentSlide + 1;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = currentSlide === 0 ? portfolios.length - 1 : currentSlide - 1;
    scrollToSlide(prev);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current && isMobile) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const slideWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newIndex);
    }
  };

  const portfolios = [
    {
      title: "CitraLand Banjarmasin",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      description: "Strategi digital marketing & Meta Ads untuk project properti premium",
      stats: "7M+ omzet dengan budget iklan 30 juta",
      icon: <TrendingUp size={20} />,
    },
    {
      title: "Banmed Medical Supply",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      description: "Restrukturisasi positioning & sistem marketing",
      stats: "Naik dari 160 juta ke 250 juta & bertumbuh stabil",
      icon: <Target size={20} />,
    },
    {
      title: "Raudhoh UMKM",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: "Recovery dari trauma iklan dengan pendekatan bertahap",
      stats: "Omzet meningkat 10-13× lipat dalam 90 hari",
      icon: <Users size={20} />,
    },
    {
      title: "Shafwah Property",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
      description: "Digital campaign & funnel optimization untuk project properti syariah",
      stats: "Peningkatan lead berkualitas & konversi tinggi",
      icon: <TrendingUp size={20} />,
    },
    {
      title: "Tender Pemerintah Daerah",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      description: "Strategi tender & eksekusi event organizer skala pemerintahan",
      stats: "Berhasil memenangkan tender strategis",
      icon: <Target size={20} />,
    },
    {
      title: "UMKM Binaan BUMN",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      description: "Pelatihan & pendampingan digital marketing di Rumah BUMN",
      stats: "Ratusan UMKM terbantu meningkatkan omzet",
      icon: <Users size={20} />,
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-[#040404] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 mb-6 rounded">
            <span className="text-[#d4ac3c] text-sm font-medium tracking-wide">Portfolio</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Hasil Nyata yang
            <span className="block text-[#d4ac3c]">Berhasil Dicapai</span>
          </h2>
          <div className="w-20 h-1 bg-[#d4ac3c] mb-6"></div>
          <p className="text-gray-400 text-lg">
            Bukan sekadar angka, tapi cerita nyata tentang pertumbuhan bisnis yang terukur
          </p>
        </div>

        {/* Portfolio Grid/Slider */}
        <div className="relative">
          {/* Mobile Slider */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {portfolios.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-center"
              >
                <PortfolioCard
                  item={item}
                  index={index}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                />
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((item, index) => (
              <PortfolioCard
                key={index}
                item={item}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          {isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#d4ac3c] text-[#040404] p-2 rounded-full shadow-lg hover:bg-[#c49a2f] transition-colors z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#d4ac3c] text-[#040404] p-2 rounded-full shadow-lg hover:bg-[#c49a2f] transition-colors z-10"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Mobile Dots Indicator */}
          {isMobile && (
            <div className="flex justify-center gap-2 mt-6">
              {portfolios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-[#d4ac3c] w-6" : "bg-[#d4ac3c]/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center border-t border-[#d4ac3c]/20 pt-12">
          <p className="text-gray-400 text-lg mb-6">Ingin hasil serupa untuk bisnis Anda?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4ac3c] text-[#040404] font-semibold tracking-wide hover:bg-[#c49a2f] transition-all duration-300 rounded-lg"
          >
            Diskusikan Bisnis Anda
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
