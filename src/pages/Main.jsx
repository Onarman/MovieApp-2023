import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

import { GetMovies } from "../context/GetMoviesContext";
import { useContext } from "react";

const Main = () => {
  const { movies, loading } = useContext(GetMovies);

  return (
    <div className="container">
      <Navbar />
      <div className="body">
        <div className="movies d-flex justify-center flex-wrap">
          {loading ? (
            <div className="spinner-border text-primary m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : movies.length === 0 ? (
            <div>No movies found.</div>
          ) : (
            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
