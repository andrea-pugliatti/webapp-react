import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieReviewForm({ movieId }) {
	const emptyForm = {
		name: "",
		vote: "1",
		text: "",
	};

	const [formData, setFormData] = useState(emptyForm);

	const navigate = useNavigate();

	const handleSubmit = () => {
		fetch(`http://localhost:3000/api/movies/${movieId}/review`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then(() => {
				setFormData(emptyForm);
				navigate(`/movie/${movieId}`);
			})
			.catch((error) => {
				console.error("Error submitting review", error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-name">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="John"
					value={formData.name}
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					required
				/>
			</div>

			<div className="form-rating">
				<label htmlFor="vote">Rating</label>
				<select
					name="vote"
					id="vote"
					value={formData.vote}
					onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
					required
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
				</select>
			</div>

			<div className="form-text">
				<label htmlFor="text">Review</label>
				<textarea
					name="text"
					id="text"
					rows="3"
					placeholder="Say something about this movie..."
					value={formData.text}
					onChange={(e) => setFormData({ ...formData, text: e.target.value })}
					required
				></textarea>
			</div>

			<button className="form-button" type="submit">
				Submit
			</button>
		</form>
	);
}
