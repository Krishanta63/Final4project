import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NewsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const article = location.state?.article;

  if (!article) {
    navigate('/');
    return null;
  }

  const { title, author, description, url, urlToImage, publishedAt, source } = article;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-cyan-600 hover:underline text-3xl">
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
      <img src={urlToImage} alt={title} className="w-full h-auto mb-6 rounded-md" />
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        By {author || 'Unknown'} | {new Date(publishedAt).toLocaleString()}
      </p>
      <p className="text-xs text-blue-500 font-medium mb-4">Source: {source.name}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Read full article
      </a>
    </div>
  );
};

export default NewsDetails;
