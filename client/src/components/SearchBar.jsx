import React, { useState } from "react";

// SearchBar component for searching iTunes
function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");
  const [media, setMedia] = useState("music");

  // Function to handle form submission and initiate search
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch(term, media);
  };
  // Renders the search bar form
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
    >
      {/* Input field for entering search terms */}
      <input
        type="text"
        value={term}
        // Updates the term state on input change
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search term"
        className="searchInput"
      />
      {/* Select dropdown to choose the media type */}
      <select
        value={media}
        // Updates the media state when selection changes
        onChange={(e) => setMedia(e.target.value)}
        className="mediaSelect"
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
