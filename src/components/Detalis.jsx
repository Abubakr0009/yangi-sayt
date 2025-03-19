import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Detalis = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, [id]);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto border rounded-lg shadow-lg p-6">
        <img src={product.image} alt={product.title} className="h-64 mx-auto" />
        <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-2">${product.price}</p>
        <Link to="/" className="block mt-4 text-blue-500">Back to Home</Link>
      </div>
    </div>
  );
};

export default Detalis;
