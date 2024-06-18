import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((el) => {
          <li key={el.id}>
            <Link>{el.original_title}</Link>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default MovieList;
