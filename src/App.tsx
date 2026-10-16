import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { resumeData } from './data/resumeData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  // Scrollspy to automatically highlight navigation items as user scrolls
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        // Add 60px clearance from the top of the screen so the section header is never hidden behind the navbar
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#868e96] antialiased">
      {/* Side / Top Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        avatarUrl={resumeData.avatarUrl}
      />

      {/* Main Content Area */}
      <main className="pt-[54px] lg:pt-0 lg:pl-[17rem] transition-all duration-300">
        <AboutSection
          data={resumeData}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onNavigate={handleNavigate}
        />
        <ExperienceSection items={resumeData.experience} />
        <ProjectsSection projects={resumeData.projects} />
        <SkillsSection
          categories={resumeData.skillCategories}
          coreCompetencies={resumeData.coreCompetencies}
          workflow={resumeData.workflow}
        />
        <EducationSection education={resumeData.education} />
        <CertificationsSection certifications={resumeData.certifications} />
        <ContactSection data={resumeData} />
      </main>

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        data={resumeData}
      />
    </div>
  );
};

export default App;
