const PortfolioCard = ({ item, index, hoveredIndex, setHoveredIndex }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-[#d4ac3c]/30 bg-[#040404] cursor-pointer h-full"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-[#040404]/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-[#d4ac3c] transition-colors">{item.title}</h3>
          <div className="text-[#d4ac3c] flex-shrink-0 ml-2">{item.icon}</div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-[#d4ac3c]/95 backdrop-blur-sm flex items-center justify-center p-6 rounded-lg transition-all duration-300 ${
          hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-center space-y-4">
          <div className="text-[#040404] flex justify-center">{item.icon}</div>
          <h4 className="text-xl font-bold text-[#040404]">{item.title}</h4>
          <p className="text-[#040404] text-sm leading-relaxed">{item.description}</p>
          <div className="pt-4 border-t border-[#040404]/20">
            <p className="text-[#040404] font-semibold text-sm">{item.stats}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
