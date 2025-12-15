import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieReviewForm({ movieId }) {
	const emptyForm = {
		name: "",
		vote: "",
		text: "",
	};

	const [formData, setFormData] = useState(emptyForm);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`http://localhost:3000/api/movies/${movieId}/review`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				console.log("Review submitted successfully", response);
				setFormData(emptyForm);
				navigate(`/movie/${movieId}`);
			})
			.catch((error) => {
				console.error("Error submitting review", error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name" className="">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="John"
					value={formData.name}
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				/>
			</div>

			<div>
				<label htmlFor="vote" className="">
					Rating
				</label>
				<select
					name="vote"
					id="vote"
					value={formData.vote}
					onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
				>
					<option value={Number(1)}>1</option>
					<option value={Number(2)}>2</option>
					<option value={Number(3)}>3</option>
					<option value={Number(4)}>4</option>
					<option value={Number(5)}>5</option>
				</select>
			</div>

			<div>
				<label htmlFor="text" className="">
					Review
				</label>
				<textarea
					name="text"
					id="text"
					rows="3"
					placeholder="Say something about this movie..."
					value={formData.text}
					onChange={(e) => setFormData({ ...formData, text: e.target.value })}
				></textarea>
			</div>

			<button type="submit">Submit</button>
		</form>
	);
}
