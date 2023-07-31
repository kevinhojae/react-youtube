import axios from "axios";

const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
const requestNum = import.meta.env.VITE_REQUEST_NUM;

export const getMostPopularYoutubeVideos = async ({ queryKey }) => {
	const response = await axios.get(
		`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${requestNum}&key=${apiKey}`
	);
	return response.data;
};

export const getSearchYoutubeVideos = async ({ queryKey }) => {
	const [, { query }] = queryKey;
	const response = await axios.get(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=${requestNum}&key=${apiKey}`
	);
	return response.data;
};

export const getRelatedYoutubeVideos = async ({ queryKey }) => {
	const [, { videoId }] = queryKey;
	console.log(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=${requestNum}&key=${apiKey}`
	);
	const response = await axios.get(
		`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=${requestNum}&key=${apiKey}`
	);
	return response.data;
};
