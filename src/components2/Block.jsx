import React, { useState, useEffect } from "react";
import axios from "axios";

const Blocks = () => {
  const [users, setUsers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Xatolik:", error));
  }, []);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-4`}>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="mb-4 px-4 py-2 border rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="grid grid-cols-3 gap-4 max-w-screen-lg mx-auto mt-8">
        {users.map((user, index) => (
          <div 
            key={user.id} 
            className={`p-6 border rounded-lg transition duration-300 ${
              darkMode 
                ? (index === 0 ? "bg-blue-600 text-white" : "border-gray-600") 
                : (index === 0 ? "bg-blue-700 text-white" : "border-gray-300")
            }`}
          >
            <h2 className="font-bold text-lg">{user.name}</h2>
            <p className="text-sm">{user.email}</p>
            <span className="text-4xl font-bold text-blue-400">{String(index + 1).padStart(2, "0")}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blocks;
