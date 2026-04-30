import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4">
      {/* Error Code */}
      <h1 className="text-8xl font-extrabold mb-4">404</h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-200 mb-6 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
