import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="h-[300px] sm:h-[350px] lg:h-[500px] bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2 w-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-2">
          Find your table for any occasion
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

//bg-gradient-to-r from-[#0f1f47] to-[#5f6984]

export default Header;
