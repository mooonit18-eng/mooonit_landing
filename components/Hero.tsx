
import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

interface HeroProps {
  onJoinNowClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinNowClick }) => {
  const { content } = useContext(LanguageContext);

  return (
    <section
      className="text-brand-text pt-32 pb-20 md:pt-48 md:pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <h1 id="hero-heading" className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight max-w-3xl text-brand-dark">
            {content.hero.titlePart1}<span className="text-brand-primary">{content.hero.titlePart2}</span>
          </h1>
          <p className="text-lg text-brand-text opacity-80 mb-8 max-w-2xl mx-auto">
            {content.hero.subtitle}
          </p>
           <button
            onClick={onJoinNowClick}
            className="inline-block bg-brand-primary hover:bg-opacity-90 text-white font-bold py-3 px-10 rounded-full text-lg transition-all transform hover:scale-105 duration-300 shadow-lg"
          >
            {content.hero.joinButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;