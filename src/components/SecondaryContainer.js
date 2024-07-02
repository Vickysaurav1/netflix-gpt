import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "src/hooks/usePopularMovies";

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
  //usePopularMovies();
  const movies = useSelector((store) => store?.movies);
  if (movies === null) return;

  console.log("secondaryContainerJs", movies);
  return (
    <div className="bg-black text-white">
      <div className="-mt-52 z-10 relative">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
