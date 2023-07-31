import * as React from "react";
import VideoList from "./video-list";
import useVideos from "../hooks/use-videos";
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
				<VideoList
					videos={videos}
					mode={mode}
				/>
			) : null}
		</div>
	);
};

export default VideoListContainer;
