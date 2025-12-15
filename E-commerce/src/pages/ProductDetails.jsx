import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();     // get product ID from URL
  const [product, setProduct] = useState(null);

  const {addToCart, cartItem} = useCart()
    console.log(cartItem)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-2 gap-10">
        
        <img src={product.image} className="w-full h-96 object-contain" />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <h2 className="text-2xl font-semibold mb-4">${product.price}</h2>
          
          <button 
            onClick={() => addToCart(product)}
            className="bg-cyan-900 text-white px-6 py-3 rounded hover:bg-cyan-800"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
