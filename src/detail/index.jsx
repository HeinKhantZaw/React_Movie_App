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
    const trailer = useReducerAPI(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}&language=en-US`);

    if (movieDetails && movieDetails.data && trailer && trailer.data) {
        return (
            <>
                <div className="photo-card">
                    <div className="photo-background"
                         style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieDetails.data.backdrop_path})`}}/>
                    <div className="movie-details">
                        <h1>{movieDetails.data.original_title}</h1>
                        <p className="tagline">{movieDetails.data.tagline}</p>
                        <br/>
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
                <hr/>
                <h2>Official Trailer</h2>
                <div className="youtubeContainer">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.data.results[0].key}`} frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                </div>
            </>)
    }
    return <>{movieDetails.loading && <Loading/>}</>;
};
export default Detail;
