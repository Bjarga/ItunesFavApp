// Import necessary React hooks, axios for HTTP requests, and components.
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ResultsDisplay from "./components/ResultsDisplay";
import FavoritesDisplay from "./components/FavoritesDisplay";
import "./App.css";

function App() {
  // State to hold search results
  const [results, setResults] = useState([]);
  // State to hold favorites
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage on initial render
  useEffect(() => {
    const loadedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(loadedFavorites);
  }, []);

  // Save favorites to local storage whenever favorites state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to handle search requests
  const handleSearch = async (term, media) => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    if (!API_BASE_URL) {
      console.error("API_BASE_URL is not defined.");
      alert("Server configuration error. Please try again later.");
      return;
    }
    try {
      const response = await axios.get(`${API_BASE_URL}/api/search`, {
        params: { term, media },
      });
      setResults(response.data.results);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      alert("Failed to fetch data. Please check your network connection and try again.");
      setResults([]);
    }
  };

  // Function to toggle favorites
  const handleToggleFavorite = (item) => {
    const updatedFavorites = favorites.some((fav) => fav.trackId === item.trackId)
      ? favorites.filter((fav) => fav.trackId !== item.trackId)
      : [...favorites, item];
    setFavorites(updatedFavorites);
  };

  // Function to remove an item from favorites
  const removeFromFavorites = (item) => {
    setFavorites(favorites.filter((fav) => fav.trackId !== item.trackId));
  };

  return (
    <div className="App">
      <div className="column searchColumn">
        <h1>iTunes Search App</h1>
        <SearchBar onSearch={handleSearch} />
        <ResultsDisplay results={results} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
      </div>
      <div className="column favoritesColumn">
        <h1 className="Fav-heading">Selected Favorites</h1>
        <FavoritesDisplay favorites={favorites} removeFromFavorites={removeFromFavorites} />
      </div>
    </div>
  );
}

export default App;
