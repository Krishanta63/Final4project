import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((a) => a.json())
      .then((data) => setCoffee(data))
      .catch((error) => console.error("Error fetching coffee data:", error));
  }, []);

  return (
    <div className="bg-gray-800 py-6 text-white">
       <div className="flex container mx-auto justify-center py-4 items-center mb-10">
            <div className="info w-1/2  px-4 items-center flex flex-col justify-center gap-5">
                <h1 className='text-3xl font-bold border-b-4 border-amber-300 inline-block p-4'>Menu</h1>
            </div>
        </div>
      <div className="grid grid-cols-3 gap-6 py-10 container mx-auto">
          {coffee.map((a) => (
            <div key={a.id} className="p-4 rounded shadow" >
              <Link to={`/menu/${a.id}`}>
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-60 object-cover mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{a.name}</h2>
                <p className="mb-2">{a.description}</p>
                <p className="font-bold">Price: ${a.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Menu;
