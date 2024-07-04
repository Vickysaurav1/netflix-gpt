import React, { useEffect } from "react";
import { addTrailerVideo } from "src/utils/movieSlice";
import { API_OPTIONS } from "src/utils/const";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  //fetch the data and put it in store
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.lenght ? filterData[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
