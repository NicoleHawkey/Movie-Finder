import React from "react";
import "./Searchfield.css";

const Searchfield = ({ query, setQuery, handleSearch }) => {
    const handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <div className="searchfield-body">
            <div className="searchsection">
                <input
                    className="input"
                    type="search"
                    id="s"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={handleKeyUp}
                    placeholder="Search for movies..."
                    onClick={handleSearch}
                />
            </div>    
        </div>
    );
};

export default Searchfield;