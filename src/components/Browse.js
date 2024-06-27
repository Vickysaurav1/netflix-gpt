import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "src/hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
