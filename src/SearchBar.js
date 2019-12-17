import React from 'react';

function SearchBar(props) {
    return (
      <div>
        <input type="text" name="dish" placeholder="Search By Dish" onChange={(e) => props.onChangeSearch(e)} />
        <input type="text" name="ingredient" placeholder="Search By Ingredient" onChange={(e) => props.onChangeSearch(e)} />
      </div>
    );
}

export default SearchBar;