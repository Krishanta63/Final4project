import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Categories = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.category === category);
        setProducts(filtered);
      });
  }, [category]);

  return (
    <div className="py-10 container mx-auto">
      <h1 className="text-3xl font-bold capitalize mb-6">{category}</h1>

      <div className="grid grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="font-semibold">{item.title}</h2>
            </Link>

            <p className="text-gray-700">${item.price}</p>

            <button
              onClick={() => addToCart(item)}
              className="bg-cyan-900 text-white px-4 py-2 rounded hover:bg-cyan-800 mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
