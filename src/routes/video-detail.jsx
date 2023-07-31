import { useLocation } from "react-router-dom";
import VideoDetailItem from "../components/video-detail-item";
import RelatedVideoListContainer from "../components/related-video-list-container";

const VideoDetail = () => {
	const location = useLocation();
	const video = location.state.video;
	const videoId = location.state.videoId;
	return (
		<>
			<div className="video-detail">
				<VideoDetailItem video={video} videoId={videoId} />
				<RelatedVideoListContainer videoId={videoId} />
			</div>
		</>
	);
};

export default VideoDetail;
