import { useQuery } from "react-query";
import VideoList from "./video-list";
import { getRelatedYoutubeVideos } from "../youtube-api";

const RelatedVideoListContainer = ({ videoId }) => {
	const { data, isLoading, error } = useQuery(
		["related", { videoId }],
		getRelatedYoutubeVideos
	);
	// const { isLoading, videos, error } = useLocalVideos({
	// 	mode: "related",
	// });

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>error</div>;
	}

	return (
		<div className="side-list">
			{"items" in data ? (
				<VideoList videos={data} mode="related" />
			) : null}
		</div>
	);
};

export default RelatedVideoListContainer;
