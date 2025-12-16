import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

function LoaderProvider({ children }) {
	const [loader, setLoader] = useState(false);

	return (
		<LoaderContext.Provider
			value={{
				loader,
				setLoader,
			}}
		>
			{children}
		</LoaderContext.Provider>
	);
}

function useLoader() {
	return useContext(LoaderContext);
}

export { LoaderProvider, useLoader };
