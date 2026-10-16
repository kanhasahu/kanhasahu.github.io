import React from 'react';
import { ProjectItem } from '../types/resume';
import { FaExternalLinkAlt, FaFolderOpen, FaCheckCircle } from 'react-icons/fa';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section
      id="projects"
      className="resume-section min-h-screen flex items-center p-6 md:p-12 lg:p-16 max-w-[75rem] mx-auto border-b border-gray-200"
    >
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-3xl md:text-5xl uppercase font-bold text-[#343a40] heading-font tracking-tight">
            Key Projects
          </h2>
          <div className="text-sm font-semibold text-[#BD5D38] uppercase tracking-wider mt-1 heading-font">
            Enterprise Platforms &middot; Microservices &middot; High-Throughput APIs
          </div>
        </div>

        <p className="text-base text-[#868e96] mb-8 max-w-3xl body-font">
          Proven track record leading complex technical architectures, travel booking integrations, academic ERP systems, and e-learning platforms.
        </p>

        {/* SPLIT COLUMN LAYOUT */}
        <div className="space-y-6">
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="bg-white border border-gray-200 rounded-xl p-6 lg:p-7 shadow-xs hover:border-[#BD5D38]/40 hover:shadow-sm transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: Project Identity, Client, Role, Tech Stack (5 cols) */}
                <div className="lg:col-span-5 lg:border-r lg:border-gray-100 lg:pr-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FaFolderOpen className="text-[#BD5D38] text-lg shrink-0" />
                      <h3 className="text-xl md:text-2xl font-bold uppercase text-[#343a40] heading-font leading-snug">
                        {proj.title}
                      </h3>
                    </div>

                    {/* Client & Role */}
                    <div className="space-y-1 mb-4 text-xs font-medium text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-500 uppercase text-[0.7rem] tracking-wider w-14">
                          Client:
                        </span>
                        <span className="text-[#BD5D38] font-semibold">{proj.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-500 uppercase text-[0.7rem] tracking-wider w-14">
                          Role:
                        </span>
                        <span className="text-gray-800 font-semibold">{proj.role}</span>
                      </div>
                    </div>

                    {/* Tech Stack Column List */}
                    <div className="mb-4">
                      <div className="text-[0.7rem] uppercase font-bold text-gray-500 tracking-wider mb-2">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[0.72rem] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-amber-50 text-[#824027] border border-amber-200/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Link (Live Platform / Demo only) */}
                  <div className="pt-3 border-t border-gray-100 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                    {proj.demoUrl ? (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#BD5D38] text-white hover:bg-[#824027] rounded shadow-2xs transition"
                      >
                        <FaExternalLinkAlt className="text-[0.65rem]" />
                        <span>Live Platform / Demo</span>
                      </a>
                    ) : (
                      <span className="text-[0.7rem] text-gray-400 font-medium normal-case tracking-normal">
                        Enterprise internal platform
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Column: Architectural Highlights & Key Deliverables (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-3">
                    Architectural Deliverables &amp; Responsibilities
                  </div>
                  <ul className="space-y-3 text-sm text-gray-600 body-font">
                    {proj.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <FaCheckCircle className="text-[#BD5D38] text-xs shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
