/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <Linter bug> */
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
						height={400}
						src={`http://localhost:3000/img/${movie.image}`}
						alt={movie.title}
					/>
					<h2 className="movie-title">{movie.title}</h2>
					<div className="movie-director">{movie.director}</div>
					<div className="movie-genre">{movie.genre}</div>
					<div className="movie-release">{movie.release_year}</div>
					<div className="movie-abstract">{movie.abstract}</div>
					<h3>Recensioni</h3>
					<ul className="reviews">
						{movie.reviews
							? movie.reviews.map((review) => (
									<li key={review.id}>
										<div className="review-title">
											<span className="review-name">{review.name} </span>
											<span className="review-vote">{review.vote} / 5</span>
										</div>
										<div className="review-text">{review.text}</div>
									</li>
								))
							: ""}
					</ul>
				</div>
			</div>
		</div>
	);
}
