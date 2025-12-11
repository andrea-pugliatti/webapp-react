import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<div className="nav">
				<h1>mOOOvies</h1>
				<NavLink to="/">Home</NavLink>
			</div>
		</header>
	);
}
