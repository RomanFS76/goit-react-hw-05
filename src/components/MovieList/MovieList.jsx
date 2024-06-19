

const MovieList = ({ movies }) => {
  console.log(movies)
  return (    
    <div>
      <ul>
        {movies.map((movie) => {
          <li key={movie.id}>{movie.id}</li>
        })}
      </ul>
    </div>
  )
};

export default MovieList;
