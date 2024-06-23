import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastMovieApi } from "../../api/TMDB";

const defaultImg =
  "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castMovie = await getCastMovieApi(movieId);
        console.log(castMovie)
        setCast(castMovie);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((el) => (
          <li key={el.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
            />
            <p>{el.original_name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
