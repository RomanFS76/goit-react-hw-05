
import { useEffect, useState } from "react";
import { getTrendingMovieApi } from "../../api/TMDB";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";



const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location)
  
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getTrendingMovieApi();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies}></MovieList>}
    </>
  )
};

export default HomePage;




