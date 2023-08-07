import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full focus:text-blue-700 items-center">
      <input
        type="text"
        placeholder="Search..."
        // Bind value to search term state
        value={searchTerm}
        // Add onChange event to update search term state
        onChange={handleSearch}
        // Add left padding to make space for the icon
        className="w-[520px] px-8 py-2 border-2 active:border-blue-500/100 border-blue-500/100  rounded-md bg-gray-50 text-gray-900 pl-10"
      />
      <div className="absolute text-gray-400 right-3 top-1/2 transform -translate-y-1/2">
        <FiSearch />
      </div>
    </div>
  );
};

export default Search;
