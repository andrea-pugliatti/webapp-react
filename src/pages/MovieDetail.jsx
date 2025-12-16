/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <Linter bug> */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieReview from "../components/MovieReview";
import MovieReviewForm from "../components/MovieReviewForm";
import { useLoader } from "../contexts/LoaderContext";

export default function MovieDetail() {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const endpoint = `http://localhost:3000/api/movies/${id}`;

	const { setLoader } = useLoader();

	useEffect(() => {
		setLoader(true);
		fetch(endpoint)
			.then((res) => res.json())
			.then((res) => {
				setMovie(res);
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {
				setLoader(false);
			});
	}, []);

	return (
		<div className="container">
			<div className="movie-detail">
				<img
					src={`http://localhost:3000/img/${movie.image}`}
					alt={movie.title}
				/>
				<div className="movie-body">
					<h2 className="movie-title">{movie.title}</h2>
					<div className="movie-director">
						<b>Director:</b> {movie.director}
					</div>
					<div className="movie-release">
						<b>Year:</b> {movie.release_year}
					</div>
					<div className="movie-genre">
						<b>Genre:</b> {movie.genre}
					</div>
					<div className="movie-abstract">
						<b>Abstract:</b> {movie.abstract}
					</div>
					<div className="movie-reviews">
						<h3>Reviews: </h3>
						<MovieReviewForm movieId={id} />
						<ul className="reviews">
							{movie.reviews
								? movie.reviews.map((review) => (
										<MovieReview key={review.id} review={review} />
									))
								: ""}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
