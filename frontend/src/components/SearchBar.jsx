import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogsRequest } from "../redux/blogSlice";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsRequest(""));
  }, [dispatch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};

  const handleSearch = () => {
    dispatch(fetchBlogsRequest(query));
  };

  return (
    <nav className="w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-4 flex items-center justify-between shadow-lg">
      <div className="text-white text-2xl font-semibold tracking-wide">
        Nits Blogs
      </div>

      <div className="flex-1 max-w-xl mx-6">
        <div className="flex">
          <input
            type="search"
            placeholder="Search blogs..."
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="
              flex-1
              pl-4
              py-3
              rounded-tl-md
              rounded-bl-md
              bg-gray-100
              text-gray-800
              placeholder-gray-500
              shadow-sm
              focus:outline-none
              focus:ring-2
              focus:ring-gray-400
              focus:ring-inset
              focus:shadow-md
              hover:bg-gray-50
              transition-all
              duration-300
            "
          />
          <button
            onClick={handleSearch}
            className="
              bg-gray-700
              hover:bg-gray-600
              text-white
              px-4
              rounded-tr-md
              rounded-br-md
              flex
              items-center
              justify-center
              transition-colors
              duration-300
            "
          >
            <FiSearch className="text-lg" />
          </button>
        </div>
      </div>

      <div className="text-white text-2xl font-semibold tracking-wide"></div>
    </nav>
  );
};

export default SearchBar;
