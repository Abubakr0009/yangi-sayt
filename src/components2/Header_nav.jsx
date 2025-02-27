import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
// import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
//   const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-blue-700 text-white"}`}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <a href="/" className="text-2xl font-bold flex items-center">
          <span className="bg-white text-blue-700 px-2 py-1 rounded font-bold">Q</span>
          uintela
        </a>
        <div className="flex space-x-4 items-center">
          {/* <button onClick={() => toggleLanguage("ru")} className="hover:underline">Ru</button>/ */}
          {/* <button onClick={() => toggleLanguage("uz")} className="hover:underline">Uz</button> */}
          <button onClick={toggleTheme} className="p-2 border rounded">
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;