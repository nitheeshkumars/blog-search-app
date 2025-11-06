import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogsRequest } from "../redux/blogSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    dispatch(fetchBlogsRequest(value));
  };

  return (
    <input
      type="text"
      placeholder="Search blogs..."
      value={query}
      onChange={handleChange}
      style={{ padding: "8px", width: "100%", marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
