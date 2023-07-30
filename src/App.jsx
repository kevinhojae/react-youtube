import React, { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Root, {
	loader as rootLoader,
	action as rootAction,
} from "./routes/root";
import SearchResultPage, {
	loader as searchLoader,
	action as searchAction,
} from "./routes/search-page";

export const ApiContext = createContext();
const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{ index: true, element: <div>Home</div> },
			{
				path: "/search",
				element: <SearchResultPage />,
				loader: searchLoader,
				action: searchAction,
			},
		],
	},
]);

function App() {
	return (
		<>
			<ApiContext.Provider value={apiKey}>
				<RouterProvider router={router} />
			</ApiContext.Provider>
		</>
	);
}

export default App;
