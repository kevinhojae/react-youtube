import { redirect, useLoaderData, useSearchParams } from "react-router-dom";

export async function action({ request }) {
	const formData = await request.formData();
	const query = formData.get("query");
	if (query === "") return redirect("/");
	return redirect(`/search/?query=${query}`);
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
	return <div>{query}</div>;
}
