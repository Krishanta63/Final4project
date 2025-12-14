import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
   <>
   <section className='py-6 h-[90vh]'>
        <div className="flex container mx-auto justify-center py-4 items-center mb-10">
            <div className="info w-1/2  px-4 items-center flex flex-col justify-center gap-5">
                <h1 className='text-3xl font-bold border-b-4 border-amber-300 inline-block p-4'>Contact Us</h1>
            </div>
        </div>
        <div className="flex container mx-auto justify-between items-center">
            <div className="contact-form w-1/2  px-4 items-center flex flex-col justify-center gap-5">
                <form className='flex flex-col gap-4 w-full'>
                    <input type="text" placeholder='Your Name' className='border border-gray-300 p-2 rounded'/>
                    <input type="email" placeholder='Your Email' className='border border-gray-300 p-2 rounded'/>
                    <textarea placeholder='Your Message' className='border border-gray-300 p-2 rounded h-32'></textarea>
                    <button type="submit" className='bg-amber-300 text-white px-4 py-2 rounded hover:bg-amber-400'>Send Message</button>
                </form>
            </div>
            <div className="contact-info w-1/2 px-4 flex flex-col gap-4">
                <h2 className='text-2xl font-semibold'>Get in Touch</h2>
                <p className='text-lg'>We would love to hear from you! Whether you have a question about our menu, want to provide feedback, or just want to say hello, feel free to reach out.</p>
                <div className='flex items-center'>
                    <MdEmail size={24} className='inline-block mr-2'/>
                    <p className='text-lg'>: Coffee@ourcoffee.com</p>
                </div>
                <div className='flex items-center'>
                    <FaPhoneAlt size={20} className='inline-block mr-2'/>
                    <p className='text-lg'>: (01) 5580516</p>
                </div>
                <div className='flex items-center'>
                    <FaLocationDot size={20} className='inline-block mr-2'/>
                    <p className='text-lg'>: Bojepokhari, Imadol, Lalitpur, Nepal</p>
                </div>
            </div>
        </div>
   </section>
   </>
  )
}

export default Contact