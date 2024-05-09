import React from "react";
import FavoriteItem from "./FavoriteItem";

// Component to display the list of favorite items
function FavoritesDisplay({ favorites, onRemove }) {
  return (
    <div className="favoritesList">
      {favorites.length === 0 ? (
        <div>No favorites added</div>
      ) : (
        favorites.map((item) => <FavoriteItem key={item.trackId} item={item} onRemove={() => onRemove(item.trackId)} />)
      )}
    </div>
  );
}

export default FavoritesDisplay;
