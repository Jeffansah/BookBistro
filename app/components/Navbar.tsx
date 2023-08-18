"use client";

import Link from "next/link";
import AuthModal from "./AuthModal";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="bg-white p-2 flex justify-between items-center w-screen">
      <Link
        href="/"
        className="font-black text-gray-700 text-2xl ml-2 sm:ml-6 sm:text-4xl"
      >
        BOOKBISTRO
      </Link>
      <div className="flex items-center lg:mr-6 mr-2">
        <button
          onClick={toggleMenu}
          className={`text-gray-700 focus:outline-none lg:hidden ${
            showMenu && "hidden"
          }`}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button
          onClick={toggleMenu}
          className={`text-gray-700 text-right mb-2 ${
            !showMenu && "hidden"
          } lg:hidden`}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {showMenu && (
          <div className="lg:flex absolute top-0 right-0 mt-10 bg-white p-3 rounded shadow-lg sm:h-[130px]">
            <div className="flex flex-col">
              {data ? (
                <button
                  onClick={signout}
                  className=" bg-blue-400 text-white border p-2 px-5 rounded mr-3 mt-2 sm:mt-0"
                >
                  Sign Out
                </button>
              ) : (
                <div className="sm:flex sm:flex-col sm:mt-5">
                  <AuthModal isSignin={true} />
                  <hr className="sm:hidden h-1 text-gray-100" />
                  <AuthModal isSignin={false} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
