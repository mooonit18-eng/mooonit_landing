
import React, { forwardRef, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
    const { content } = useContext(LanguageContext);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you would handle form submission here.
        alert(content.contact.successMessage);
        (e.target as HTMLFormElement).reset();
    };

    const callUsText = content.contact.callUs || '';
    const numberMatch = callUsText.match(/[\d\s]+/);
    const number = numberMatch ? numberMatch[0].trim() : '';
    const label = number ? callUsText.substring(0, callUsText.indexOf(number)) : callUsText;
    const telLink = `tel:${number.replace(/\s/g, '')}`;
    
  return (
    <section ref={ref} id="contact" className="py-20 bg-brand-accent-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-brand-dark">{content.contact.title}</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
          <p className="text-lg text-brand-text opacity-90 max-w-2xl mx-auto mt-4">
            {content.contact.subtitle}
          </p>
          {content.contact.callUs && (
            <p className="text-lg text-brand-text opacity-90 max-w-2xl mx-auto mt-4">
              {label}
              <a href={telLink} className="font-semibold text-brand-primary hover:underline">{number}</a>
            </p>
          )}
        </div>
        
         
         <div className="text-center mt-8">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScr7LUvQW-097j0BhzvzK-NoyVRdjolrcz-XutuWFqhFJgIuA/viewform?usp=preview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-primary hover:bg-opacity-90 text-white font-bold py-3 px-10 rounded-full text-lg transition-all transform hover:scale-105 duration-300 shadow-lg"
          >
            Register Now
          </a>
        </div>
        
        
        
  
      </div>
      
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;