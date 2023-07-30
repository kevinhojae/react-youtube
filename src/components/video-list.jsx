import VideoItem from "./video-item";

const VideoList = ({ videos, mode }) => {
	return videos.items.map((video, index) => (
		<VideoItem key={video.id.videoId} video={video} mode={mode} />
	));
};

export default VideoList;
