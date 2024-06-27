import React, { useEffect } from "react";
import { addNowPlayingMovies } from "src/utils/movieSlice";
import { API_OPTIONS } from "src/utils/const";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
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
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
