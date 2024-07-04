import React, { useEffect } from "react";
import { addNowPlayingMovies } from "src/utils/movieSlice";
import { API_OPTIONS } from "src/utils/const";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  //check if nowPlayingMovie is already there in store.
  const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovie);
  //fetch the data and put it in store
  const disptch = useDispatch();
  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    disptch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovie && nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
