import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioCard from "../ui/PortfolioCard";
import { portfolios } from "../../data/portfolio";

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

  return (
    <section
      id="portfolio"
      className="bg-[#040404] py-12 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 mb-4">
            <span className="text-[#d4ac3c] text-xs sm:text-sm font-medium tracking-wide">Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            Hasil Nyata yang
            <span className="block text-[#d4ac3c]">Berhasil Dicapai</span>
          </h2>
          <div className="w-16 h-1 bg-[#d4ac3c] mb-4"></div>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
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
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-[#d4ac3c] text-[#040404] p-2 rounded-full shadow-lg hover:bg-[#c49a2f] transition-colors z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft
                  size={20}
                  className="sm:w-6 sm:h-6"
                />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-[#d4ac3c] text-[#040404] p-2 rounded-full shadow-lg hover:bg-[#c49a2f] transition-colors z-10"
                aria-label="Next slide"
              >
                <ChevronRight
                  size={20}
                  className="sm:w-6 sm:h-6"
                />
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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-[#d4ac3c] w-8" : "bg-[#d4ac3c]/30 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center border-t border-[#d4ac3c]/20 pt-8 sm:pt-10">
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
            Ingin hasil serupa untuk bisnis Anda?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#d4ac3c] text-[#040404] text-sm sm:text-base font-semibold tracking-wide hover:bg-[#c49a2f] transition-all duration-300 rounded"
          >
            Diskusikan Bisnis Anda
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
