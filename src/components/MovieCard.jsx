// import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w500";
const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';


const MovieCard = ({id,title,poster_path,vote_average}) => {
  return (
	<div className='movie-card'>
		<img 
		src={poster_path ? IMG_API + poster_path : defaultImage}
		alt="movie card"
		loading='lazy'
		/>
		<div>
			<h5>{title}</h5>
			<h5>{vote_average}</h5>
		</div>
		
		{/* <div className="movie-over">
			<h2>Overview</h2>
			<p>{overview}</p>
		</div> */}
	</div>
  )
}

export default MovieCard

