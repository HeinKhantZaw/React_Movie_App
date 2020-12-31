import React, {useContext} from "react";
import {MovieApiContext} from "../context";
import {useReducerAPI} from "../api";
import {useParams} from "react-router-dom";
import Review from "../components/review"

const Detail = () => {
    let {movieID} = useParams();
    const apiKey = useContext(MovieApiContext);
    const movieDetails = useReducerAPI(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`);
    console.log(movieDetails)
    if (movieDetails && movieDetails.data) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="brand-heading">{movieDetails.data.original_title}</h1>
                            <p className="intro-text">{movieDetails.data.tagline}
                            </p><a className="btn btn-link btn-circle" role="button" href="#about">
                            <i className="fa fa-angle-double-down animated"/></a>
                        </div>
                    </div>
                </div>
                <img className="poster" src={`https://image.tmdb.org/t/p/w200/${movieDetails.data.poster_path}`}
                     alt="moviePoster"/>
                <p className="movieName">{movieDetails.data.original_title}</p>
                <p className="movieRevenue">Revenue:${movieDetails.data.revenue}</p>
                <p className="movieOverview">Overview: {movieDetails.data.overview}</p>
                <p className="movieReleaseDate">RelaseDate:{movieDetails.data.release_date}</p>
                <Review/>
            </>)
    }
    return <>{movieDetails.loading && <div>LOADING</div>}</>;
};
export default Detail;
