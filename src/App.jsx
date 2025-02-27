// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BookList from "./components3/Booklist";
// import AddBook from "./components3/Addbook";
// import EditBook from "./components3/EditBook";



// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1 style={{ textAlign: "center" }}>📚 Kitoblar CRUD App</h1>
//         <Routes>
//           {/* <Route path="/" element={<BookList />} />
//           <Route path="/add" element={<AddBook />} />
//           <Route path="/edit/:id" element={<EditBook />} /> */}
//           <Route path="/" element={<BookList/>}/>
//           <Route path="/add" element={<AddBook/>}/>
//           <Route path="/edit/:id" element={<EditBook/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;




































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


import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

// import Header from "./components/Header";
// import Main from "./components/Main";
import Header_main from "./components2/Header_main";
import Header from "./components2/Header_nav";
import Blocks from "./components2/Block";


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header/>
        <Header_main/>
       <Blocks/>
        {/* <Main /> */}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
