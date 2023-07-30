import { useLoaderData } from "react-router-dom";
import useVideos from "../hooks/use-videos";
import VideoListContainer from "../components/video-list-container";

export default function MostPopularVideos() {
	return (
		<>
			<h1>Most Popular Videos</h1>
			<VideoListContainer mode="most-popular" query="" />
		</>
	);
}
