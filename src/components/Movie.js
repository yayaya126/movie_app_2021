import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from './asdf.jpg';
import "./Movie.css";
import { getElementError } from "@testing-library/dom";


function Movie({ id, year, title, summary, poster, genres }) {
  console.log(poster);

  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres
          }
        }}
      >
        {{poster} ? (console.log('asd')) : (<span>123</span>)}
        <img src={poster} alt={title} title={title} onError={(e) => {
          console.log(e);
          if (e.type == "error") {
            console.log(e.type);
            e.target.removeAttribute("src");
            e.target.setAttribute("style","background-image: url("+ {logo} +")");
          } else {
            console.log("정상");
          }
          console.log(e);
          // e.target.setAttribute("style","width:150px; height:225px; background:black");
          // e.target.removeAttribute("alt");
          // e.target.removeAttribute("title"); 
        }} />
        <img src={logo} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;