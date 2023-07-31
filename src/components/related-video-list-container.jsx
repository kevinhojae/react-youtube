import useVideos from "../hooks/use-videos";
import VideoList from "./video-list";

const RelatedVideoListContainer = ({ videoId }) => {
	const { isLoading, videos, error } = useVideos({
		mode: "related",
		query: videoId,
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>error</div>;
	}

	return (
		<div className="side-list">
			{"items" in videos ? (
				<VideoList
					videos={videos}
					mode="related"
				/>
			) : null}
		</div>
	);
};

export default RelatedVideoListContainer;
