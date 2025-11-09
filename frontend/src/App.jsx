import React from "react";
import SearchBar from "./components/SearchBar";
import BlogList from "./components/BlogList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <BlogList />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
