import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const GetMovies = createContext()

const GetMoviesProvider = ({children}) => {
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
	<GetMovies.Provider value={{movies,loading}}>
		{children}
	</GetMovies.Provider>
  )
}

export default GetMoviesProvider