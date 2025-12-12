import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

export default function Homepage() {
	const [movies, setMovies] = useState([]);
	const endpoint = "http://localhost:3000/api/movies";

	useEffect(() => {
		fetch(endpoint)
			.then((res) => res.json())
			.then((res) => {
				setMovies(res);
			})
			.catch((err) => {
				throw err;
			});
	}, []);

	return (
		<div className="container">
			<div className="row">
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
}
