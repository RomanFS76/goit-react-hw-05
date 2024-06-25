import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovieApi } from "../../api/TMDB";

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState([]);


  useEffect(() => {
    const query = params.get("query");
    if (!query) return;
    const searchMovie = async () => {
      try {
        const searchData = await getSearchMovieApi(query);
        console.log(searchData);
        setSearch(searchData);
        
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    searchMovie();
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInput = e.target.elements.search.value;
    console.log(searchInput);
    if (searchInput === "") {
      alert("Field must be filled");
      return;
    }
    setParams({query:searchInput  });
    e.target.reset();
  };



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movie"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
      {search.length > 0 && <MovieList movies={search}></MovieList>}
    </>
  );
};

export default MoviesPage;
