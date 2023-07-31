import { useLoaderData } from "react-router-dom";
import VideoListContainer from "../components/video-list-container";

export default function MostPopularVideos() {
	return (
		<>
			<h2>Most Popular Videos</h2>
			<VideoListContainer mode="most-popular" query="" />
		</>
	);
}
