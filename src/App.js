// src/components/MovieCard.js
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div data-testid="movie-card">
      <img data-testid="movie-poster" src={movie.poster} alt={movie.title} />
      <h2 data-testid="movie-title">{movie.title}</h2>
      <p data-testid="movie-release-date">{movie.releaseDate}</p>
    </div>
  );
};

export default MovieCard;

// src/components/MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

// src/components/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

// src/components/MovieDetails.js
import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h2 data-testid="movie-title">{movie.title}</h2>
      <p data-testid="movie-release-date">{movie.releaseDate}</p>
      <p data-testid="movie-runtime">{movie.runtime} minutes</p>
      <p data-testid="movie-overview">{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
