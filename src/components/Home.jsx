import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => setCards(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-red-800">Featured Products</h2>
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} className="p-4">
            <div className="border rounded-lg shadow-lg p-4">
              <img src={card.image} alt={card.title} className="h-40 mx-auto" />
              <h3 className="text-lg font-semibold mt-2">{card.title}</h3>
              <p className="text-gray-600">${card.price}</p>
              <Link to={`/details/${card.id}`} className="text-blue-500 mt-2 block">View Details</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;