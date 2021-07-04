import React from 'react'
import MovieCard from './MovieCard.js'
import { Link } from 'react-router-dom';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie) => (<Link to={`/details/${movie.id}`}>
				<MovieCard movie={movie} /></Link>
			))}
		</>
	);
};
export default MovieList;
