import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  const { source, author, title, description, url, urlToImage, publishedAt } = article;

  return (
    <Link
      to="/news-details"
      state={{ article }} // Pass the full article to the details page
      className="block max-w-md mx-auto bg-white dark:bg-gray-900 hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300"
    >
      <img
        src={urlToImage}
        alt={title}
        className="w-full h-48 object-cover bg-gray-400"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 flex justify-between">
          <span>By {author || "Unknown"}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
        <div className="mt-1 text-xs text-blue-500 font-medium">
          Source: {source.name}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
