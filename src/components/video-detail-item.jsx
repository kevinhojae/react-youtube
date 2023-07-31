const VideoDetailItem = ({ video, videoId }) => {
	return (
		<div>
			<h2>{video.snippet.title}</h2>
			<iframe
				className="video-detail-item"
				src={`https://www.youtube.com/embed/${videoId}`}
				title={video.snippet.title}
				frameborder="0"
			/>
			<p>{video.snippet.description}</p>
			<p>- {video.snippet.channelTitle} -</p>
		</div>
	);
};

export default VideoDetailItem;
