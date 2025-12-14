import React, { useEffect, useState } from "react";
import products from "../data/products.json";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const {addToCart, cartItem} = useCart()
  console.log(cartItem)

  return (
    <div>
      <section className="py-4">
        <div className="container mx-auto w-[70%]">
          <img
            src="https://img.lazcdn.com/us/domino/deb62ecb-eba4-4287-aad9-b3b20d8bcc71_NP-1976-688.jpg_2200x2200q80.jpg_.avif"
            alt=""
          />
        </div>
      </section>

      {/* <section className='py-6'>
        <div className="container mx-auto">
            <div className="grid grid-cols-8 gap-5">
               {product.map((item)=>(
                <div key={item.id} className=" border p-4 rounded hover:shadow-lg transition-shadow duration-300">
                    <img src={item.image} alt={item.title} className="w-50% h-48 object-contain mb-4" />
                    <h2 className="text-lg font-semibold mb-2">{item.category}</h2> 
                </div>
               ))}
            </div>
        </div>
        </section> */}

      {/* <section className="py-6">
        <div className="container mx-auto">
          <h3 className="py-2 font-extrabold text-4xl">Categories</h3>
          <div className="grid grid-cols-8 gap-5">
            {[...new Set(product.map((item) => item.category))].map(
              (cat, index) => (
                <div
                  key={index}
                  className="border p-4 rounded hover:shadow-lg transition-shadow duration-300"
                >
                  <h2 className="text-lg font-semibold mb-2">{cat}</h2>
                </div>
              )
            )}
          </div>
        </div>
      </section> */}

      <section className="py-6">
        <div className="container mx-auto">
          <h2 className="py-2 font-extrabold text-4xl">All Product</h2>
          <div className="grid grid-cols-8 gap-5">
            {product.map((item) => (
              <div
                key={item.id}
                className="col-span-2 border p-4 rounded hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700 mb-4">${item.price}</p>
                </Link>
                <button onClick={() => addToCart(product)} className="bg-cyan-900 text-white px-4 py-2 rounded hover:bg-cyan-800">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
