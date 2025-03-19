// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = ({ setUser }) => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Form ma'lumotlarini tekshirish
//     if (!fullName.trim() || !email.trim() || !password.trim()) {
//       alert("Barcha maydonlarni to'ldiring!");
//       return;
//     }

//     try {
//       const response = await axios.post("https://api.ashyo.fullstackdev.uz/auth/register", {
//         fullName: fullName.trim(), // Bo‘sh joylardan tozalandi
//         email: email.trim(),
//         password: password.trim(),
//       });

//       const { accessToken, user } = response.data;

//       localStorage.setItem("accessToken", accessToken);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       navigate("/profile")
//  console.log(response.data.user);
 
//       setUser(user);
//       navigate("/profile");
//     } catch (error) {
//       console.error("Register error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Registration failed!");
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <span>Full Name</span>
//           <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
//         </label>
//         <label>
//           <span>Email</span>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </label>
//         <label>
//           <span>Password</span>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </label>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { notification } from "antd";

// const API_URL = "https://api.ashyo.fullstackdev.uz/api";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     try {
//       await axios.post(`${API_URL}/register`, { email, password });
//       notification.success({ message: "Muvaffaqiyatli ro‘yxatdan o‘tildi" });
//       navigate("/login");
//     } catch (error) {
//       notification.error({ message: "Ro‘yxatdan o‘tish xatosi", description: error.response?.data?.message || "Xatolik yuz berdi" });
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Parol" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleRegister}>Ro‘yxatdan o‘tish</button>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { notification } from "antd";
// // await axios.post(`${API_URL}/register`, { email, password });


// const API_URL = "https://api.ashyo.fullstackdev.uz/api";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     try {
//       await axios.post(`${API_URL}/register`, { email, password });
//       notification.success({ message: "Muvaffaqiyatli ro‘yxatdan o‘tildi" });
//       navigate("/login");
//     } catch (error) {
//       notification.error({ 
//         message: "Xatolik", 
//         description: error.response?.data?.message || "Ro‘yxatdan o‘tishda xatolik yuz berdi" 
//       });
//     }
//   };

//   return (
//     <div>
//       <h2>Ro‘yxatdan o‘tish</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Parol" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleRegister}>Ro‘yxatdan o‘tish</button>
//       <p>Allaqachon hisobingiz bormi? <a href="/login">Kirish</a></p>
//     </div>
//   );
// };

// export default Register;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const Register = () => {
  let [fullname, setFullname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
 

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let response = await axios.post(
        `https://api.ashyo.fullstackdev.uz/auth/register`,
        { fullname, email, password }
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/profile");

      notification.success({
        message: "Ro‘yxatdan o‘tish muvaffaqiyatli",
        description: "Siz tizimga muvaffaqiyatli kirdingiz!",
      });
    } catch (error) {
      notification.error({
        message: "Xatolik yuz berdi",
        description: error.response?.data?.message || "Qaytadan urinib ko‘ring!",
      });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Full name</span>
          <input type="text" onChange={(e) => setFullname(e.target.value)} />
        </label>
        <label>
          <span>Email</span>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;

        