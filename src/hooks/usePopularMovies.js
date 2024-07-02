import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "src/utils/const";
import { addPopularMovies } from "src/utils/movieSlice";

const usePopularMovies = () => {
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
    popularMovies();
  }, []);
};

export default usePopularMovies;
