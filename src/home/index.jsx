import React, { useContext } from "react";
import { MovieApiContext } from "../context";
import { useReducerAPI } from "../api";

const Home = function () {
  const movieApiKey = useContext(MovieApiContext);
  const trendingMovies = useReducerAPI(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${movieApiKey}`
  );

  console.log(trendingMovies);
  return <>Home</>;
};

export default Home;
