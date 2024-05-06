import React from "react";
import FavoriteItem from "./FavoriteItem";

// Component to display the list of favorite items
const FavoritesDisplay = ({ favorites, removeFromFavorites }) => {
  // Check if the favorites array is empty and display a message if so
  if (favorites.length === 0) {
    return <div>No favorites added.</div>;
  }

  // Render a list of FavoriteItem components if there are favorites
  return (
    <div>
      {/* Map over the favorites array and render a FavoriteItem for each item */}
      {favorites.map((item) => (
        <FavoriteItem
          // Use trackId as key for React's rendering optimization
          key={item.trackId}
          // Pass the item data to the FavoriteItem component
          item={item}
          // Pass the removeFromFavorites function to handle item removal
          removeFromFavorites={removeFromFavorites}
        />
      ))}
    </div>
  );
};

export default FavoritesDisplay;
