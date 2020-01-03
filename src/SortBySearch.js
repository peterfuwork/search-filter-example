import React from 'react';

const SortBySearch = (props) => {
    return (
      <div className="checkboxes">
        <fieldset className="fieldset">
          <legend>搜尋菜或食材</legend>
          <input type="text" name="dish" placeholder="Search By Dish" onChange={(e) => props.onChangeSearch(e)} />
          <input type="text" name="ingredient" placeholder="Search By Ingredient" onChange={(e) => props.onChangeSearch(e)} />
        </fieldset>
      </div>
    );
}

export default SortBySearch;