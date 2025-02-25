import React from "react";

const Blocks = ({ users }) => {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-screen-lg mx-auto mt-8">
      {users.map((user, index) => (
        <div key={user.id} className={`p-6 border rounded-lg ${index === 0 ? 'bg-blue-700 text-white' : 'border-gray-300'}`}>
          <h2 className="font-bold text-lg">{user.name}</h2>
          <p className="text-sm">{user.email}</p>
          <span className="text-4xl font-bold text-blue-400">{String(index + 1).padStart(2, "0")}</span>
        </div>
      ))}
    </div>
  );
};

export default Blocks;
