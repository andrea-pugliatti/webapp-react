import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";

import { useLoader } from "../contexts/LoaderContext";

export default function DefaultLayout() {
	const { loader } = useLoader();

	return (
		<>
			<Header />
			{loader && <Loader />}
			<Outlet />
			<Footer />
		</>
	);
}
