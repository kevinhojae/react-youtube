import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root, { loader as rootLoader } from "./routes/root";
import SearchResultPage, {
	loader as searchLoader,
	action as searchAction,
} from "./routes/search-page";
import MostPopularVideos from "./routes/most-popular-videos";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		loader: rootLoader,
		// action: rootAction,
		children: [
			{
				index: true,
				element: <MostPopularVideos />,
			},
			{
				path: "/search",
				element: <SearchResultPage />,
				loader: searchLoader,
				action: searchAction,
			},
			{
				path: "/video/:id",
				element: <div>Video</div>,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
