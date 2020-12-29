import React, { useContext } from "react";
import { MovieApiContext } from "../context";
import { useReducerAPI } from "../api";
import {useParams} from "react-router-dom";
import Review from "../review"

const Detail = () => {
let{movieID} = useParams();
const apiKey = useContext(MovieApiContext);
const movieDetails = useReducerAPI(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`);
  console.log(movieDetails)
  if (movieDetails && movieDetails.data){
    return (
      <div className="container">
        <img className="background" src={`https://image.tmdb.org/t/p/w500/${movieDetails.data.backdrop_path}`} alt="background"/>
        <img className="poster" src={`https://image.tmdb.org/t/p/w200/${movieDetails.data.poster_path}`} alt="moviePoster"/>
        <p className="movieName">{movieDetails.data.original_title}</p>
        <p className="movieTagline">{movieDetails.data.tagline}</p>
        <p className="movieBudget">Budget:${movieDetails.data.budget}</p>
        <p className="movieRevenue">Revenue:${movieDetails.data.revenue}</p>
        <p className="movieOverview">Overview: {movieDetails.data.overview}</p>
        <p className="movieReleaseDate">RelaseDate:{movieDetails.data.release_date}</p>
        <Review/>
        </div>
    )
  }
 return <>{movieDetails.loading && <div>LOADING</div>}</>;  
};
export default Detail;
