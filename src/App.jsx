import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoaderProvider } from "./contexts/LoaderContext";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";

function App() {
	return (
		<LoaderProvider>
			<BrowserRouter>
				<Routes>
					<Route Component={DefaultLayout}>
						<Route path="/" element={<Homepage />} />
						<Route path="/movie/:id" element={<MovieDetail />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</LoaderProvider>
	);
}

export default App;
