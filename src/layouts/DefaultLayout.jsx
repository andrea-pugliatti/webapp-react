import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<footer>
				<h1>Footer</h1>
			</footer>
		</>
	);
}
