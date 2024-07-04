import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "src/utils/const";
import { addGptMovies } from "src/utils/gptSlice";
import openai from "src/utils/openAI";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  //search movie in tmdb

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //make an api call to openAI and get movie result
    const movieQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "comma seperated and maximum 10 movies suggestion like the expamle given ahead. Example: Lagan, 3 idiots, andaz apna apna";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: movieQuery }],
      model: "gpt-3.5-turbo",
    });
    //movies with comma separated.
    const gptMovies = gptResults.choices[0].message.content.split(",");
    //movies in an array like [indian, mother india]

    //for each movie i will search tmdb movie api and find the movie
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    console.log(tmdbResults);
  };

  return (
    <div className="pt-[50%] md:pt-[25%] flex justify-center relative">
      <form
        className="w-[100%] md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-8 md:col-span-10 border-solid border-purple-500 border-2 rounded-lg"
          type="text"
          placeholder="what would you like to watch today?"
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-purple-500 rounded-lg px-4 py-2 m-4 col-span-4 md:col-span-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
