import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
	return (
		<div className="card">
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
	);
}
