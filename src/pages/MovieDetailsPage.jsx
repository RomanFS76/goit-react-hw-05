import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getDetailsMovieApi } from "../api/TMDB";


const MovieDetailsPage = () => {
  const {movieId} = useParams()
  const [data, setData] = useState({})


  useEffect(() => {
    
    if(!movieId) {return}

    const getData = async () => {
      try {
        const response = await getDetailsMovieApi(movieId);
        console.log(response)
        setData(response)
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getData();
  }, [movieId]);


  console.log(movieId)
  return (
    <div>
      <h1>{data.title}</h1>
      <p>Release: {data.release_date}</p>
      <p>Popularity: {data.popularity}</p>
      <h2>Overview: </h2>
      <p>{data.overview}</p>
      <h3>Genres</h3>
      <ul>
        {data.genres.map((genre)=>{
          <li key={genre.id}>{genre.name}</li>
        })}
      </ul>
    </div>
  )
}

export default MovieDetailsPage