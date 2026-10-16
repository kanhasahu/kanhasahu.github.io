import React from 'react';
import { ExperienceItem } from '../types/resume';

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <section
      id="experience"
      className="resume-section min-h-screen flex items-center p-6 md:p-12 lg:p-16 max-w-[75rem] mx-auto border-b border-gray-200"
    >
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl uppercase font-bold text-[#343a40] mb-12 heading-font tracking-tight flex items-center justify-between">
          <span>Work Experience</span>
          <span className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-widest">
            11+ Years
          </span>
        </h2>

        <div className="space-y-12">
          {items.map((item) => (
            <article
              key={item.id}
              className="pb-8 border-b border-gray-100 last:border-b-0 last:pb-0"
            >
              <h3 className="text-2xl md:text-3xl font-bold uppercase text-[#343a40] leading-snug heading-font mb-1">
                {item.company}
              </h3>

              {/* Subheading row: on mobile, designation is full width with location (left) and duration (right) side by side */}
              <div className="subheading mb-4 text-[#BD5D38] text-sm font-semibold tracking-wide grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-y-2 gap-x-2">
                {/* Designation: full width on mobile, inline on desktop */}
                <div className="col-span-2 sm:col-auto text-sm font-semibold">
                  {item.role}
                </div>

                {/* Location: left-aligned on mobile, placed after designation on desktop */}
                {item.location && (
                  <div className="col-span-1 sm:col-auto flex items-center">
                    <span className="inline-flex items-center justify-center text-xs text-gray-500 font-normal bg-gray-100 px-2 py-0.5 rounded border border-gray-200 leading-normal">
                      {item.location}
                    </span>
                  </div>
                )}

                {/* Duration: right-aligned on mobile, matched in size and vertically centered with location */}
                <div className={`col-span-1 sm:col-auto flex items-center justify-end sm:ml-auto ${!item.location ? 'col-start-2' : ''}`}>
                  <span className="inline-flex items-center justify-center text-xs sm:text-sm font-bold text-[#BD5D38] bg-gray-100 border border-gray-200 px-2 py-0.5 sm:px-3 sm:py-1 rounded leading-normal text-center">
                    {item.date}
                  </span>
                </div>
              </div>

              <ul className="list-disc list-outside space-y-2.5 text-[#868e96] text-sm md:text-base ml-5 body-font">
                {item.bullets.map((bullet, idx) => {
                  // Check if bullet contains a bold title prefix (e.g. "Microservices & Agile Delivery:")
                  const colonIndex = bullet.indexOf(':');
                  const hasPrefix = colonIndex > 0 && colonIndex < 40;
                  if (hasPrefix) {
                    const prefix = bullet.substring(0, colonIndex + 1);
                    const rest = bullet.substring(colonIndex + 1);
                    return (
                      <li key={idx} className="leading-relaxed">
                        <strong className="text-gray-800 font-semibold">{prefix}</strong>
                        <span>{rest}</span>
                      </li>
                    );
                  }
                  return (
                    <li key={idx} className="leading-relaxed">
                      {bullet}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
