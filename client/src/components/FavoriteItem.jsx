import React from "react";

// Component to render individual favorite items
function FavoriteItem({ item, onRemove }) {
  return (
    <div className="favoriteItem">
      {/* Image of the favorite item with alt text using the track's name */}
      <img
        src={item.artworkUrl100}
        alt={item.trackName}
        className="favoriteImage"
      />
      {/* Container for the details of the favorite item */}
      <div className="favoriteItemDetails">
        <div style={{ fontWeight: "bold" }}>{item.trackName}</div>
        {/* Display the artist name */}
        <div>{item.artistName}</div>
        {/* Conditionally display the collection name if it exists */}
        {item.collectionName && <div>{item.collectionName}</div>}
        {/* Button to remove the item from favorites */}
        <button onClick={onRemove} className="button">
          Remove
        </button>
      </div>
    </div>
  );
}

export default FavoriteItem;
