// Import necessary React hooks, axios for HTTP requests, and components.
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ResultsDisplay from "./components/ResultsDisplay";
import FavoritesDisplay from "./components/FavoritesDisplay";
import "./App.css";

function App() {
  // State to hold search results
  const [results, setResults] = useState([]);
  // State to hold favorites
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to handle search and fetch data from backend API
  const handleSearch = async (term, media) => {
    try {
      const response = await fetch(`/api/search?term=${term}&media=${media}`);
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]);
    }
  };

  // Function to add an item to favorites
  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.find((fav) => fav.trackId === item.trackId)) {
        return [...prevFavorites, item];
      }
      return prevFavorites;
    });
  };

  // Function to remove an item from favorites
  const removeFromFavorites = (itemId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.trackId !== itemId)
    );
  };

  return (
    <div className="App">
      <div className="column searchColumn">
        <h1>iTunes Search App</h1>
        <SearchBar onSearch={handleSearch} />
        <ResultsDisplay
          results={results}
          favorites={favorites}
          onToggleFavorite={addToFavorites}
        />
      </div>
      <div className="column favoritesColumn">
        <h1 className="Fav-heading">Selected Favorites</h1>
        <FavoritesDisplay
          favorites={favorites}
          onRemove={removeFromFavorites}
        />
      </div>
    </div>
  );
}

export default App;
