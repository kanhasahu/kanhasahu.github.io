import React from 'react';
import { FaTimes, FaPrint, FaDownload, FaFileAlt } from 'react-icons/fa';
import { ResumeData } from '../types/resume';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ResumeData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPlain = () => {
    const textContent = `
${data.name.first} ${data.name.last}
${data.headline}
Location: ${data.address}
Phone: ${data.phone}
Email: ${data.email}
LinkedIn: ${data.socials.linkedin}
GitHub: ${data.socials.github}

LANGUAGES
${data.languages.map((l) => `- ${l.language}: ${l.proficiency}`).join('\n')}

LINKEDIN PROFILE & ENDORSED SKILLS
- Profile: ${data.socials.linkedin}
- Endorsed: ${data.linkedinHighlights.endorsedSkills.join(', ')}

PROFESSIONAL SUMMARY
${data.bio}

WORK EXPERIENCE
${data.experience
  .map(
    (exp) => `
- ${exp.role} | ${exp.company} (${exp.location || 'Remote'}) [${exp.date}]
${exp.bullets.map((b) => '  * ' + b).join('\n')}`
  )
  .join('\n')}

KEY PROJECTS MANAGED
${data.projects
  .map(
    (p) => `
- ${p.title} (Client: ${p.client})
  Role: ${p.role}
  Tech Stack: ${p.techStack.join(', ')}
${p.bullets.map((b) => '  * ' + b).join('\n')}`
  )
  .join('\n')}

TECHNICAL SKILLS
${data.skillCategories.map((c) => `${c.category}: ${c.skills.join(', ')}`).join('\n')}

CORE COMPETENCIES
${data.coreCompetencies.join(' | ')}

EDUCATION
${data.education
  .map(
    (edu) => `
- ${edu.degree} in ${edu.field}
  ${edu.institution} (${edu.date}) - ${edu.percentage}`
  )
  .join('\n')}

CERTIFICATIONS
${data.certifications
  .map(
    (cert) => `
- ${cert.title} - ${cert.issuer} (${cert.date})`
  )
  .join('\n')}
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${data.name.first}_${data.name.last}_Senior_Software_Engineer_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs no-print animate-fadeIn">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-gray-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#BD5D38] text-white">
          <div className="flex items-center gap-2">
            <FaFileAlt className="text-xl" />
            <h3 className="font-bold text-lg uppercase tracking-wider text-white">
              {data.name.first} {data.name.last} &mdash; Official Resume
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded transition cursor-pointer"
            aria-label="Close"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Modal Body Preview */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-gray-700 text-sm">
          <div>
            <h4 className="text-2xl font-bold uppercase text-[#343a40] heading-font leading-none">
              {data.name.first}{' '}
              <span className="text-[#BD5D38]">{data.name.last}</span>
            </h4>
            <div className="text-sm font-semibold text-gray-800 mt-1 uppercase heading-font">
              {data.headline}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {data.address} &bull; {data.phone} &bull; {data.email}
            </p>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed text-justify">
              {data.bio}
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Work Experience */}
          <div>
            <h5 className="font-bold uppercase text-xs tracking-wider text-[#BD5D38] mb-3">
              Work Experience
            </h5>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-gray-900 text-sm">
                      {exp.role} &mdash; {exp.company}
                    </span>
                    <span className="text-xs text-[#BD5D38] font-semibold">
                      {exp.date}
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-xs text-gray-600">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Key Projects */}
          <div>
            <h5 className="font-bold uppercase text-xs tracking-wider text-[#BD5D38] mb-3">
              Key Projects Managed
            </h5>
            <div className="space-y-3">
              {data.projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="font-bold text-gray-900">
                    {proj.title} <span className="text-gray-500 font-normal">({proj.client})</span>
                  </div>
                  <div className="text-[0.7rem] text-[#824027] font-semibold mb-1">
                    Tech: {proj.techStack.join(', ')}
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-gray-600">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Education & Certification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <h5 className="font-bold uppercase tracking-wider text-[#BD5D38] mb-2">
                Education
              </h5>
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="font-bold text-gray-900">{edu.degree} in {edu.field}</div>
                  <div className="text-gray-600">{edu.institution}</div>
                  <div className="text-gray-500">{edu.date} &bull; {edu.percentage}</div>
                </div>
              ))}
            </div>

            <div>
              <h5 className="font-bold uppercase tracking-wider text-[#BD5D38] mb-2">
                Certification
              </h5>
              {data.certifications.map((c) => (
                <div key={c.id}>
                  <div className="font-bold text-gray-900">{c.title}</div>
                  <div className="text-gray-600">{c.issuer} &bull; {c.date}</div>
                </div>
              ))}

              <h5 className="font-bold uppercase tracking-wider text-[#BD5D38] mt-3 mb-1">
                Languages
              </h5>
              <div className="text-gray-600 text-xs">
                {data.languages.map((l) => `${l.language} (${l.proficiency.split(' ')[0]})`).join(' · ')}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Export for recruitment &amp; ATS evaluation
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadPlain}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 rounded text-xs font-semibold shadow-2xs cursor-pointer"
            >
              <FaDownload size={12} />
              <span>Plain Text Format</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#BD5D38] text-white hover:bg-[#824027] rounded text-xs font-semibold shadow-2xs cursor-pointer transition"
            >
              <FaPrint size={12} />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
