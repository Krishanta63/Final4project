import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import Testimonials from '../pages/Testimonials'

const Header = () => {
  return (
    <div>
        <section className="header bg-amber-950  shadow-md text-white">
            <div className="container mx-auto flex justify-between items-center py-4">
                <h1 className="text-3xl font-bold">Logo</h1>
                <ul className='flex gap-5'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/menu"><li>Menu</li></Link>
                    <Link to="/testimonials"><li>Testimonials</li></Link>
                    <Link to="/gallery"><li>Gallery</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </section>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>


    
  )
}

export default Header