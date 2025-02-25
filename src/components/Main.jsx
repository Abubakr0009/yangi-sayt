// import React, { useEffect, useState } from 'react';

// function Header() {
//   return (
//     <header className="relative bg-black text-white py-4 px-8 flex items-center justify-between transition-all duration-300 ease-in-out">
//       <nav className="flex items-center space-x-8 text-white text-lg font-medium">
//         <a href="!" className="text-green-500 font-bold">Гамбургеры</a>
//         <a href="!" className="hover:text-green-400 transition-all duration-300 ease-in-out">Хот Доги</a>
//         <a href="!" className="hover:text-green-400 transition-all duration-300 ease-in-out">Пицца</a>
//         <a href="!" className="hover:text-green-400 transition-all duration-300 ease-in-out">Напитки</a>
//         <a href="!" className="hover:text-green-400 transition-all duration-300 ease-in-out">Соки</a>
//       </nav>
//     </header>
//   );
// }

// function MainSection() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data.slice(0, 20)))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <section className="menu_main mt-16 grid grid-cols-3 gap-8 px-16">
//       {products.map(product => (
//         <div key={product.id} className="box w-80">
//           <div className="w-80 h-80 relative group overflow-hidden">
//             <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-green-500 bg-opacity-75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
//               <h5 className="text-white text-2xl font-Raleway font-semibold">Добавить в корзину</h5>
//             </div>
//             <button className="absolute bottom-0 left-0 w-full bg-green-600 text-white text-xl py-2 text-center">{product.price} $</button>
//           </div>
//           <h3 className="text-green-500 font-Raleway font-bold text-2xl mt-4">{product.title}</h3>
//           <p className="text-white font-Roboto text-lg mt-2 max-w-xs">{product.description.slice(0, 100)}...</p>
//         </div>
//       ))}
//     </section>
//   );
// }

// export default  MainSection

