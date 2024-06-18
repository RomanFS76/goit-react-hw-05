/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getTrendingMovieApi } from "../api/TMDB";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTrendingMovieApi();
        console.log(data);
        setMovies(data);
      } catch (error) {
        setError(true);
      }
    };
    getData();
  }, []);

  return <>{movies.length > 0 && <MovieList movies={movies}></MovieList>}</>;
};

export default HomePage;
