import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
	return (
		<>
			<header>
				<h1>Title</h1>
			</header>
			<Outlet />
			<footer>
				<h1>Footer</h1>
			</footer>
		</>
	);
}
