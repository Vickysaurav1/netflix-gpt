import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //this if statement is written because initally the store will load as null which may break our application
  if (movies === null) return;
  return (
    <div className="p-6">
      <h1 className="text-xl py-4">{title}</h1>
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
