import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute">
        <img
          className="hidden w-screen h-screen md:flex -z-10 "
          src="https://cdn.pixabay.com/photo/2021/11/01/16/17/clay-6760967_1280.jpg"
          alt="bg-img"
        />
        <img
          className="md:hidden w-screen h-screen -z-10"
          src="https://images.unsplash.com/photo-1620486167663-415d0bf98e53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNpbmVtYXRpYyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
      <div className="flex flex-col">
      <GptSearchBar />
      <GptMovieSuggestion />
      </div>
     
    </div>
  );
};

export default GptSearch;
