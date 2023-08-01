import { useContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import SearchBar from "../components/searchbar";

export async function loader({ request }) {
	const url = new URL(request.url);
	const query = url.searchParams.get("query");
	
	return { query };
}

function Root() {
	const { query } = useLoaderData();
	return (
		<>
			<SearchBar query={query} />
			<Outlet />
		</>
	);
}

export default Root;
