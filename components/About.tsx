import React, { forwardRef, useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const { content } = useContext(LanguageContext);
  return (
    <section ref={ref} id="about" className="py-20 bg-brand-accent-bg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4 text-brand-dark">
          {content.about.title}
        </h2>
        <div className="w-24 h-1 bg-brand-primary mx-auto mb-8"></div>
        <p className="text-lg text-brand-text opacity-90 max-w-3xl mx-auto leading-relaxed">
          {content.about.text}
        </p>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
