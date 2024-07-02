import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "src/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "src/hooks/usePopularMovies";
import useTopRatedMovies from "src/hooks/useTopRatedMovies";
import useUpcomingMovies from "src/hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearchView = useSelector((store) => store?.gpt?.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
      Main Container
        -Video player
        -video title

      Secondary container
        -Movies List * n
          - cards *n
       */}
    </div>
  );
};

export default Browse;
