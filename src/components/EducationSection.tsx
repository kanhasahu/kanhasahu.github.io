import React from 'react';
import { EducationItem } from '../types/resume';
import { FaGraduationCap } from 'react-icons/fa';

interface EducationSectionProps {
  education: EducationItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section
      id="education"
      className="resume-section min-h-[70vh] flex items-center p-6 md:p-12 lg:p-16 max-w-[75rem] mx-auto border-b border-gray-200"
    >
      <div className="w-full">
        <div className="flex items-center gap-3 mb-8">
          <FaGraduationCap className="text-[#BD5D38] text-3xl" />
          <h2 className="text-3xl md:text-5xl uppercase font-bold text-[#343a40] heading-font tracking-tight">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:justify-between items-start bg-white border border-gray-200 rounded-xl p-6 lg:p-8 shadow-xs hover:border-[#BD5D38]/40 transition-all"
            >
              <div className="flex-1 pr-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold uppercase text-[#343a40] leading-snug heading-font">
                  {item.institution}
                </h3>
                <div className="subheading mb-1 text-[#BD5D38] text-lg font-semibold tracking-wide">
                  {item.degree}
                </div>
                {item.field && (
                  <div className="text-gray-700 font-medium text-base body-font mt-1">
                    {item.field}
                  </div>
                )}
                {item.percentage && (
                  <div className="text-xs font-semibold text-gray-600 mt-3 bg-gray-100 px-3 py-1 rounded inline-block border border-gray-200">
                    {item.percentage}
                  </div>
                )}
              </div>

              <div className="mt-3 md:mt-0 text-left md:text-right md:min-w-[14rem] shrink-0">
                <span className="inline-block px-3.5 py-1.5 bg-gray-100 border border-gray-200 rounded text-[#BD5D38] font-bold text-sm md:text-base">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
