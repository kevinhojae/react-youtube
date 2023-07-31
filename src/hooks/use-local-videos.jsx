import React, { useState, useEffect, useContext } from "react";

const buildQuery = ({ mode }) => {
	// const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
	// const requestNum = import.meta.env.VITE_REQUEST_NUM;
	if (mode === "most-popular") {
		return `/most_popular_videos.json`;
	} else if (mode === "search") {
		return `/search_result.json`;
	} else if (mode === "related") {
		return `/related_videos.json`;
	}
};

const useLocalVideos = ({ mode }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [videos, setVideos] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchVideos = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(buildQuery({ mode }));
				const result = await response.json();
				setVideos(result);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchVideos();

		return () => {
			console.log("cleanup");
		};
	}, []);

	return { isLoading, videos, error };
};

export default useLocalVideos;
