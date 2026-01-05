import { useState } from "react";
import { Mail, Phone, Linkedin, Instagram, MessageCircle, Globe, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda akan segera saya balas.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-12 lg:py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "#040404" }}
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 lg:mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "#0a0a0a", border: "1px solid #d4ac3c" }}
          >
            <MessageCircle
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
              style={{ color: "#d4ac3c" }}
            />
            <span
              className="text-xs font-medium"
              style={{ color: "#d4ac3c" }}
            >
              Let's Talk Business
            </span>
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 leading-tight px-4"
            style={{ color: "#ffffff" }}
          >
            Ready to <span style={{ color: "#d4ac3c" }}>Transform</span>
            <br />
            Your Digital Presence?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Mari kita diskusikan bagaimana strategi digital marketing yang tepat dapat mengakselerasi pertumbuhan bisnis
            Anda.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column - Form */}
          <div className="order-2 lg:order-1">
            <div className="lg:sticky lg:top-8">
              <div
                className="p-5 sm:p-6 rounded-2xl"
                style={{ backgroundColor: "#0a0a0a", border: "2px solid #1a1a1a" }}
              >
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Start Your Journey</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Isi form di bawah dan saya akan menghubungi Anda dalam 24 jam
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "#d4ac3c" }}
                    >
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 bg-transparent text-white placeholder-gray-600 focus:outline-none transition-all"
                      style={{
                        borderColor: "#1a1a1a",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#d4ac3c";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#1a1a1a";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "#d4ac3c" }}
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 bg-transparent text-white placeholder-gray-600 focus:outline-none transition-all"
                      style={{
                        borderColor: "#1a1a1a",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#d4ac3c";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#1a1a1a";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "#d4ac3c" }}
                    >
                      COMPANY NAME
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="PT. Your Company"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 bg-transparent text-white placeholder-gray-600 focus:outline-none transition-all"
                      style={{
                        borderColor: "#1a1a1a",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#d4ac3c";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#1a1a1a";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "#d4ac3c" }}
                    >
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project goals..."
                      required
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 bg-transparent text-white placeholder-gray-600 focus:outline-none transition-all resize-none"
                      style={{
                        borderColor: "#1a1a1a",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#d4ac3c";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#1a1a1a";
                      }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all group"
                    style={{
                      backgroundColor: "#d4ac3c",
                      color: "#040404",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 8px 30px rgba(212, 172, 60, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    Send Message
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="order-1 lg:order-2 space-y-3 sm:space-y-4">
            {/* Contact Cards */}
            <div className="space-y-3">
              <div
                className="p-4 sm:p-5 rounded-2xl group cursor-pointer transition-all hover:scale-105"
                style={{ backgroundColor: "#0a0a0a", border: "2px solid #1a1a1a" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#d4ac3c")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="p-2.5 sm:p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: "#d4ac3c" }}
                  >
                    <Mail
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "#040404" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm sm:text-base text-white mb-1">Email Me</h4>
                    <p className="text-gray-400 text-xs mb-1.5 sm:mb-2">Best for detailed inquiries</p>
                    <a
                      href="mailto:samuderafadel@gmail.com"
                      className="font-medium text-xs sm:text-sm break-all"
                      style={{ color: "#d4ac3c" }}
                    >
                      samuderafadel@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-4 sm:p-5 rounded-2xl group cursor-pointer transition-all hover:scale-105"
                style={{ backgroundColor: "#0a0a0a", border: "2px solid #1a1a1a" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#d4ac3c")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="p-2.5 sm:p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: "#d4ac3c" }}
                  >
                    <Phone
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "#040404" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm sm:text-base text-white mb-1">Call or WhatsApp</h4>
                    <p className="text-gray-400 text-xs mb-1.5 sm:mb-2">Let's connect instantly</p>
                    <a
                      href="tel:+6281257444623"
                      className="font-medium text-xs sm:text-sm"
                      style={{ color: "#d4ac3c" }}
                    >
                      +62 812-5744-4623
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-4 sm:p-5 rounded-2xl group cursor-pointer transition-all hover:scale-105"
                style={{ backgroundColor: "#0a0a0a", border: "2px solid #1a1a1a" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#d4ac3c")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="p-2.5 sm:p-3 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: "#d4ac3c" }}
                  >
                    <Globe
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "#040404" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm sm:text-base text-white mb-1">Location</h4>
                    <p
                      className="font-medium text-xs sm:text-sm"
                      style={{ color: "#d4ac3c" }}
                    >
                      Banjarbaru, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="p-4 sm:p-5 rounded-2xl"
              style={{ backgroundColor: "#0a0a0a", border: "2px solid #1a1a1a" }}
            >
              <h4 className="text-sm sm:text-base font-bold text-white mb-3 sm:mb-4">Connect on Social</h4>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="https://www.linkedin.com/in/fadelsamudera"
                  className="flex-1 p-3 sm:p-4 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "#1a1a1a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4ac3c")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/fadelsamudera"
                  className="flex-1 p-3 sm:p-4 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "#1a1a1a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4ac3c")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                <a
                  href="https://www.impostmedia.com"
                  className="flex-1 p-3 sm:p-4 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "#1a1a1a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4ac3c")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
