"use client";

import Link from "next/link";
import AuthModal from "./AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="bg-white p-2 flex justify-between items-center w-screen">
      <Link href="/" className="font-black text-gray-700 text-4xl ml-6">
        BOOKBISTRO
      </Link>
      <div>
        {loading ? null : (
          <div className="flex mr-6">
            {data ? (
              <button
                onClick={signout}
                className="bg-blue-400 text-white
          border p-2 px-5 rounded mr-3"
              >
                Sign Out
              </button>
            ) : (
              <>
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
