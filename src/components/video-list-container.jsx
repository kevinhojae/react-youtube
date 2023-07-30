import * as React from "react";
import useVideos from "../hooks/use-videos";
import VideoList from "./video-list";

const VideoListContainer = ({ mode, query }) => {
	const { isLoading, videos, error } = useVideos({
		mode: mode,
		query: query,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>error</div>;
	}

	return (
		<div className="grid">
			{"items" in videos ? <VideoList videos={videos} mode={mode} /> : null}
		</div>
	);
};

export default VideoListContainer;
