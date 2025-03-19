// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { notification } from "antd";

// const API_URL = "https://api.ashyo.fullstackdev.uz"; // Swagger'dan tekshiring

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     if (!email || !password) {
//       return notification.error({ message: "Xatolik", description: "Iltimos, barcha maydonlarni to‘ldiring" });
//     }

//     try {
//       const res = await axios.post(`${API_URL}/login`, { email, password });
//       localStorage.setItem("token", res.data.token);
//       notification.success({ message: "Muvaffaqiyatli", description: "Tizimga kirdingiz!" });
//       navigate("/profile");
//     } catch (error) {
//       notification.error({
//         message: "Login xatosi",
//         description: error.response?.data?.message || "Noto‘g‘ri email yoki parol",
//       });
//     }
//   };

//   // Enter bosganda login qilish
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleLogin();
//     }
//   };

//   return (
//     <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         onKeyDown={handleKeyDown}
//         style={{ display: "block", margin: "10px auto", padding: "8px", width: "100%" }}
//       />
//       <input
//         type="password"
//         placeholder="Parol"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         onKeyDown={handleKeyDown}
//         style={{ display: "block", margin: "10px auto", padding: "8px", width: "100%" }}
//       />
//       <button onClick={handleLogin} style={{ padding: "8px 16px", cursor: "pointer" }}>Kirish</button>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { notification } from "antd";

// const API_URL = "https://api.ashyo.fullstackdev.uz/api";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(`${API_URL}/login`, { email, password });
//       localStorage.setItem("token", res.data.token);
//       navigate("/profile");
//     } catch (error) {
//       notification.error({ 
//         message: "Xatolik", 
//         description: error.response?.data?.message || "Email yoki parol noto‘g‘ri" 
//       });
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Parol" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Kirish</button>
//       <p>Hisobingiz yo‘qmi? <a href="/register">Ro‘yxatdan o‘tish</a></p>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { notification } from "antd";

// const API_URL = "https://api.ashyo.fullstackdev.uz/api"; // Backend API manzili


// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(`${API_URL}/auth/login`, { email, password });
//       localStorage.setItem("token", res.data.token);
//       navigate("/profile");
//     } catch (error) {
//       console.error("Login xatosi:", error.response?.data);
//       notification.error({ 
//         message: "Login xatosi", 
//         description: error.response?.data?.message || "Noto‘g‘ri ma’lumot"
//       });
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Parol" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleLogin}>Kirish</button>
//     </div>
//   );
// };

// export default Login;


import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const Login = () => {
    
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let response = await axios.post(
        `https://api.ashyo.fullstackdev.uz/auth/login`,
        { email, password }
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/profile");

      notification.success({
        message: "Muvaffaqiyatli kirish",
        description: "Siz tizimga muvaffaqiyatli kirdingiz!",
      });
    } catch (error) {
      notification.error({
        message: "Login xatosi",
        description:
          error.response?.data?.message || "Email yoki parol noto‘g‘ri",
      });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default Login;













