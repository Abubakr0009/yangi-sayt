import React, { useState, useEffect } from "react";
import "./App.css";
import Header_nav from "./components2/Header_nav";
import Header_main from "./components2/Header_main";
import Section from "./components2/Section";
import Footer from "./components2/Footer";
import Main from "./components2/Main";
import Block from "./components2/Block"; // Blocks komponentini import qilish


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.slice(0, 6))); // Faqat 6 ta user olish
  }, []);

  return (
    <>
      <Header_main/>
      <Header_nav/>
      <Main/>
      <Block users={users} /> {/* Blocks komponentiga users ni prop sifatida uzatish */}
      <Section />
      <Footer />
    </>
  );
}

export default App;
