import { useEffect, useState } from "react";

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
		<>
			<h1>Hello</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
				facilis reprehenderit accusamus earum id quia eligendi rem harum nemo!
				Deserunt vel expedita excepturi maxime totam exercitationem doloribus
				aut ipsam modi?
			</p>
			{movies.map((movie) => (
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
			))}
		</>
	);
}
