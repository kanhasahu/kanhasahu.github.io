import React, { useState } from 'react';
import { ResumeData } from '../types/resume';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';

interface ContactSectionProps {
  data: ResumeData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${data.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section
      id="contact"
      className="resume-section min-h-screen flex items-center p-6 md:p-12 lg:p-16 max-w-[75rem] mx-auto"
    >
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl uppercase font-bold text-[#343a40] mb-8 heading-font tracking-tight">
          Get In Touch
        </h2>

        <p className="text-base md:text-lg text-[#868e96] mb-10 max-w-2xl body-font">
          Interested in discussing enterprise architecture, backend engineering, or new opportunities? Feel free to reach out via direct email, phone, or LinkedIn.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-2xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#BD5D38]/10 text-[#BD5D38] flex items-center justify-center shrink-0">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">Phone</div>
                <a
                  href={`tel:${data.phone.replace(/\s+/g, '')}`}
                  className="text-base font-bold text-gray-900 hover:text-[#BD5D38] transition"
                >
                  {data.phone}
                </a>
                <div className="text-xs text-gray-400 mt-0.5">Available for calls &amp; WhatsApp</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-2xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#BD5D38]/10 text-[#BD5D38] flex items-center justify-center shrink-0">
                <FaEnvelope size={18} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">Email</div>
                <a
                  href={data.socials.email}
                  className="text-base font-bold text-gray-900 hover:text-[#BD5D38] transition"
                >
                  {data.email}
                </a>
                <div className="text-xs text-gray-400 mt-0.5">kanha.sahu@hotmail.com</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-2xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#BD5D38]/10 text-[#BD5D38] flex items-center justify-center shrink-0">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">Location</div>
                <div className="text-base font-bold text-gray-900">{data.address}</div>
                <div className="text-xs text-gray-400 mt-0.5">Open to Remote Roles</div>
              </div>
            </div>

            {/* Social Connection Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#005f93] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-sm"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>
              <a
                href={data.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-black text-white rounded-lg text-xs font-bold uppercase tracking-wider transition shadow-sm"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-xs">
            <h3 className="text-xl font-bold uppercase text-[#343a40] mb-4 heading-font">
              Send a Direct Message
            </h3>

            {sent && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold rounded flex items-center gap-2">
                <FaCheckCircle />
                <span>Opening default email client with your prefilled message!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-[#BD5D38]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-[#BD5D38]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Opportunity / Collaboration"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-[#BD5D38]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Kanha, I would like to discuss..."
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-[#BD5D38]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#BD5D38] hover:bg-[#824027] text-white font-bold uppercase text-xs tracking-wider rounded shadow-sm transition cursor-pointer"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
