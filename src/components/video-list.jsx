import { VideoItem } from "./video-item";

const VideoList = ({ videos }) => {
	return videos.items.map((video, index) => (
		<VideoItem key={video.id} video={video} />
	));
};

export default VideoList;
