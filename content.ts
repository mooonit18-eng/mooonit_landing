
export const englishContent = {
  header: {
    about: 'About Us',
    services: 'Services',
    contact: 'Contact Us',
    languageToggle: 'हिंदी में देखें',
    languageToggleEN: 'View in English',
  },
  hero: {
    titlePart1: 'First time in India: Sell products online under ',
    titlePart2: 'your own brand name.',
    subtitle: 'Mooonit empowers local fashion shops and boutiques to thrive in the digital world. We build your online presence, so you can focus on what you do best: fashion.',
    joinButton: 'Join Now',
  },
  about: {
    title: 'About Mooonit',
    text: 'Our mission is to bridge the gap between local fashion artisans, shops, and boutiques and the vast online market. We believe in the uniqueness of local businesses and are dedicated to providing them with the digital tools they need to not just survive, but flourish in the age of e-commerce. We handle the tech, so you can keep creating and curating amazing fashion.',
  },
  services: {
    title: 'Our Services',
    card1: {
      title: 'Shop Listing & Catalog',
      description: 'Effortlessly upload and manage your products with our intuitive catalog system. Showcase your collection in style.',
    },
    card2: {
      title: 'Digital Storefront Setup',
      description: "Get a beautiful, custom-branded online store that reflects your brand's unique identity and charm.",
    },
    card3: {
      title: 'Local Promotion Support',
      description: 'We help you reach customers in your area with targeted local marketing and promotion campaigns.',
    },
  },
  contact: {
    title: 'Ready to Join?',
    subtitle: 'Fill out the form below to get your store online.',
    callUs: 'Or call us directly at: 7415743383',
    form: {
      name: 'Name',
      shopName: 'Shop Name',
      contactNumber: 'Contact Number',
      city: 'City',
      productCategory: "Product Category (e.g., Women's Apparel, Accessories)",
      submitButton: 'Submit Inquiry',
    },
    successMessage: 'Thank you for your interest! We will get back to you soon.',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Mooonit. All Rights Reserved.`,
    tagline: 'Helping local fashion shops and boutiques thrive online.',
    founder: 'Founder: Viraj Mahoday',
    contactInfo: 'Contact: 7415743383',
    socials: {
      title: 'Follow Us'
    }
  },
  translation: {
    translating: 'Translating...'
  }
};

export type Content = typeof englishContent;