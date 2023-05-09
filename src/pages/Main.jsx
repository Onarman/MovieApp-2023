import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); 

  const api = "b3e44ae813fd28033f407a2a8ac67ae3";
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api}`;

  useEffect(() => {
    getMovies(apiUrl);
  }, []);

  const getMovies = async (apiUrl) => {
    try {
      setLoading(true);
      const res = await axios.get(apiUrl);
      setMovies(res.data.results); 
      console.log(res.data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); 
    }
  };

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