import React, { useState } from "react";
import Home from "./components/home";
import Login from "./components/login";
import About from "./components/about";
import SignupForm from "./components/signupForm";
import Navigation from "./components/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { searchTvShows } from "./utils/API";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});
const client = new ApolloClient({
  link: httpLink,
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
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
