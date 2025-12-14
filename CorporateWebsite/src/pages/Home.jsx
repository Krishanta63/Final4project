import React from 'react'
import coffeeimg from '../assets/coffee.png'
import About from './About'
import Menu from './Menu'
import Testimonials from './Testimonials'
import Gallery from './Gallery'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <section className="home bg-amber-950 shadow-md text-white h-[90vh] flex items-center">
        <div className="container mx-auto flex justify-between items-center py-20   px-10">
           <div className="left gap-4 flex flex-col">
            <h1 className="text-5xl font-bold text-amber-300">Best Coffee</h1>
            <h3 className="text-3xl font-semibold">Make Your day great with our  <br />special coffee.</h3>
            <p>Welcome to our coffee shop where quality meets taste.</p>
            <div className="flex ">
                <div className="button">
                    <button className="border border-amber-50 text-white px-4 py-2 rounded-4xl hover:bg-yellow-800">Explore Menu</button>
                </div>
                <div className="button mx-4">
                    <button className=" border border-amber-50 text-white px-4 py-2 rounded-4xl hover:bg-gray-200">Contact Us</button>
                </div>
            </div>
           </div>
           <div className="right">
            <img src={coffeeimg} alt="Coffee" />
           </div>
    </div>
    </section>
    <About />
    <Menu />
    <Testimonials />
    <Gallery/>
    <Contact />
    </>
  )
}

export default Home