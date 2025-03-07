// CRUD
// import React, {useState} from "react";
// import { Navigate , BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BookList from "./components3/Booklist";
// import AddBook from "./components3/Addbook";
// import EditBook from "./components3/EditBook";

// const App = () => {
//   console.log("App ishladi");

//   const isAuthenticated = () => {
//     return localStorage.getItem("token") !== null; // 🔐 Token mavjudligini tekshiradi
//   };

//   const ProtectedRoute = ({ children }) => {
//     return isAuthenticated() ? children : <Navigate to="/" />;
//   };

//   return (
//     <Router>
//       <div>
//         <h1 style={{ textAlign: "center" }}>📚 Kitoblar CRUD App</h1>
//         <Routes>
//           <Route path="/" element={<BookList/>}/>
//           <Route path="/add" element={<ProtectedRoute><AddBook/></ProtectedRoute>}/>
//           <Route path="/edit/:id" element={<EditBook/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// SAYT KO`K

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Header_nav from "./components2/Header_nav";
// import Header_main from "./components2/Header_main";
// import Section from "./components2/Section";
// import Footer from "./components2/Footer";
// import Main from "./components2/Main";
// import Block from "./components2/Block";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data.slice(0, 6))); // Faqat 6 ta user olish
//   }, []);

//   return (
//     <>
//       <Header_main/>
//       <Header_nav/>
//       <Main/>
//       <Block users={users} /> {/* Blocks komponentiga users ni prop sifatida uzatish */}
//       <Section />
//       <Footer />
//     </>
//   );
// }

// export default App;

// DARK MODE
// import React from "react";
// import { ThemeProvider } from "./context/ThemeContext";
// import { LanguageProvider } from "./context/LanguageContext";
// // import Header from "./components/Header";
// // import Main from "./components/Main";
// import Header_main from "./components2/Header_main";
// // import Header from "./components2/Header_nav";
// import Blocks from "./components2/Block";
// import Header from "./components2/Header_nav";

// function App() {
//   return (
//     <ThemeProvider>
//       <LanguageProvider>
//         <Header/>
//         <Header_main/>
//        <Blocks/>
//       </LanguageProvider>
//     </ThemeProvider>
//   );
// }

// export default App;

// import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./tailbblock/Header";
// import Section from "./tailbblock/Section";
// import Main from "./tailbblock/Main";
// import Malumot from "./tailbblock/Malumot";
// import Steps from "./tailbblock/Steps";
// import Footer from "./tailbblock/Footer";
// import Signup from "./tailbblock/Signup";
// import './index.css';

// // import Signup from "./tailbblock/Signup";
// // import { Button } from "antd";

// const App = () => {
//   return (
//     <div>
//       {/* <Button type="primary">Primary Button</Button>
//       <Button>Default Button</Button>
//       <Button type="dashed">Dashed Button</Button>
//       <Button type="text">Text Button</Button>
//       <Button type="link">Link Button</Button> */}

//       <Signup/>
//       <Header />
//       <Section/>
//       <Main/>
//       <Malumot/>
//       <Steps/>
//       <Footer/>

//       {/* <Router>
//       <Routes>
//         <Route path="/" element={<Header />} />
//         <Route path="/signup"  element={<Signup/>} />
//       </Routes>
//     </Router> */}
//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import Section from './TelefonSayt/Section'

// const App = () => {
//   return (
//     <div>
//       <Section/>
//     </div>
//   )
// }

// export default App

// import React, { Fragment } from 'react'
// import Brands from './TelefonSayt/Brands'
// import './index.css';

// const App = () => {
//   return (
//     <Fragment>
//       <Brands/>
//     </Fragment>
//   )
// }

// export default App

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import { Login } from "./pages/Login";
// import { Profile } from "./pages/Profile";
// import { Register } from "./pages/Register";

// function App() {
//   const [user, setUser] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register setUser={setUser} />} />
//         <Route
//           path="/profile"
//           element={user ? <Profile user={user} /> : <Navigate to="/" />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React, { Fragment } from "react";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
// import Register from "./pages/Register";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";

// const App = () => {
//   // const [user, setUser] = useState(null);
//   return (
//     // <Router>
//     //   <Routes>
//     //     <Route path="/" element={<Login setUser={setUser}/>}/>
//     //     <Route path="/register" element={<Register setUser={setUser}/>}/>
//     //     <Route path="/profile" element={user ? <Profile user={user}/> : <Navigate to="/"/>}></Route>
//     //   </Routes>
//     // </Router>
//     <Fragment>
//       <Login />
//       <Profile />
//       <Register />
//     </Fragment>
//   );
// };



// export default App;



// import { Routes, Route } from 'react-router-dom';
// import Header from './components4/Header';
// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Signin from './pages/Signin';
// import Add from './pages/Add';
// import Edit from './pages/Edit';
// import ProtectedRoute from './components4/ProtectedRoute';

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/add" element={<ProtectedRoute><Add /></ProtectedRoute>} />
//         <Route path="/edit" element={<ProtectedRoute><Edit /></ProtectedRoute>} />
//       </Routes>
//     </>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
   
//       <Routes>
//         <Route path="/" element={<Login setUser={setUser} />} />
//         <Route path="/register" element={<Register setUser={setUser} />} />
//         <Route
//           path="/profile"
//           element={user ? <Profile user={user} /> : <Navigate to="/" />}
//         />
//       </Routes>
    
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
