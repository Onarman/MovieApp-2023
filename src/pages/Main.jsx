import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

import { GetMovies } from "../context/GetMoviesContext";
import { useContext, useEffect, useRef, useState } from "react";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { movies, loading, handleSortChange, sortValue } = useContext(GetMovies);

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
    searchInput.value = "";
  };

  return (
    <div className="container">
      <Navbar />
      <div className="filter-sort-container">
        <div className="filter">
          <form onSubmit={handleSearch}>
            <input type="text" ref={inputRef} name="searchInput" placeholder="Search Movie... " />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="sort">
          <label htmlFor="sortSelect">Sort By:</label>
          <select id="sortSelect" value={sortValue} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
            <option value="rating-asc">Rating (Low to High)</option>
            <option value="rating-desc">Rating (High to Low)</option>
          </select>
        </div>
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