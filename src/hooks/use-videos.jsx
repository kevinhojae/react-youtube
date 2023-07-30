import React, { useState, useEffect, useContext } from "react";

const buildQuery = ({ mode, query }) => {
	const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
	if ((mode = "most-popular")) {
		return `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${apiKey}`;
	} else if ((mode = "search")) {
		return `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}`;
	}
};

const useVideos = ({ mode, query }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [videos, setVideos] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log("useEffect triggered")
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
	}, []);

	return { isLoading, videos, error };
};

export default useVideos;
