import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "src/utils/const";
import {addTopRatedMovies} from "src/utils/movieSlice";

const useTopRatedMovies = () => {
  //check topRatedMovies and then make api call
  const topRatedMovie = useSelector(store=> store.movies.topRatedMovies)
    const dispatch = useDispatch();
  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS
    );
    const results = await data.json();
    dispatch(addTopRatedMovies(results?.results))
  };

  useEffect(()=>{
   !topRatedMovie && topRatedMovies();
  },[])
};

export default useTopRatedMovies;
