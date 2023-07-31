import { Form, redirect, useNavigate, Link } from "react-router-dom";

export async function action({ params }) {
	const searchParams = params;
	const obj = new URLSearchParams(searchParams);
	return redirect(`/video/${obj.get("id")}`);
}

const VideoItem = ({ mode, video }) => {
	const videoId = mode === "most-popular" ? video.id : video.id.videoId;

	return (
		<div key={video.id}>
			<iframe
				className={
					mode === "related" ? "video-item" : "related-video-item"
				}
				src={`https://www.youtube.com/embed/${videoId}`}
				title={video.title}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
			<Link
				to={`/video/${videoId}`}
				state={{ video: video, videoId: videoId }}
				className="link"
			>
				{video.snippet.title}
			</Link>
			{/* <p>{video.snippet.description}</p> */}
		</div>
	);
};
export default VideoItem;
