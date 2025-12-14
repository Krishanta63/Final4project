import React from "react";
import axios from "axios";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const links = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];

const NavBar = ({ setArticles }) => {

   const handleSearch = async (e) => {
        const search = e.target.value
        try {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${import.meta.env.VITE_API_KEY}`)

            setArticles(res.data.articles)

        } catch (error) {
            console.log(error);

        }

    }

  return (
    <div className="container mx-auto flex items-center justify-between py-4 px-4 ">
      <h1 className="text-3xl font-bold underline">News
        <span className="text-cyan-600">Portal</span>
      </h1>

      <div className="hidden md:flex space-x-6">
        {links.map((a) => (
          <Link
            key={a}
            to={`/${a.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            {a}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative bg-gray-200 p-2 rounded-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search news..."
            className="pl-10 w-32 md:w-64 outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
