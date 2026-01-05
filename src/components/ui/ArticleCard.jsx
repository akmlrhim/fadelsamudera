import { ArrowRight, Calendar, Clock } from "lucide-react";

const ArticleCard = ({ item, index, hoveredIndex, setHoveredIndex }) => {
  return (
    <a
      href="#"
      className="group relative overflow-hidden rounded-lg border border-[#d4ac3c]/30 bg-[#040404] hover:border-[#d4ac3c] transition-all duration-300 block h-full"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/60 to-transparent"></div>

        {/* Title Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-[#d4ac3c]/95 backdrop-blur-sm flex items-center justify-center p-6 transition-all duration-300 ${
            hoveredIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center space-y-4">
            <h4 className="text-xl font-bold text-[#040404] leading-tight">{item.title}</h4>
            <div className="flex items-center justify-center space-x-2 text-[#040404]/80 text-sm">
              <span>Baca Artikel</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h4 className="text-lg font-bold text-white group-hover:text-[#d4ac3c] transition-colors line-clamp-2">
          {item.title}
        </h4>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{item.excerpt}</p>

        <div className="flex items-center space-x-4 text-xs text-gray-500 pt-2">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
