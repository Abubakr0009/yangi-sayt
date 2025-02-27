// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const EditBook = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");

//   useEffect(() => {
//     axios.get(`http://localhost:5000/books/${id}`).then((res) => {
//       setTitle(res.data.title);
//       setAuthor(res.data.author);
//     });
//   }, [id]);

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:5000/books/${id}`, { title, author }).then(() => {
//       navigate("/");
//     });
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>✏️ Kitobni Tahrirlash</h2>
//       <form onSubmit={handleUpdate}>
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
//         <button type="submit">Yangilash</button>
//       </form>
//     </div>
//   );
// };

// export default EditBook;

