import React from "react";

const SearchBox = ({searchfield, onSearchChange}) => {
    return (
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search Box" 
            onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBox;