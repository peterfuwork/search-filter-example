import React from 'react';

function SearchBar(props) {
    return (
      <div>
        <input type="text" name="dish" placeholder="Search By Dish" onChange={(e) => props.onChangeSearch(e)} />
        <input type="text" name="ingredient" placeholder="Search By Ingredient" onChange={(e) => props.onChangeSearch(e)} />
        <fieldset>
          <legend>Choose your Ingredients</legend>
          <div>
            <input type="checkbox" id="honey" name="honey" value="honey" onChange={(e) => props.onHandleChange(e)} />
            <label htmlFor="honey">Honey</label>
          </div>
          <div>
            <input type="checkbox" id="corn" name="corn" value="corn" onChange={(e) => props.onHandleChange(e)} />
            <label htmlFor="corn">Corn</label>
          </div>
          <div>
            <input type="checkbox" id="egg" name="egg" value="egg" onChange={(e) => props.onHandleChange(e)} />
            <label htmlFor="egg">Egg</label>
          </div>
          <div>
            <input type="checkbox" id="milk" name="milk" value="milk" onChange={(e) => props.onHandleChange(e)} />
            <label htmlFor="milk">Milk</label>
          </div>
        </fieldset>
      </div>
    );
}

export default SearchBar;