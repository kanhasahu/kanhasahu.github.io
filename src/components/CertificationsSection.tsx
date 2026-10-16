import React from 'react';
import { CertificationItem } from '../types/resume';
import { FaCertificate, FaAward, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

interface CertificationsSectionProps {
  certifications: CertificationItem[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
}) => {
  return (
    <section
      id="certifications"
      className="resume-section min-h-[70vh] flex items-center p-6 md:p-12 lg:p-16 max-w-[75rem] mx-auto border-b border-gray-200"
    >
      <div className="w-full">
        <div className="flex items-center gap-3 mb-4">
          <FaCertificate className="text-[#BD5D38] text-3xl" />
          <h2 className="text-3xl md:text-5xl uppercase font-bold text-[#343a40] heading-font tracking-tight">
            Certifications
          </h2>
        </div>

        <p className="text-base text-[#868e96] mb-8 max-w-2xl body-font">
          Continuous professional upskilling in AI-assisted software engineering, cloud architecture, and modern development tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-gray-200 hover:border-[#BD5D38]/50 rounded-xl p-6 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#BD5D38]/10 text-[#BD5D38] flex items-center justify-center shrink-0">
                      <FaAward size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg md:text-xl text-gray-900 leading-snug heading-font">
                        {cert.title}
                      </h3>
                      <div className="text-xs uppercase font-bold tracking-wider text-[#BD5D38] mt-1">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                  <span className="text-[0.7rem] uppercase font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full shrink-0 flex items-center gap-1">
                    <FaCheckCircle size={10} />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="text-xs text-gray-500 mt-2 flex items-center gap-2">
                  <span className="font-semibold text-gray-700">Completion:</span>
                  <span>{cert.date}</span>
                </div>
              </div>

              {cert.credentialUrl && (
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[0.7rem] text-gray-400 uppercase tracking-wider">
                    Certificate of Completion
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#BD5D38] hover:text-[#824027] transition"
                  >
                    <span>View Credential</span>
                    <FaExternalLinkAlt className="text-[0.65rem]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
