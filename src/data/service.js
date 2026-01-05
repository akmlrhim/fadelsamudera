import { Building2, MessageSquare, BarChart3, Users, Presentation, Handshake, BookOpen } from "lucide-react";

export const impostService = {
  icon: <Building2 size={48} />,
  title: "Layanan Impost Media",
  description: "Agensi digital marketing dengan fokus pada hasil omzet nyata",
  details:
    "Full-service digital marketing agency yang berani mengikat pekerjaan pada hasil. Mulai dari strategy, execution, hingga reporting transparan dengan jaminan uang kembali bila target tidak tercapai.",
  link: "https://impostmedia.com/",
  isExternal: true,
};

export const personalServices = [
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
      "Topik meliputi digital marketing berbasis sistem, growth mindset, risk & decision making, dan scale tanpa menghancurkan cashflow.",
  },
  {
    icon: <Handshake size={32} />,
    title: "Strategic Partnership",
    subtitle: "Selective – Case by Case",
    description: "Joint project & revenue sharing",
    details: "Kolaborasi strategis untuk investor, mitra ekspansi, atau bisnis yang ingin JV.",
  },
];

export const educationService = {
  icon: <BookOpen size={48} />,
  title: "Kolaborasi Akademik & Industri",
  subtitle: "Academic–Industry Collaboration",
  description: "Program kolaborasi institusi pendidikan dengan industri",
  details:
    "Praktisi industri sebagai pengajar, penyelarasan kurikulum berbasis industri, project terapan, dan pengembangan kompetensi.",
};
