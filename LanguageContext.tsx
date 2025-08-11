
import { createContext } from 'react';
import { englishContent, Content } from './content';

export interface LanguageContextType {
  content: Content;
  toggleLanguage: () => void;
  isTranslating: boolean;
  language: 'en' | 'hi';
}

export const LanguageContext = createContext<LanguageContextType>({
  content: englishContent,
  toggleLanguage: () => {},
  isTranslating: false,
  language: 'en',
});
