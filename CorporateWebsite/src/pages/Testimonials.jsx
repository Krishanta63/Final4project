import React, { useEffect, useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      feedback: "Great service and friendly staff!",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      role: "Customer",
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Excellent ambiance and delicious coffee!",
        img: "https://randomuser.me/api/portraits/women/2.jpg",
      role: "Customer",
    },
    {
      id: 3,
      name: "Mike Johnson",
      feedback: "A perfect place to relax and work.",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      role: "Customer",
    },
    {
      id: 4,
      name: "Emily Davis",
      feedback: "Highly recommend their pastries!",
        img: "https://randomuser.me/api/portraits/women/4.jpg",
      role: "Customer",
    },
    {
      id: 5,
      name: "David Wilson",
      feedback: "Best coffee in town!",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      role: "Customer",
    },
    {
      id: 6,
      name: "Sarah Brown",
      feedback: "Cozy atmosphere and great music.",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      role: "Customer",
    },
    {
      id: 7,
      name: "Chris Lee",
      feedback: "Friendly staff and quick service.",
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      role: "Customer",
    },
    {
      id: 8,
      name: "Anna Garcia",
      feedback: "A wonderful spot for coffee lovers.",
        img: "https://randomuser.me/api/portraits/women/8.jpg",
      role: "Customer",
    },
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
        next();
    }, 3000);
    return () => clearInterval(interval);
  }, []); 
  

  const next = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }

    const prev = () => {  
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }


  return (
    <>
      <section className="py-6 h-[90vh] relative overflow-hidden">
        <div className="flex container mx-auto justify-center py-4 items-center mb-10">
          <div className="info w-1/2  px-4 items-center flex flex-col justify-center gap-5">
            <h1 className="text-3xl font-bold border-b-4 border-amber-300 inline-block p-4">
              Testimonials
            </h1>
          </div>
        </div>
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((a) => (
            <div
              key={a.id}
              className="min-w-full px-6 py-8 bg-white rounded-lg shadow-md text-center"
            >
              <img
                src={a.img}
                className="w-20 h-20 rounded-full mx-auto mb-4"
                alt=""
              />
              <p className="text-gray-700 text-lg italic mb-4">
                "{a.feedback}"
              </p>
              <h3 className="font-bold text-xl">{a.name}</h3>
              <p className="text-gray-500">{a.role}</p>
            </div>
          ))}
        </div>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <GrNext />
        </button>
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <GrPrevious />
        </button>
      </section>
    </>
  );
};

export default Testimonials;
