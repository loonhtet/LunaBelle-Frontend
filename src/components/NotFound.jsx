import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-gray-500 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Go back to home page
      </Link>
    </div>
  );
};
