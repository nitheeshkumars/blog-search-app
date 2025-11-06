import React from "react";
import SearchBar from "./components/SearchBar";
import BlogList from "./components/BlogList";

const App = () => {
  return (
    <div style={{ width: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Blog Search App</h1>
      <SearchBar />
      <BlogList />
    </div>
  );
};

export default App;
