import React, { useState, useRef, useEffect } from "react";
import { Calendar, Clock, ArrowRight, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import ArticleCard from "../ui/ArticleCard";

const Article = () => {
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

  const articles = [
    {
      title: "Membangun Sistem Digital Marketing yang Sustainable",
      excerpt:
        "Bagaimana membangun sistem marketing yang tidak hanya menghasilkan leads, tapi juga berkelanjutan untuk jangka panjang",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Digital Marketing",
      date: "15 Des 2024",
    },
    {
      title: "Kesalahan Fatal dalam Meta Ads yang Membuat Budget Boncos",
      excerpt: "Mengapa banyak bisnis gagal di Meta Ads? Simak kesalahan umum yang harus dihindari",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      category: "Paid Advertising",
      date: "10 Des 2024",
    },
    {
      title: "Data-Driven Decision: Jangan Asal Ikut Tren",
      excerpt: "Mengapa keputusan bisnis harus berdasarkan data, bukan sekadar mengikuti tren yang sedang viral",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Business Strategy",
      date: "5 Des 2024",
    },
    {
      title: "Scale Bisnis Tanpa Menghancurkan Cashflow",
      excerpt: "Strategi scale up yang aman dan terukur, tanpa membahayakan kesehatan finansial bisnis",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      category: "Growth Strategy",
      date: "28 Nov 2024",
    },
    {
      title: "Funnel Marketing: Dari Awareness hingga Loyalitas",
      excerpt: "Memahami customer journey dan bagaimana membangun funnel yang efektif untuk setiap tahapan",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      category: "Digital Marketing",
      date: "20 Nov 2024",
    },
    {
      title: "UMKM Go Digital: Langkah Praktis untuk Pemula",
      excerpt: "Panduan lengkap untuk UMKM yang ingin mulai merambah digital marketing dengan budget terbatas",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      category: "UMKM Tips",
      date: "15 Nov 2024",
    },
  ];

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
    const next = currentSlide === articles.length - 2 ? 0 : currentSlide + 1;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = currentSlide === 0 ? articles.length - 2 : currentSlide - 1;
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
      id="articles"
      className="bg-[#040404] py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 border border-[#d4ac3c]/30 bg-[#d4ac3c]/5 mb-6 rounded">
            <span className="text-[#d4ac3c] text-sm font-medium tracking-wide">Article</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">Artikel</h2>
          <div className="w-20 h-1 bg-[#d4ac3c] mb-6"></div>
          <p className="text-gray-400 text-lg">Pemikiran, strategi, dan pembelajaran dari lapangan digital marketing</p>
        </div>

        {/* Articles Grid/Slider */}
        <div className="relative">
          {/* Mobile Slider */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {articles.slice(1).map((article, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-center"
              >
                <ArticleCard
                  item={article}
                  index={index}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                />
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, index) => (
              <ArticleCard
                key={index}
                item={article}
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
              {articles.slice(1).map((_, index) => (
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
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Article;
