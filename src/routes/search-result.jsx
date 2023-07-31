import { redirect, useLoaderData, useSearchParams } from "react-router-dom";
import VideoListContainer from "../components/video-list-container";

export async function action({ request }) {
	const formData = await request.formData();
	const query = formData.get("query");
	if (query === "") return redirect("/");
	const decodedQuery = encodeURIComponent(query);
	return redirect(`/search/?query=${decodedQuery}`);
}

export async function loader({ params }) {
	const searchParams = params;
	const obj = new URLSearchParams(searchParams);
	const query = obj.get("query");
	return { query };
}

export default function SearchResultPage() {
	// get the query from the URL
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");
	return (
		<>
			<h1>Search Results: {query}</h1>
			<VideoListContainer mode="search" query={query} />
		</>
	);
}
