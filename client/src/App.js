import React, { useState, useEffect } from "react";
import Home from "./components/home";
import Login from "./components/login";
import About from "./components/about";
import Blog from "./components/blog/blog";
import Navigation from "./components/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { searchTvShows } from "./utils/API";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchedShows, setSearchedShows] = useState([]);
  const handleFormSubmit = async () => {
    const response = await searchTvShows(searchInput);

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const { results } = await response.json();

    const showData = results.map((show) => ({
      showId: show.id,
      name: show.name,
      description: show.overview,
      imageSrc: show.backdrop_path,
    }));
    setSearchedShows(showData);
  };
  return (
    <div>
      <BrowserRouter>
        <Navigation
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleFormSubmit={handleFormSubmit}
        />
        <Routes>
          <Route
            path="/"
            element={<Home searchedShows={searchedShows} />}
            index
          />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
