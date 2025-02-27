import { createContext, useState, useContext } from "react";

// 1. Context yaratish
const LanguageContext = createContext();

// 2. Provider yaratish
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("uz");

  // Tilni almashtirish funksiyasi
  const changeLanguage = (lang) => {
    setLanguage(lang); // Tilni to‘g‘ridan-to‘g‘ri belgilash
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Custom hook
export const useLanguage = () => useContext(LanguageContext);
