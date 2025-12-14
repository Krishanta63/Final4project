import React, { useEffect, useState } from 'react';
import Home from '../pages/Home';
import { Link, Route, Routes } from 'react-router-dom';
import Categories from '../pages/Categories';
import ProductDetails from '../pages/ProductDetails';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((a) => a.json())
      .then((data) => setCategory(data));
  }, []);

  const {cartItem} = useCart()

  return (
    <>
      <section className="bg-cyan-900 text-white p-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="logo text-2xl font-bold">
                <Link to="/">E-Shop</Link>
            </div>

            <div className="nav space-x-6">
              <Link to="/" className="hover:underline">
                Home
              </Link>

              {category.map((cat, i) => (
                <Link
                  key={i}
                  to={`/category/${cat}`}
                  className="hover:underline capitalize"
                >
                  {cat}
                </Link>
              ))}
            </div>

            <div className="cart">
              <button className="bg-white text-cyan-900 px-4 py-2 rounded hover:bg-gray-200">
                Cart ({cartItem.length})
              </button>
            </div>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Categories />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default Header;
