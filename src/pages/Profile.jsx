

// const Profile = () => {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen">
//           <h2 className="text-2xl mb-4">Profile</h2>
//           {/* <p>Name: {user.name}</p> */}
//           {/* <p>Email: {user.email}</p> */}
//         </div>
//       );
// }

// export default Profile


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { notification } from "antd";

// const API_URL = "https://api.ashyo.fullstackdev.uz/api";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get(`${API_URL}/profile`, { headers: { Authorization: `Bearer ${token}` } });
//         setUser(res.data);
//       } catch (error) {
//         notification.error({ message: "Ma’lumot yuklanmadi", description: "Iltimos, qayta urinib ko‘ring" });
//         navigate("/login");
//       }
//     };
//     fetchUser();
//   }, [navigate]);

//   return user ? (
//     <div>
//       <h2>Profile</h2>
//       <p>Email: {user.email}</p>
//       <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}>Chiqish</button>
//     </div>
//   ) : <p>Yuklanmoqda...</p>;
// };

// export default Profile;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";

const API_URL = "https://api.ashyo.fullstackdev.uz/api";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token yo‘q");

        const res = await axios.get(`${API_URL}/profile`, { headers: { Authorization: `Bearer ${token}` } });
        setUser(res.data);
      } catch (error) {
        notification.error({ message: "Ma’lumot yuklanmadi", description: "Iltimos, qayta urinib ko‘ring" });
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  return user ? (
    <div>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}>Chiqish</button>
    </div>
  ) : <p>Yuklanmoqda...</p>;
};

export default Profile;
