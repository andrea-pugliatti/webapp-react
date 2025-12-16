import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

function AlertProvider({ children }) {
	const emptyAlert = {
		show: false,
		message: "",
	};
	const [alert, setAlert] = useState(emptyAlert);

	return (
		<AlertContext.Provider
			value={{
				alert,
				setAlert,
			}}
		>
			{children}
		</AlertContext.Provider>
	);
}

function useAlert() {
	return useContext(AlertContext);
}

export { AlertProvider, useAlert };
