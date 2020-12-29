import PropTypes from "prop-types";

import "./index.css";
const MovieCard = ({ id, poster, release_date, title,vote_average }) => (
  <>
    <div className="card">
      <div className="card-row">
        <div className="card-col">
            <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt="movie_poster"/>
          <p className="movie_id">
            MovieID:{id} 
          </p>
          <p className="title">
              Title: {title}
          </p>
          <p className="vote">
              Vote: {vote_average}
          </p>
          <p className="relase_date">
              RelaseDate: {release_date}
          </p>
        </div>
      </div>
    </div>
  </>
);

export default MovieCard;

MovieCard.propTypes = {
  id: PropTypes.number,
  original_title: PropTypes.string,
  vote_average: PropTypes.number,
};
