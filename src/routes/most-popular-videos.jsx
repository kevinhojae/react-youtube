import { useLoaderData } from "react-router-dom";
import useVideos from "../hooks/use-videos";

function getMostPopularVideos() {}

export async function loader() {
	return null;
}

export default function MostPopularVideos() {
	const { isLoading, videos, error } = useVideos({
		mode: "most-popular",
		query: "",
	});

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>Something went wrong</h1>;
	}

	return (
		<>
			<h1>Most Popular Videos</h1>
			<div>
				{"items" in videos
					? videos.items.map((video) => (
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
					  ))
					: null}
			</div>
		</>
	);
}
