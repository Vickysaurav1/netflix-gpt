import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  {
    /**
    Movie List - Popular
      - Cards*n, horizontal ropes
    Movie List - Top Rated
    Movie List - trending
    Movie List - NowPlaying
    Movie List - Upcoming
    Movie List - Horror
  
  */
  }

  const movies = useSelector((store) => store?.movies);
  if (movies === null) return;

  console.log("secondaryContainerJs", movies);
  return (
    <div className="bg-black text-white">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Hollywood"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
