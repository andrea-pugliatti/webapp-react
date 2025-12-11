import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const endpoint = `http://localhost:3000/api/movies/${id}`;

	useEffect(() => {
		fetch(endpoint)
			.then((res) => res.json())
			.then((res) => {
				setMovie(res);
			})
			.catch((err) => {
				throw err;
			});
	}, []);

	return (
		<div className="container">
			<div className="movie-detail">
				<div key={movie.id}>
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
				</div>
			</div>
		</div>
	);
}
