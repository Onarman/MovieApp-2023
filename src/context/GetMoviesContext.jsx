import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const GetMovies = createContext();

const GetMoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortValue, setSortValue] = useState('');

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
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  const sortMovies = (movies, sortValue) => {
    if (sortValue === 'title-asc') {
      return [...movies].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === 'title-desc') {
      return [...movies].sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortValue === 'rating-asc') {
      return [...movies].sort((a, b) => a.vote_average - b.vote_average);
    } else if (sortValue === 'rating-desc') {
      return [...movies].sort((a, b) => b.vote_average - a.vote_average);
    } else {
      return movies;
    }
  };

  const sortedMovies = sortMovies(movies, sortValue);

  return (
    <GetMovies.Provider
      value={{
        movies: sortedMovies,
        loading,
        getMovies,
        apiUrl,
        setMovies,
        setLoading,
        handleSortChange,
        sortValue,
      }}
    >
      {children}
    </GetMovies.Provider>
  );
};

export default GetMoviesProvider;