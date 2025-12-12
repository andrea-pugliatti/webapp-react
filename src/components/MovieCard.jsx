import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
	return (
		<div className="card">
			<Link to={`/movie/${movie.id}`}>
				<img
					src={`http://localhost:3000/img/${movie.image}`}
					alt={movie.title}
				/>
				<div className="movie-title">{movie.title}</div>
			</Link>
		</div>
	);
}
