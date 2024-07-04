import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "src/utils/const";
import { addUpcomingMovies } from "src/utils/movieSlice";

const useUpcomingMovies = () => {
  //check upcoming movie and then make an api call
  const upcomingMovie = useSelector(store=> store.movies.upcomingMovies);
  const dispatch = useDispatch();
  const upcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const results = await data.json();
      dispatch(addUpcomingMovies(results?.results));
  };
  useEffect(()=>{
   !upcomingMovie && upcomingMovies();
  },[])
};
export default useUpcomingMovies;
