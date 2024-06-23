import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovieApi } from "../../api/TMDB";

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");

  console.log(params);

  useEffect(() => {
    const searchMovie = async () => {
      try {
        const searchData = await getSearchMovieApi(query);
        setSearch(searchData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    searchMovie();
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const searchInput = e.target.elements.search.value;
    setQuery(searchInput);
    if (searchInput === "") {
      alert("Field must be filled");
      return;
    }
    e.target.reset();
  };

  const handleChange = ({ target: { value } }) => {
    params.set("query", value);
    setParams(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movie"
        name="search"
        value={params.get("query") ?? ""}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesPage;
