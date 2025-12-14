import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
   <footer className="bg-gray-800 dark:bg-gray-900 text-gray-200 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">News Portal</h1>
          <p className="text-gray-400 max-w-sm">
            Stay updated with the latest news from around the world. All categories in one place: Business, Technology, Sports, Entertainment, Health, Science.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 flex flex-col items-center md:items-start">
            <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="/business" className="hover:text-blue-500 transition">Business</a></li>
            <li><a href="/technology" className="hover:text-blue-500 transition">Technology</a></li>
            <li><a href="/sports" className="hover:text-blue-500 transition">Sports</a></li>
            <li><a href="/entertainment" className="hover:text-blue-500 transition">Entertainment</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-gray-400">
            <a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} News Portal. All rights reserved.
      </div>
    </footer>
  )
}
