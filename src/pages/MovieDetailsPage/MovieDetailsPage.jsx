import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getDetailsMovieApi } from "../../api/TMDB";
import css from "./MovieDetailsPage.module.css";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getData = async () => {
      try {
        const movieData = await getDetailsMovieApi(movieId);
        setDetails(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      <Link className={css.goBack}>Go back</Link>
      <div className={css.wrapInfo}>
        <img src={`${IMAGE_URL}${details.poster_path}`} alt={details.title} />
        <div>
          <h1>{details.title}</h1>
          <p>Release: {details.release_date}</p>
          <p>Popularity: {details.popularity}</p>
          <h2>Overview: </h2>
          <p>{details.overview}</p>
          <h3>Genres</h3>
          <ul className={css.Genres}>
            {details?.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <nav>
        <ul className={css.castReviews}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default MovieDetailsPage;
