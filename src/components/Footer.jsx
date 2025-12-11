import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer>
			<div className="nav">
				<h1>mOOOvies</h1>
				<Link to="/">Questo è il footer</Link>
			</div>
		</footer>
	);
}
