import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [showForwardArrow, setShowForwardArrow] = useState(false);
  const handleOnMouseOver = () => {
    setShowForwardArrow(true);
  };
  const handleOnMouseOut = () => {
    setShowForwardArrow(false);
  };
  //this if statement is written because initally the store will load as null which may break our application
  if (movies === null) return;

  return (
    <div className="px-6">
      <div className="flex gap-2 items-center">
        <h1 onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut} className="text-xl py-4 cursor-pointer">
          {title}
        </h1>
        {showForwardArrow && <i class="fas fa-step-forward"></i>}
      </div>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
