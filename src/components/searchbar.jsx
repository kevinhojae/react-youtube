import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function SearchBar() {
  const [text, setText] = useState("");
  const { keyword } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  return (
    <>
      <header>
        <Link to="/">
          <h1>Youtube</h1>
        </Link>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." value={text} onChange={(e) => setText(e.target.value)} />
          <button>Search</button>
        </form>
      </header>
    </>
  );
}

export default SearchBar;
