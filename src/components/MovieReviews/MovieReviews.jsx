import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsMovieApi } from "../../api/TMDB";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const movieReviews = await getReviewsMovieApi(movieId);

        console.log(movieReviews);
        setReviews(movieReviews);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ?
        reviews.map((el) => {
          return (
          <li key={el.id}>
            <p>{el.author}</p>
            <p>{el.content}</p>
          </li>
          ) 
        }) : <p>We don't have any reviews for this movie</p>  
      }
    </div>
  );
};

export default MovieReviews;
