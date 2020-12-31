import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import PercentageCircle from "../percentage_circle"
import "./index.css";
import React from "react";
import Circle from "react-progressbar.js";

var containerStyle = {
    width: '200px',
    height: '200px'
};
var options = {
    strokeWidth: 2
};
const MovieCard = ({id, poster, release_date, title, vote_average}) => (

    <>
        <div className="col-md-6 col-lg-3">

            <Link
                to={`${process.env.PUBLIC_URL}/detail/${id}`}
                key={id}>
                <div className="card border-0">
                    <a href="#">
                        <div className="rating scale-on-hover">
                            <Circle
                                text={'test'}
                                options={options}
                                initialAnimate={true}
                                containerStyle={containerStyle}
                                containerClassName={'.progressbar'}
                            />
                        </div>
                        <img className="card-img-top scale-on-hover" src={`https://image.tmdb.org/t/p/w500/${poster}`}
                             alt="movie_poster"/>
                    </a>
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
