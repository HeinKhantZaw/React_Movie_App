import React, {useContext} from "react";
import {MovieApiContext} from "../context";
import {useReducerAPI} from "../api";
import MovieCard from "../components/movie_card"

const Home = function () {
    const movieApiKey = useContext(MovieApiContext);
    const trendingMovies = useReducerAPI(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${movieApiKey}`
    );
    if (trendingMovies && trendingMovies.data) {
        const {results} = trendingMovies.data
        return (
            <>
                <div className="heading">
                    <h2>Trending movies this week</h2>
                </div>
                <div className="row">
                    {results.map(({id, poster_path, release_date, original_title, vote_average}) => (
                        <MovieCard id={id} poster={poster_path} release_date={release_date} title={original_title}
                                   vote_average={vote_average}/>
                    ))}
                </div>
            </>
        )
    }
    return <>{trendingMovies.loading && <div>LOADING</div>}</>;
};

export default Home;
