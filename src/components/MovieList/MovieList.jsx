import { Link } from "react-router-dom";
import clsx from "clsx";
import css from "./MovieList.module.css";



const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`} className={css.link}>
                {movie.original_title}
                
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
