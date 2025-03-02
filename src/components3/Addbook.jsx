import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/books", { title, author }).then(() => {
      navigate("/");
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>📖 Yangi Kitob Qo‘shish</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Sarlavha" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Muallif" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Qo‘shish</button>
      </form>
    </div>
  );
};

export default AddBook;

