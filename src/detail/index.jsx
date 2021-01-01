import React, {useContext} from "react";
import {MovieApiContext} from "../context";
import {useReducerAPI} from "../api";
import {useParams} from "react-router-dom";
import "./index.css"
import Loading from "../components/loading";

const Detail = () => {
    let {movieID} = useParams();
    const apiKey = useContext(MovieApiContext);
    const movieDetails = useReducerAPI(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`);
    console.log(movieDetails)
    if (movieDetails && movieDetails.data) {
        return (
            <>
                <div className="photo-card">
                    {/*<img className="poster" src={`https://image.tmdb.org/t/p/w200${movieDetails.data.poster_path}`}*/}
                    {/*     alt="moviePoster"/>*/}
                    <div className="photo-background"
                         style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780${movieDetails.data.backdrop_path})`}}/>
                    <div className="photo-details">
                        <h1>{movieDetails.data.original_title}</h1>
                        <p className="intro-text">{movieDetails.data.tagline}</p>
                        <p>{movieDetails.data.overview} </p>
                        <p className="movieBudget">Budget: ${movieDetails.data.budget}</p>
                        <p className="movieRevenue">Revenue: ${movieDetails.data.revenue}</p>
                        <p className="movieReleaseDate">ReleaseDate: {movieDetails.data.release_date}</p>
                        <div className="photo-tags">
                            <ul>
                                {movieDetails.data.genres.map((item) => {
                                    return <li>{item.name}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>)
    }
    return <>{movieDetails.loading && <Loading/>}</>;
};
export default Detail;
