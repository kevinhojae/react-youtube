import { useContext, useState } from "react";
import { ApiContext } from "../App";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import SearchBar from "../components/searchbar";
import queryString from "query-string";

export async function action({ request }) {
	const data = Object.fromEntries(await request.formData());
	return redirect(`/search/${data.query}`);
}

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
