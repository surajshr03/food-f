import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className="nav-bg rounded-full flex justify-between items-center px-4 py-4 shadow-lg w-full lg:w-[80%] h-20 fixed  left-1/2 transform -translate-x-1/2 z-50 lg:top-5">
      <div className="flex items-center space-x-2 lg:space-x-4">
        <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
          <img
            src="/tummy-bg.png"
            alt="Logo"
            className=" h-8 lg:h-16 lg:w-40 object-cover rounded-full"
          />
          <h1 className="hidden lg:block lg:text-2xl font-bold cursor-pointer">
            Tummy
          </h1>
        </Link>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-4">
        {/* Search Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={handleSearchClick} className="">
            <FaSearch size={20} />
          </button>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div
        className={`absolute top-16 right-0 w-full max-w-xs ${
          searchOpen ? "block" : "hidden"
        } lg:hidden`}
      >
        <input
          type="text"
          placeholder="Type to search..."
          className="border-2 border-gray-300 rounded-lg p-2 w-[80%] focus:outline-none focus:border-blue-500 transition-all duration-200 ease-linear placeholder:text-sm"
        />
      </div>

      {/* Search Bar for Large Screens */}
      <div className="flex justify-center items-center min-h-screen">
        <input
          type="text"
          placeholder="Type to search..."
          className="border border-gray-300 rounded-full p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <ul className="flex items-center space-x-0 lg:space-x-8">
        <li className="lg:hidden">
          <Link
            to="/add"
            className="flex items-center  text-base lg:text-lg font-medium py-2 px-2 lg:px-4"
          >
            <IoAddCircle size={20} className="mr-1 lg:mr-2" />
          </Link>
        </li>
        <li className="lg:hidden">
          <Link
            to="/favorites"
            className="flex items-center  text-base lg:text-lg font-medium py-2 px-2 lg:px-4"
          >
            <MdOutlineFavorite size={20} className="mr-1 lg:mr-2" />
          </Link>
        </li>
        <li className="lg:hidden">
          <Link
            to="/profile"
            className="flex items-center  text-base lg:text-lg font-medium py-2 px-2 lg:px-4"
          >
            <FaUserCircle size={20} className="mr-1 lg:mr-2" />
          </Link>
        </li>

        {/* Large screen version */}
        <li className="hidden lg:flex">
          <Link
            to="/add"
            className="flex items-center  text-lg font-medium py-2 px-4"
          >
            <IoAddCircle size={24} className="mr-2" />
            Add
          </Link>
        </li>
        <li className="hidden lg:flex">
          <Link
            to="/fav"
            className="flex items-center  text-lg font-medium py-2 px-4"
          >
            <MdOutlineFavorite size={24} className="mr-2" />
            Favorites
          </Link>
        </li>
        <li className="hidden lg:flex">
          <Link
            to="/profile"
            className="flex items-center  text-lg font-medium py-2 px-4"
          >
            <FaUserCircle size={24} className="mr-2" />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
