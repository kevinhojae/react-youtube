import * as React from "react";
import VideoList from "./video-list";
import useVideos from "../hooks/use-videos";
import useLocalVideos from "../hooks/use-local-videos";
import { useQuery } from "react-query";
import {
	getMostPopularYoutubeVideos,
	getSearchYoutubeVideos,
} from "../youtube-api";

const VideoListContainer = ({ mode, query }) => {
	const { data, isLoading, error } = useQuery(
		[mode, { query }],
		mode === "most-popular"
			? getMostPopularYoutubeVideos
			: getSearchYoutubeVideos
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>error</div>;
	}

	return (
		<div className="grid">
			{"items" in data ? (
				<VideoList videos={data} mode={mode} />
			) : null}
		</div>
	);
};

export default VideoListContainer;
