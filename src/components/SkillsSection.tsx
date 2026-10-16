import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { SkillCategory } from '../types/resume';

interface SkillsSectionProps {
  categories: SkillCategory[];
  coreCompetencies: string[];
  workflow: string[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories,
  coreCompetencies,
  workflow,
}) => {
  return (
    <section
      id="skills"
      className="resume-section min-h-screen flex items-center p-6 md:p-12 lg:p-16 max-w-[75rem] mx-auto border-b border-gray-200"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-5xl uppercase font-bold text-[#343a40] mb-2 heading-font tracking-tight">
            Skills &amp; Competencies
          </h2>
          <div className="text-xs md:text-sm text-[#868e96]">
            Structured technical proficiencies categorized across engineering domains
          </div>
        </div>

        {/* TWO-COLUMN MATRIX (Single clean layout) */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs mb-12">
          <div className="grid grid-cols-12 bg-gray-100 px-6 py-3 border-b border-gray-200 font-bold uppercase text-xs tracking-wider text-gray-700">
            <div className="col-span-12 md:col-span-4">Technical Domain</div>
            <div className="col-span-12 md:col-span-8">Skills, Frameworks &amp; Tools</div>
          </div>
          <div className="divide-y divide-gray-100">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 px-6 py-3.5 hover:bg-gray-50/80 transition-colors items-center"
              >
                <div className="col-span-12 md:col-span-4 font-bold text-xs uppercase text-gray-800 tracking-wider heading-font mb-1.5 md:mb-0">
                  <span className="text-[#BD5D38] mr-2 font-bold">&bull;</span>
                  {cat.category}
                </div>
                <div className="col-span-12 md:col-span-8 flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-800 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies Badges */}
        <div className="subheading mb-4 text-[#868e96] text-base font-semibold tracking-wider">
          Core Architectural Competencies
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12">
          {coreCompetencies.map((comp, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-3 bg-amber-50/60 border border-amber-200/70 rounded text-xs md:text-sm font-semibold text-gray-800"
            >
              <span className="w-2 h-2 rounded-full bg-[#BD5D38] shrink-0"></span>
              <span>{comp}</span>
            </div>
          ))}
        </div>

        {/* Workflow & Delivery Standards */}
        <div className="subheading mb-4 text-[#868e96] text-base font-semibold tracking-wider">
          Engineering Workflow &amp; Delivery Standards
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 body-font text-sm md:text-base text-[#868e96]">
          {workflow.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded p-3"
            >
              <span className="text-[#BD5D38] text-base shrink-0">
                <FaCheck />
              </span>
              <span className="text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
