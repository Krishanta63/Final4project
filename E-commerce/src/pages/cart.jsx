import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // If cart is empty
  if (cartItem.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[500px] gap-4">
        <h1 className="text-3xl font-bold text-red-500/80">Your cart is empty</h1>
        {/* <img src={emptyCart} alt="empty cart" className="w-60" /> */}
        <h1>empty cart</h1>
        
        <button
          onClick={() => navigate("/products")}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-5">My Cart ({cartItem.length})</h1>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItem.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-md"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt="" className="w-16 h-16 rounded-md" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-red-500 font-bold">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(cartItem, item.id, "decrease")}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                -
              </button>

              <span className="font-bold">{item.quantity}</span>

              <button
                onClick={() => updateQuantity(cartItem, item.id, "increase")}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-600 font-bold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Bill Details */}
      <div className="bg-white shadow-md p-5 rounded-md mt-8">
        <h2 className="text-xl font-bold mb-3">Bill Details</h2>

        <div className="flex justify-between">
          <p>Items Total</p>
          <p>${totalPrice}</p>
        </div>

        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <p className="text-green-600 font-semibold">FREE</p>
        </div>

        <div className="flex justify-between">
          <p>Handling Charge</p>
          <p>$5</p>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold text-lg">
          <p>Grand Total</p>
          <p>${totalPrice + 5}</p>
        </div>

        <button className="bg-red-500 text-white px-4 py-2 mt-4 w-full rounded-md">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
