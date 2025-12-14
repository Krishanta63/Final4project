import React, { useEffect, useState } from 'react'

const Gallery = () => {
    const [image, setImage] = useState([]);
    useEffect(() => {
      fetch("/menu.json").then((a) => a.json()).then((data) => {
        console.log(data);
        setImage(data)});
    }, []);
    

  return (
   <>
   <section className='py-3'>
    <div className='container mx-auto'> 
        {/* <h1 className='text-3xl font-bold text-center mb-6 '>Gallery</h1> */}
        {/* <h1 className='text-3xl font-bold border-b-4 border-amber-300 inline-block p-4 text-center'>About Us</h1> */}
        <div className="flex container mx-auto justify-center py-4 items-center mb-10">
            <div className="info w-1/2  px-4 items-center flex flex-col justify-center gap-5">
                <h1 className='text-3xl font-bold border-b-4 border-amber-300 inline-block p-4'>Gallery</h1>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
           {image.map((a) => (
            <div key={a.id} className='overflow-hidden rounded shadow-lg'>
                <img src={a.img} alt={a.title} className='w-full h-69 object-contain transform hover:scale-105 transition-transform duration-300'/>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-2'>{a.title}</h2>
                    <p className='text-gray-600'>{a.description}</p>
                </div>
                
            </div>
           ))}
    </div>
    </div>
   </section>
   </>
  )
}

export default Gallery