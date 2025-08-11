import React, { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";

interface HeaderProps {
  onAboutClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
}

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Header: React.FC<HeaderProps> = ({
  onAboutClick,
  onServicesClick,
  onContactClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { content, toggleLanguage, isTranslating, language } =
    useContext(LanguageContext);

  const handleLinkClick = (handler: () => void) => {
    handler();
    setIsMenuOpen(false);
  };

  const navLinks = (
    <>
      <button
        onClick={() => handleLinkClick(onAboutClick)}
        className="text-brand-light hover:text-white transition-colors duration-300 py-2"
      >
        {content.header.about}
      </button>
      <button
        onClick={() => handleLinkClick(onServicesClick)}
        className="text-brand-light hover:text-white transition-colors duration-300 py-2"
      >
        {content.header.services}
      </button>
      <button
        onClick={() => handleLinkClick(onContactClick)}
        className="text-brand-light hover:text-white transition-colors duration-300 py-2"
      >
        {content.header.contact}
      </button>
    </>
  );

  return (
    <header className="bg-brand-dark text-brand-light shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
    <div className="text-2xl font-bold">
   <img
    src="/logo.jpg"
    alt="Mooonit Logo"
    className="h-20 w-auto mr-3 rounded-lg"
  />
</div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks}
          <button
            onClick={toggleLanguage}
            disabled={isTranslating}
            className="bg-brand-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-wait"
            aria-live="polite"
          >
            {isTranslating
              ? content.translation.translating
              : language === "en"
              ? content.header.languageToggle
              : content.header.languageToggleEN}
          </button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-light focus:outline-none"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-4">
            {navLinks}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              disabled={isTranslating}
              className="bg-brand-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-wait mt-2"
              aria-live="polite"
            >
              {isTranslating
                ? content.translation.translating
                : language === "en"
                ? content.header.languageToggle
                : content.header.languageToggleEN}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
