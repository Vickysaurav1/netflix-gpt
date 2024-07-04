import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
//import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const VideoBackground = lazy(()=>import("./VideoBackground"))
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} movieId = {id} />
      <Suspense fallback={<div>Loading...</div>}>
      <VideoBackground movieId={id} />
      </Suspense>
    </div>
  );
};

export default MainContainer;
