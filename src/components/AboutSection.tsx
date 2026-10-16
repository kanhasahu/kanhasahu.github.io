import React from 'react';
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from 'react-icons/fa';
import { ResumeData } from '../types/resume';

interface AboutSectionProps {
  data: ResumeData;
  onOpenResumeModal: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  data,
  onOpenResumeModal,
}) => {
  return (
    <section
      id="about"
      className="resume-section min-h-screen flex items-center p-6 md:p-12 lg:p-16 max-w-[75rem] mx-auto border-b border-gray-200"
    >
      <div className="w-full">
        {/* Name Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] uppercase font-bold tracking-tight text-[#343a40] leading-none mb-2 heading-font">
          {data.name.first}{' '}
          <span className="text-[#BD5D38]">{data.name.last}</span>
        </h1>

        {/* Professional Headline */}
        <div className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide uppercase mb-6 heading-font">
          {data.headline}
        </div>


        {/* Bio / Summary */}
        <p className="text-base md:text-lg text-[#868e96] leading-relaxed mb-8 max-w-4xl body-font text-justify md:text-left">
          {data.bio}
        </p>

        {/* Highlights Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 max-w-3xl">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-2xl font-extrabold text-[#BD5D38] heading-font">11+</div>
            <div className="text-xs uppercase text-gray-600 font-semibold tracking-wider">Years Experience</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-2xl font-extrabold text-[#BD5D38] heading-font">400+</div>
            <div className="text-xs uppercase text-gray-600 font-semibold tracking-wider">Airline APIs</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-2xl font-extrabold text-[#BD5D38] heading-font">Microservices</div>
            <div className="text-xs uppercase text-gray-600 font-semibold tracking-wider">Architecture</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
            <div className="text-2xl font-extrabold text-[#BD5D38] heading-font">AWS &amp; Docker</div>
            <div className="text-xs uppercase text-gray-600 font-semibold tracking-wider">Cloud &amp; CI/CD</div>
          </div>
        </div>

        {/* Unified Action Buttons (2x2 grid on mobile, flex row on sm+) */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-3 max-w-lg sm:max-w-none">
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#BD5D38] hover:bg-[#824027] text-white rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition shadow-sm cursor-pointer"
          >
            <FaDownload className="text-xs" />
            <span>Download</span>
          </button>

          <a
            href={data.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0077b5] hover:bg-[#005f93] text-white rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition shadow-sm"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>

          <a
            href={data.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-black text-white rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition shadow-sm"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href={data.socials.email}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-300 hover:border-[#BD5D38] text-gray-800 hover:text-[#BD5D38] rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition shadow-xs"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
