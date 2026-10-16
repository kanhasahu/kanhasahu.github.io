import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  avatarUrl: string;
}

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onNavigate,
  avatarUrl,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Navbar (Visible < 992px) */}
      <nav
        id="sideNav-mobile"
        className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#BD5D38] text-white px-4 h-[54px] flex items-center justify-between shadow-md"
      >
        <button
          onClick={() => handleLinkClick('about')}
          className="text-white font-bold tracking-wider uppercase text-base sm:text-lg text-left cursor-pointer"
        >
          Kanha Sahu
        </button>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 rounded transition cursor-pointer"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile Collapsible Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[54px] left-0 right-0 z-40 bg-[#BD5D38] border-t border-white/10 shadow-xl px-4 py-3 animate-fadeIn">
          <ul className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left py-2 px-3 rounded-lg uppercase tracking-wider text-sm transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-black/20 text-white font-black shadow-inner border border-white/20'
                        : 'text-white/80 hover:text-white hover:bg-black/10 font-bold'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Desktop Fixed Left Sidebar (Visible >= 992px) */}
      <nav
        id="sideNav"
        className="hidden lg:flex fixed top-0 left-0 w-[17rem] h-screen bg-[#BD5D38] z-50 flex-col items-center justify-between p-6 text-center select-none shadow-lg"
      >
        {/* Profile Avatar */}
        <div
          className="cursor-pointer group pt-4"
          onClick={() => handleLinkClick('about')}
          title="Kanha Sahu - Senior Software Engineer"
        >
          <img
            src={avatarUrl}
            alt="Kanha Sahu"
            className="w-36 h-36 rounded-full mx-auto object-cover border-8 border-white/20 shadow-md group-hover:border-white/40 transition duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/img/profile.jpg';
            }}
          />
          <div className="text-white font-extrabold uppercase tracking-widest text-lg mt-3 heading-font">
            Kanha Sahu
          </div>
          <div className="text-white/80 text-xs font-medium tracking-wide">
            Sr. Software Engineer
          </div>
        </div>

        {/* Navigation Links with Rounded Highlighted Box for Active Item */}
        <ul className="w-full flex flex-col space-y-2.5 my-auto px-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full block py-2.5 px-4 rounded-lg uppercase tracking-wider text-[0.92rem] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-black/20 text-white font-black shadow-inner border border-white/20'
                      : 'text-white/75 hover:text-white hover:bg-black/10 font-bold'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Sidebar Footer */}
        <div className="text-white/60 text-[0.7rem] tracking-widest uppercase font-semibold pb-2">
          11+ Years Exp &bull; PHP &bull; Python &bull; AWS
        </div>
      </nav>
    </>
  );
};
