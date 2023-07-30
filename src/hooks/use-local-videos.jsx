import React, { useEffect, useState } from "react";

const useLocalVideos = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [videos, setVideos] = useState([]);
	const [error, setError] = useState(null);

	const fetchVideos = async () => {
		console.log("fetchVideos")
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch("videos.json");
			const data = await response.json();
			console.log("Data from fetch:", data); // Add this line
			setVideos(data);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchVideos();

		return () => {
			console.log("cleanup");
		};
	}, []);

	return { isLoading, videos, error };
};

export default useLocalVideos;
