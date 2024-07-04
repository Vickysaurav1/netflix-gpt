import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "src/utils/const";
import { addPopularMovies } from "src/utils/movieSlice";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
   //check if popularMovie is already there in store.
   const popularMovie = useSelector((store) => store.movies.popularMovies);
  //fetch popular movies.

  const dispatch = useDispatch();
  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const results = await data.json();
    dispatch(addPopularMovies(results?.results));
    //console.log("results,",results);
  };

  useEffect(() => {
    !popularMovie && popularMovies();
  }, []);
};

export default usePopularMovies;
