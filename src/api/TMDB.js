import axios from "axios";



axios.defaults.baseURL = 'https://api.themoviedb.org/';
const option =  {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTYyMDlhZDAwYzg4ZTcwYzRmY2Q2Y2VhMjM0MTg1NCIsInN1YiI6IjY2NmVjZDRlZWE4MGFjNWViNTZiYmU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NBenh901L3YinAQ9IzzUIydlNWtDpy9-b6cB17idco0'
    }
  };

export const getTrendingMovieApi = async () => {
    const {data}  = await axios.get ('3/trending/movie/day', option)
    return data.results
    
}