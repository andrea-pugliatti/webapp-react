import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlertProvider } from "./contexts/AlertContext";
import { LoaderProvider } from "./contexts/LoaderContext";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";

function App() {
	return (
		<LoaderProvider>
			<AlertProvider>
				<BrowserRouter>
					<Routes>
						<Route Component={DefaultLayout}>
							<Route path="/" element={<Homepage />} />
							<Route path="/movie/:id" element={<MovieDetail />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</AlertProvider>
		</LoaderProvider>
	);
}

export default App;
