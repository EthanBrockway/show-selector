import React, { useState } from "react";
import Home from "./components/home";
import Login from "./components/login";
import About from "./components/about";
import SignupForm from "./components/signupForm";
import Navigation from "./components/navigation";
import Profile from "./components/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { searchTvShows } from "./utils/API";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});
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
    <ApolloProvider client={client}>
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
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
