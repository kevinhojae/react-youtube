import * as React from "react";
import useVideos from "../hooks/use-videos";

function VideoListContainer() {
	const { isLoading, videos, error } = useVideos();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>error</div>;
	}

	return (
		<RootLayout>
			<VideoList videos={videos} />
		</RootLayout>
	);
}
