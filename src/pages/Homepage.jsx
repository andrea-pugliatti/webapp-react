import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
					<div key={movie.id} className="card">
						<Link to={`/movie/${movie.id}`}>
							<img
								height={200}
								src={`http://localhost:3000/img/${movie.image}`}
								alt={movie.title}
							/>
							<div>{movie.title}</div>
							<div>{movie.director}</div>
							<div>{movie.genre}</div>
							<div>{movie.release_year}</div>
							<div>{movie.abstract}</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
