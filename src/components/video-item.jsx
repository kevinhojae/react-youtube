export const VideoItem = ({ video }) => {
	return (
		<div key={video.id}>
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${video.id}`}
				title={video.title}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			<h3>{video.snippet.title}</h3>
			{/* <p>{video.snippet.description}</p> */}
		</div>
	);
};
