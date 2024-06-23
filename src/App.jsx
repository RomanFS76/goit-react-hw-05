import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<MovieCast />}></Route>
          <Route path="/movies/:movieId/reviews" element={<MovieReviews  />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      </>
  );
}

export default App;
