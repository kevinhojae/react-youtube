import VideoItem from "./video-item";

const VideoList = ({ videos, mode }) => {
	return videos.items.map((video) => (
		<VideoItem
			key={mode === "most-popular" ? video.id : video.id.videoId}
			video={video}
			mode={mode}
		/>
	));
};

export default VideoList;
