import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailsPages = () => {
  const { id } = useParams(); // get the coffee id from the URL
  const navigate = useNavigate();
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedCoffee = data.find((item) => item.id.toString() === id);
        setCoffee(selectedCoffee);
      })
      .catch((err) => console.error("Error fetching coffee data:", err));
  }, [id]);

  if (!coffee) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-[#FAF3E7] rounded-lg shadow-md mt-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-[#FAF3E7] hover:bg-[#7A4A3C] text-3xl bg-[#4B2E2A] px-4 py-2 rounded"
      >
        ← Back
      </button>
      <div className="flex flex-col items-center">
        <img
          src={coffee.img}
          alt={coffee.name}
          className="w-[full] h-[350px] mb-6 rounded-md"
        />
        <h1 className="text-3xl font-bold mb-4 text-[#2B1B17]">{coffee.name}</h1>
        <p className="text-gray-700 dark:text-[#2B1B17]-300 mb-4">
          {coffee.description}
        </p>
        <p className="font-bold text-red-700">Price: ${coffee.price}</p>
      </div>
    </div>
  );
};

export default DetailsPages;
