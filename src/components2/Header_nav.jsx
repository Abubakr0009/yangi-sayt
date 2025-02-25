import React from "react";
// import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 relative">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <a href="/" className="text-2xl font-bold flex items-center">
          <span className="bg-white text-blue-700 px-2 py-1 rounded font-bold">Q</span>
          uintela
        </a>
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Быстрый поиск по сайту"
            className="w-full p-2 rounded text-black"
          />
          {/* <FaSearch className="absolute right-3 top-3 text-gray-500" /> */}
        </div>
        <div className="flex space-x-4 items-center">
          <a href="#" className="hover:underline">Ru</a>
          <a href="#" className="hover:underline">En</a>
        </div>
      </div>
    </header>
  );
};

export default Header