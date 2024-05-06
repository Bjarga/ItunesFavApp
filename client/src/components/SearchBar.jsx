import React, { useState } from "react";

// Defines a functional component SearchBar that accepts an onSearch function as its prop
function SearchBar({ onSearch }) {
  // State to store the search term, initially an empty string
  const [term, setTerm] = useState("");
  // State to store the selected media type, initially set to 'all'
  const [media, setMedia] = useState("all");

  // Handles form submission to prevent default form behavior and execute the search
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(term, media); // Calls the onSearch function passed via props with current term and media
  };

  // Renders the search bar form
  return (
    <form
      // Connects the form submission to the handleSubmit function
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
    >
      {/* Input field for entering search terms */}
      <input
        type="text"
        value={term}
        // Updates the term state on input change
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search..."
        className="searchInput"
      />
      {/* Select dropdown to choose the media type */}
      <select
        value={media}
        // Updates the media state when selection changes
        onChange={(e) => setMedia(e.target.value)}
        className="searchSelect"
      >
        {/* Options for media type */}
        <option value="all">All</option>
        <option value="movie">Movies</option>
        <option value="podcast">Podcasts</option>
        <option value="music">Music</option>
        <option value="audiobook">Audiobooks</option>
        <option value="shortFilm">Short Films</option>
        <option value="tvShow">TV Shows</option>
        <option value="software">Software</option>
        <option value="ebook">eBooks</option>
      </select>
      {/* Button to submit the search */}
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
