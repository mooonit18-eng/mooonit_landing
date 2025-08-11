import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.85-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.849c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.141 0-3.506.012-4.73.068-2.766.127-3.951 1.314-4.08 4.08-.056 1.223-.067 1.587-.067 4.73s.011 3.506.067 4.73c.129 2.766 1.314 3.951 4.08 4.08 1.223.056 1.587.068 4.73.068s3.506-.012 4.73-.068c2.766-.129 3.951-1.314 4.08-4.08.056-1.223.068-1.587.068-4.73s-.012-3.506-.068-4.73c-.129-2.766-1.314-3.951-4.08-4.08C15.506 3.614 15.141 3.604 12 3.604zm0 4.331c-2.392 0-4.331 1.939-4.331 4.331s1.939 4.331 4.331 4.331 4.331-1.939 4.331-4.331-1.939-4.331-4.331-4.331zm0 7.221c-1.595 0-2.89-1.295-2.89-2.89s1.295-2.89 2.89-2.89 2.89 1.295 2.89 2.89-1.295 2.89-2.89 2.89zm4.965-7.337c-.777 0-1.408.631-1.408 1.408s.631 1.408 1.408 1.408 1.408-.631 1.408-1.408-.631-1.408-1.408-1.408z" />
  </svg>
);
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z"/>
  </svg>
);

const Footer: React.FC = () => {
  const { content } = useContext(LanguageContext);

  const contactInfoText = content.footer.contactInfo || "";
  const numberMatch = contactInfoText.match(/[\d\s]+/);
  const number = numberMatch ? numberMatch[0].trim() : "";
  const label = number
    ? contactInfoText.substring(0, contactInfoText.indexOf(number))
    : contactInfoText;
  const telLink = `tel:${number.replace(/\s/g, "")}`;

  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
          {/* Logo and Info */}
          <div className="flex flex-col items-center md:items-start">
          <img
    src="/logo.jpg"
    alt="Mooonit Logo"
    className="h-20 w-auto mr-3 rounded-lg"
  />
            <p className="text-sm mt-4 max-w-xs opacity-90">
              {content.footer.tagline}
            </p>
            <p className="text-sm mt-2 font-semibold text-white">
              {content.footer.founder}
            </p>
            {content.footer.contactInfo && (
              <p className="text-sm mt-2 text-white">
                {label}
                <a href={telLink} className="hover:underline font-semibold">
                  {number}
                </a>
              </p>
            )}
            <p className="text-sm mt-2 text-white">
      mail:{" "}
      <a
        href="mailto:mooonit18@gmail.com"
        className="hover:underline font-semibold"
      >
        mooonit18@gmail.com
      </a>
    </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-white mb-3 text-lg">
              {content.footer.socials.title}
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/_mooonit_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-light opacity-80 hover:text-brand-primary transition-colors duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/people/Viraj-Mahoday/pfbid02dwYew6ppm1TGgzMTMrjtS3RDRgd2KPM5oPFTjvSXBxCTQqqUWbYk2JFhHZ7Qdc1jl/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-brand-light opacity-80 hover:text-brand-primary transition-colors duration-300"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-light border-opacity-20 my-8"></div>

        {/* Bottom Footer */}
        <div className="text-center">
          <p className="text-sm opacity-70">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
