import React, { useState } from "react";
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
    console.log("Form submitted:", formData);
    alert("Terima kasih! Pesan Anda akan segera saya balas.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "#040404" }}
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: "#0a0a0a", border: "1px solid #d4ac3c" }}
          >
            <MessageCircle
              className="w-3.5 h-3.5"
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
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ color: "#ffffff" }}
          >
            Ready to <span style={{ color: "#d4ac3c" }}>Transform</span>
            <br />
            Your Digital Presence?
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Mari kita diskusikan bagaimana strategi digital marketing yang tepat dapat mengakselerasi pertumbuhan bisnis
            Anda.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Form */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-8">
              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#0a0a0a", border: "2px solid #1a1a1a" }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Start Your Journey</h3>
                  <p className="text-gray-400 text-sm">Isi form di bawah dan saya akan menghubungi Anda dalam 24 jam</p>
                </div>

                <div className="space-y-4">
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
                      className="w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white placeholder-gray-600 focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white placeholder-gray-600 focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white placeholder-gray-600 focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 rounded-lg border-2 bg-transparent text-white placeholder-gray-600 focus:outline-none transition-all resize-none"
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
                    className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all group"
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
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="order-1 lg:order-2 space-y-4">
            {/* Contact Cards */}
            <div className="space-y-3">
              <div
                className="p-5 rounded-2xl group cursor-pointer transition-all hover:scale-105"
                style={{ backgroundColor: "#0a0a0a", border: "2px solid #1a1a1a" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#d4ac3c")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: "#d4ac3c" }}
                  >
                    <Mail
                      className="w-5 h-5"
                      style={{ color: "#040404" }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-white mb-1">Email Me</h4>
                    <p className="text-gray-400 text-xs mb-2">Best for detailed inquiries</p>
                    <a
                      href="mailto:samuderafadel@gmail.com"
                      className="font-medium text-sm"
                      style={{ color: "#d4ac3c" }}
                    >
                      samuderafadel@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-5 rounded-2xl group cursor-pointer transition-all hover:scale-105"
                style={{ backgroundColor: "#0a0a0a", border: "2px solid #1a1a1a" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#d4ac3c")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: "#d4ac3c" }}
                  >
                    <Phone
                      className="w-5 h-5"
                      style={{ color: "#040404" }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-white mb-1">Call or WhatsApp</h4>
                    <p className="text-gray-400 text-xs mb-2">Let's connect instantly</p>
                    <a
                      href="tel:+6281257444623"
                      className="font-medium text-sm"
                      style={{ color: "#d4ac3c" }}
                    >
                      +62 812-5744-4623
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-5 rounded-2xl group cursor-pointer transition-all hover:scale-105"
                style={{ backgroundColor: "#0a0a0a", border: "2px solid #1a1a1a" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#d4ac3c")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: "#d4ac3c" }}
                  >
                    <Globe
                      className="w-5 h-5"
                      style={{ color: "#040404" }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base text-white mb-1">Location</h4>
                    <p
                      className="font-medium text-sm"
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
              className="p-5 rounded-2xl"
              style={{ backgroundColor: "#0a0a0a", border: "2px solid #1a1a1a" }}
            >
              <h4 className="text-base font-bold text-white mb-4">Connect on Social</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex-1 p-4 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "#1a1a1a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4ac3c")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="flex-1 p-4 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "#1a1a1a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4ac3c")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="flex-1 p-4 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ backgroundColor: "#1a1a1a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4ac3c")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
                >
                  <Globe className="w-5 h-5 text-white" />
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
