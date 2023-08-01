import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useYouTube } from "../context/YouTubeContext";

export default function VideosPage() {
  const { keyword } = useParams();
  const { youtube } = useYouTube();

  const { isLoading, error, data: videos } = useQuery(["keyword", keyword], () => youtube.search(keyword));

  return (
    <>
      <h2>Showing result for : {keyword}</h2>
      {error && <p>Oops! SOmethign Wrong!</p>}
      {isLoading && <p>Loading Vidoes ... </p>}
      <ul>{/* {videos.map(video => <div>{video.....}</div>)} */}</ul>
      {/* <VideoListContainer mode="search" query={query} /> */}
    </>
  );
}
