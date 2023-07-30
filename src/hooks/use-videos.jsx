import React, { useState, useEffect, useContext } from "react";

const buildQuery = ({ mode, query }) => {
	const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
	const requestNum = import.meta.env.VITE_REQUEST_NUM;
	if (mode === "most-popular") {
		return `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${requestNum}&key=${apiKey}`;
	} else if (mode === "search") {
		return `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=${requestNum}&key=${apiKey}`;
	}
};

const useVideos = ({ mode, query }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [videos, setVideos] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchVideos = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(buildQuery({ mode, query }));
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
	}, [query]);

	return { isLoading, videos, error };
};

export default useVideos;
