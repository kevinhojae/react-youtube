import { useLoaderData } from "react-router-dom";
import useVideos from "../hooks/use-videos";
import { VideoItem } from "../components/video-item";
import VideoListContainer from "../components/video-list-container";

export default function MostPopularVideos() {
	const gridColItemNum = 3;
	const requestNum = import.meta.env.VITE_POPULAR_VIDEOS_REQUEST_NUM;
	const { isLoading, videos, error } = useVideos({
		mode: "most-popular",
		query: "",
		requestNum: requestNum,
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
			<VideoListContainer mode="most-popular" query="" />
		</>
	);
}
