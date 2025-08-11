
import React, { useState, useRef, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { englishContent, Content } from './content';
import { LanguageContext } from './LanguageContext';
import { GoogleGenAI, Type } from "@google/genai";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [content, setContent] = useState<Content>(englishContent);
  const [isTranslating, setIsTranslating] = useState(false);
  const hindiContentCache = useRef<Content | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const translateContent = useCallback(async () => {
    if (hindiContentCache.current) {
      setContent(hindiContentCache.current);
      setLanguage('hi');
      return;
    }

    setIsTranslating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Translate the string values in this JSON object to Hindi. Return a valid JSON object that strictly follows the provided schema. Do not translate the keys. JSON object to translate: ${JSON.stringify(englishContent)}`;

      const responseSchema = {
        type: Type.OBJECT,
        properties: {
          header: { type: Type.OBJECT, properties: { about: { type: Type.STRING }, services: { type: Type.STRING }, contact: { type: Type.STRING }, languageToggle: { type: Type.STRING }, languageToggleEN: { type: Type.STRING } } },
          hero: { type: Type.OBJECT, properties: { titlePart1: { type: Type.STRING }, titlePart2: { type: Type.STRING }, subtitle: { type: Type.STRING }, joinButton: { type: Type.STRING } } },
          about: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, text: { type: Type.STRING } } },
          services: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, card1: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, description: { type: Type.STRING } } }, card2: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, description: { type: Type.STRING } } }, card3: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, description: { type: Type.STRING } } } } },
          contact: { type: Type.OBJECT, properties: { title: { type: Type.STRING }, subtitle: { type: Type.STRING }, callUs: { type: Type.STRING }, form: { type: Type.OBJECT, properties: { name: { type: Type.STRING }, shopName: { type: Type.STRING }, contactNumber: { type: Type.STRING }, city: { type: Type.STRING }, productCategory: { type: Type.STRING }, submitButton: { type: Type.STRING } } }, successMessage: { type: Type.STRING } } },
          footer: { 
            type: Type.OBJECT, 
            properties: { 
              copyright: { type: Type.STRING }, 
              tagline: { type: Type.STRING },
              founder: { type: Type.STRING },
              contactInfo: { type: Type.STRING },
              socials: { 
                type: Type.OBJECT, 
                properties: { 
                  title: { type: Type.STRING } 
                } 
              }
            } 
          },
          translation: { type: Type.OBJECT, properties: { translating: { type: Type.STRING } } },
        },
      };

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: responseSchema,
        }
      });

      const translatedText = response.text.trim();
      const translatedJson = JSON.parse(translatedText);
      
      // Basic validation
      if (!translatedJson.header || !translatedJson.hero) {
        throw new Error("Translated JSON has incorrect structure.");
      }

      hindiContentCache.current = translatedJson as Content;
      setContent(translatedJson as Content);
      setLanguage('hi');
    } catch (error) {
      console.error('Translation failed:', error);
      alert('Sorry, we couldn\'t translate the page. Please try again later.');
    } finally {
      setIsTranslating(false);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    if (language === 'en') {
      translateContent();
    } else {
      setContent(englishContent);
      setLanguage('en');
    }
  }, [language, translateContent]);

  return (
    <LanguageContext.Provider value={{ content, toggleLanguage, isTranslating, language }}>
      <div className="min-h-screen bg-brand-background">
        <Header
          onAboutClick={() => scrollToSection(aboutRef)}
          onServicesClick={() => scrollToSection(servicesRef)}
          onContactClick={() => scrollToSection(contactRef)}
        />
        <main>
          <Hero onJoinNowClick={() => scrollToSection(contactRef)} />
          <About ref={aboutRef} />
          <Services ref={servicesRef} />
          <Contact ref={contactRef} />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;