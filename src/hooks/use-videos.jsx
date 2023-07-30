import * as React from "react";

export default function useVideos() {
	const [isLoading, setIsLoading] = React.useState(false);
	const [videos, setVideos] = React.useState([]);
	const [error, setError] = React.useState(null);

	React.useEffect(async () => {
		setIsLoading(true);

		try {
			const response = await fetch("https://youtube.com/api/v3");
			const result = await response.json();
			setVideos(result);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}

		return () => {
			console.log("cleanup");
		};
	}, []);
}
