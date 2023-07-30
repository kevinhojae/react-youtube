const VideoItem = ({ video, mode }) => {
	const videoId = mode === "most-popular" ? video.id : video.id.videoId;

	return (
		<div key={video.id}>
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${videoId}`}
				title={video.title}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<h3>{video.snippet.title}</h3>
			{/* <p>{video.snippet.description}</p> */}
		</div>
	);
};
export default VideoItem;
