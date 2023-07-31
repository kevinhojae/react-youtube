import * as React from "react";
import useVideos from "../hooks/use-videos";
import VideoList from "./video-list";
import useLocalVideos from "../hooks/use-local-videos";

const VideoListContainer = ({ mode, query }) => {
	// const { isLoading, videos, error } = useVideos({
	// 	mode: mode,
	// 	query: query,
	// });
	const { isLoading, videos, error } = useLocalVideos({
		mode: mode,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>error</div>;
	}

	return (
		<div className="grid">
			{"items" in videos ? (
				<VideoList videos={videos} mode={mode} />
			) : null}
		</div>
	);
};

export default VideoListContainer;
