import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import Root, { loader as rootLoader } from "./routes/root";
import SearchResultPage, {
	loader as searchLoader,
	action as searchAction,
} from "./routes/search-result";
import MostPopularVideos from "./routes/video-popular";
import VideoDetail from "./routes/video-detail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		loader: rootLoader,
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
				element: <VideoDetail />,
			},
		],
	},
]);

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchOnMount: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
