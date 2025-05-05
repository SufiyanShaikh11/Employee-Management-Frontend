import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css"; // Optional custom styles

const Search = ({ search, setSearch }) => {
	return (
		<div className="col-sm-6 mb-4">
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="input-group">
					<span className="input-group-text bg-white border-end-0">
						<FaSearch />
					</span>
					<input
						className="form-control border-start-0"
						type="search"
						placeholder="Search Employee..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default Search;
