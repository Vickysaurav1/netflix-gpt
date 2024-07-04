import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "src/utils/const";
import {addTopRatedMovies} from "src/utils/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS
    );
    const results = await data.json();
    dispatch(addTopRatedMovies(results?.results))
  };

  useEffect(()=>{
    topRatedMovies();
  },[])
};

export default useTopRatedMovies;
