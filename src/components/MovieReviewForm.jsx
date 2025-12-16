import { useState } from "react";

import { useAlert } from "../contexts/AlertContext";

export default function MovieReviewForm({ movieId, fetchMovie }) {
	const emptyForm = {
		name: "",
		vote: "1",
		text: "",
	};

	const [formData, setFormData] = useState(emptyForm);

	const { alert, setAlert } = useAlert();

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(`http://localhost:3000/api/movies/${movieId}/review`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => {
				setFormData(emptyForm);
				setAlert({ show: true, message: "Review sent successfully." });
				if (!res.ok) {
					setAlert({ show: true, message: "An error occurred." });
				}
			})
			.catch((error) => {
				console.error("Error submitting review", error);
			})
			.finally(() => {
				fetchMovie();
			});
	};

	return (
		<form onSubmit={handleSubmit} className="review-form">
			{alert.show && <div>{alert.message}</div>}
			<div className="form-top">
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
			</div>

			<div className="form-text">
				<textarea
					name="text"
					id="text"
					rows="5"
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
