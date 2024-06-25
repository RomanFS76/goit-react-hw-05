import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";
const ACCESS_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTYyMDlhZDAwYzg4ZTcwYzRmY2Q2Y2VhMjM0MTg1NCIsInN1YiI6IjY2NmVjZDRlZWE4MGFjNWViNTZiYmU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NBenh901L3YinAQ9IzzUIydlNWtDpy9-b6cB17idco0"


const instance = axios.create({
  baseURL: "https://api.themoviedb.org/",  
  headers: {
    Authorization: ACCESS_TOKEN,
  },
});

const getTrendingMovieApi = async () => {
  const { data } = await instance.get("3/trending/movie/day");
  return data.results;
};

// https://api.themoviedb.org/3/movie/{movie_id}

const getDetailsMovieApi = async (id) => {
  const { data } = await instance.get(`3/movie/${id}`);
  return data;
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits

const getCastMovieApi = async (id) => {
  const { data } = await instance.get(`3/movie/${id}/credits`);
  return data.cast;
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews

const getReviewsMovieApi = async (id) => {
  const { data } = await instance.get(`3/movie/${id}/reviews`);
  return data.results;
};

// https://api.themoviedb.org/3/search/movie

const getSearchMovieApi = async (query) => {
  const { data } = await instance.get(`3/search/movie`, {params:{query}});
  return data.results;
};

export {
  getTrendingMovieApi,
  getDetailsMovieApi,
  getCastMovieApi,
  getReviewsMovieApi,
  getSearchMovieApi
};


// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { getSearchMovieApi } from "../../api/TMDB";

// const MoviesPage = () => {
//   const [params, setParams] = useSearchParams();
//   const [search, setSearch] = useState([]);


//   useEffect(() => {
// const query = params.get("query")
// if(!query)return;

//     const searchMovie = async () => {
//       try {
//         const searchData = await getSearchMovieApi(query);
//         setSearch(searchData);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     searchMovie();
//   }, [search]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e);
//     const searchInput = e.target.elements.search.value;
   
//     if (searchInput === "") {
//       alert("Field must be filled");
//       return;
//     }
// setParams({query:searchInput  });
//     e.target.reset();
//   };



//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search movie"
//         name="search"
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default MoviesPage;