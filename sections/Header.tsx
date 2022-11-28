import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20">
      <div>
        <h1>Image</h1>
      </div>
      <div className="">
        <ul className="flex gap-5 text-sm md:gap-7">
          {/* Header Links */}
          <Link
            rel="noopener noreferrer"
            href="/"
            className="font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300"
          >
            Home
          </Link>

          <Link
            rel="noopener noreferrer"
            href="/"
            className="font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:text-gray-800 hover:border-gray-600 dark:hover:border-gray-300"
          >
            New
          </Link>

          <Link
            rel="noopener noreferrer"
            href="/"
            className="font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:text-gray-800 hover:border-gray-600 dark:hover:border-gray-300"
          >
            Popular
          </Link>

          <Link
            rel="noopener noreferrer"
            href="/"
            className="font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:text-gray-800 hover:border-gray-600 dark:hover:border-gray-300"
          >
            Trending
          </Link>

          <Link
            rel="noopener noreferrer"
            href="/"
            className="font-semibold text-gray-600 border-b-2 border-transparent dark:text-gray-300 hover:text-gray-800 hover:border-gray-600 dark:hover:border-gray-300"
          >
            Categories
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
