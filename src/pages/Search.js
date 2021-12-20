import React from "react";
import { useState } from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../components/StateProvider.js";
import { actions } from "../components/reducer";
import "./Search.css";
function Search({ hidden = false }) {
	const [{}, dispatch] = useStateValue();

	const [input, setInput] = useState("");
	const navigate = useNavigate();

	function search(e) {
		e.preventDefault();

		dispatch({
			type: actions.SET_SEARCH_TERM,
			term: input,
		});

		navigate("/search");
	}

	function handleChange(e) {
		setInput(e.target.value);
	}

	return (
		<form className="search">
			<div className="search__input">
				<FaSearch className="search__faSearch" />
				<input value={input} onChange={handleChange} />
				<FaMicrophone />
			</div>
			<div className={hidden ? "search__btnsHidden" : "search__btns"}>
				<button onClick={search} type="submit" className="search__btnsButton">
					Google Search
				</button>
				<button className="search__btnsButton">I'm Feeling Lucky</button>
			</div>
		</form>
	);
}

export default Search;
