import { useLoaderData } from "react-router-dom";

export async function getMostPopularVideos() {
	const response = await fetch("/videos.json");
	const videos = await response.json();
	return {videos};
}

export async function loader() {
	const {videos} = await getMostPopularVideos();
	return {videos};
}

export default function MostPoplarVideos() {
	const {videos} = useLoaderData();

	// render the youtube data, using iframe to embed the video
	return (
		<div>
			{videos.items.map((video) => (
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
					<h3>{video.title}</h3>
					<p>{video.description}</p>
				</div>
			))}
		</div>
	);
}
