import React from 'react';

function SearchBar(props) {
    return (
      <input type="text" placeholder="Search.." onChange={(e) => props.onChangeSearch(e)} />
    );
}

export default SearchBar;