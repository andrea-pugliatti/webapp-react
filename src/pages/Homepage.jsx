import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

import { useLoader } from "../contexts/LoaderContext";

export default function Homepage() {
	const [movies, setMovies] = useState([]);
	const endpoint = "http://localhost:3000/api/movies";
	const { setLoader } = useLoader();

	useEffect(() => {
		setLoader(true);
		fetch(endpoint)
			.then((res) => res.json())
			.then((res) => {
				setMovies(res);
			})
			.catch((err) => {
				throw err;
			})
			.finally(() => {
				setLoader(false);
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
