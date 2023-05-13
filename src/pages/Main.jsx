import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

import { GetMovies } from "../context/GetMoviesContext";
import { useContext, useEffect, useRef,useState } from "react";

const Main = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const { movies, loading } = useContext(GetMovies);

  const [searchValue, setSearchValue] = useState("");
  const filterMovies = (movies, searchValue) => {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchValue.toLowerCase());
    });
  };
  const filteredMovies = filterMovies(movies, searchValue);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchInput = event.target.elements.searchInput;
    setSearchValue(searchInput.value);
    searchInput.value="";
  };


  return (
    <div className="container">
      <Navbar />
      <div className="filter">
        <form onSubmit={handleSearch}>
          <input type="text" ref={inputRef} name="searchInput" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="body">
        <div className="movies d-flex justify-center flex-wrap">
          {loading ? (
            <div className="spinner-border text-primary m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : filteredMovies.length === 0 ? (
            <div>{movies && "No Found Movies"}</div>
          ) : (
            filteredMovies.map((movie) => <MovieCard key={movie.id} {...movie} />)
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
