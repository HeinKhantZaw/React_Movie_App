import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import PercentageCircle from "../percentage_circle"
import "./index.css";
import React from "react";
const MovieCard = ({id, poster, release_date, title, vote_average}) => (

    <>
        <div className="col-md-6 col-lg-3">
            <Link
                to={`${process.env.PUBLIC_URL}/detail/${id}`}
                key={id}>
                <div className="card border-0">
                    <div className="rating">
                    <PercentageCircle percentage={vote_average*10}
                                      sqSize={50}
                                      strokeWidth={3}
                    />
                    </div>
                        <div className="rating scale-on-hover">
                        </div>
                        <img className="card-img-top scale-on-hover" src={`https://image.tmdb.org/t/p/w500/${poster}`}
                             alt="movie_poster"/>
                    <div className="card-body">
                        <h6>{title}</h6>
                        <p className="text-muted card-text">
                            {release_date}<br/>
                            <br/>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    </>
);

export default MovieCard;

MovieCard.propTypes = {
    id: PropTypes.number,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
};
