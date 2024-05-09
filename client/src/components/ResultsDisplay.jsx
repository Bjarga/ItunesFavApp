import React from "react";

// Function component to display search results
function ResultsDisplay({ results, favorites, onToggleFavorite }) {
  return (
    <div className="searchResults">
      {/* Mapping through the results array to render each search result */}
      {results.map((item) => (
        <div key={item.trackId} className="resultItem">
          {/* Display an image for each result with alt text from the track name */}
          <img src={item.artworkUrl100} alt={item.trackName} />
          {/* Display the track name */}
          <div>{item.trackName}</div>
          {/* Display the artist name */}
          <div>{item.artistName}</div>
          <button
            // Event handler to toggle favorite status
            onClick={() => onToggleFavorite(item)}
            className={`button ${
              // Conditional class to style button based on favorite status
              favorites.some((fav) => fav.trackId === item.trackId)
                ? "favorite"
                : ""
            }`}
          >
            {/* Conditional rendering of button text based on favorite status */}
            {favorites.some((fav) => fav.trackId === item.trackId)
              ? "In Favorites"
              : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ResultsDisplay;
