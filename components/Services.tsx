import React, { forwardRef, useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const StoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-brand-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);
const CatalogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-brand-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
);
const MarketingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-brand-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.353a1.76 1.76 0 013.417-.592zM11 5.882V5.882a2 2 0 012-2h2a2 2 0 012 2v1.118a2 2 0 01-1.333 1.848l-1.333.667a2 2 0 00-1.333 1.848V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.353a1.76 1.76 0 013.417-.592z"
    />
  </svg>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-serif font-bold mb-2 text-brand-dark">
      {title}
    </h3>
    <p className="text-brand-text opacity-80">{description}</p>
  </div>
);

const Services = forwardRef<HTMLDivElement>((props, ref) => {
  const { content } = useContext(LanguageContext);
  return (
    <section ref={ref} id="services" className="py-20 bg-brand-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-brand-dark">
            {content.services.title}
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<CatalogIcon />}
            title={content.services.card1.title}
            description={content.services.card1.description}
          />
          <ServiceCard
            icon={<StoreIcon />}
            title={content.services.card2.title}
            description={content.services.card2.description}
          />
          <ServiceCard
            icon={<MarketingIcon />}
            title={content.services.card3.title}
            description={content.services.card3.description}
          />
        </div>
      </div>
 <div className="flex flex-col md:flex-row items-center mt-12 gap-8 ml-0 md:ml-12 lg:ml-24 xl:ml-32">
  <img
    src="../public/happy.jpg"
    alt="Happy"
    className="h-48 w-auto rounded-lg shadow mb-4 md:mb-0 md:mr-6"
  />
  <p className="text-xl font-serif text-brand-primary font-bold text-center md:text-left">
    Mooonit से जुड़ने के बाद बिज़नेस में नई जान आ गई! हमारे प्रोडक्ट अब ऑनलाइन दिखते हैं और नए ग्राहक आसानी से पहुँचते हैं — सच में, Mooonit फायदे का सौदा है!
  </p>
</div>
    </section>
  );
});

Services.displayName = "Services";
export default Services;
