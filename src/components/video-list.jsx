import VideoItem from "./video-item";

const VideoList = ({ videos, mode }) => {
	return videos.items.map((video) => {
		let videoId = mode === "most-popular" ? video.id : video.id.videoId;
		return <VideoItem
			key={videoId} // most-popular videos have id, search videos have id.videoId
			video={video}
			videoId={videoId}
		/>;
	});
};

export default VideoList;
