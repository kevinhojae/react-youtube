import { Form } from "react-router-dom";

function SearchBar({ query }) {
	return (
		<>
			<Form
				className="search-bar"
				method="post"
				action="/search"
				defaultValue={query}
			>
				<input type="text" name="query" placeholder="Search" />
				<button type="submit">Search</button>
			</Form>
		</>
	);
}

export default SearchBar;
