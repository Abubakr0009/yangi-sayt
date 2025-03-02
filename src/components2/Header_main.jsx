import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header_main = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      <nav className={`p-2 ${darkMode ? "bg-gray-900 text-white" : "bg-blue-700 text-white"}`}>
        <div className="max-w-screen-xl mx-auto flex justify-center space-x-6">
          <a href="#" className="hover:underline">О компании</a>
          <a href="#" className="hover:underline">Деятельность</a>
          <a href="#" className="hover:underline">Персонал</a>
          <a href="#" className="hover:underline">Клиенту</a>
          <a href="#" className="hover:underline">Акционеру и инвестору</a>
          <a href="#" className="hover:underline">Пресс-центр</a>
          <a href="#" className="hover:underline">Торги</a>
          <a href="#" className="hover:underline">Контакты</a>
        </div>
      </nav>
    </div>
  );
};

export default Header_main;
