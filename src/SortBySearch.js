import React from 'react';

const SortBySearch = (props) => {
    return (
      <div className="checkboxes">
        <fieldset className="fieldset">
          <legend>搜尋食譜名稱</legend>
          <input type="text" name="dish" placeholder="搜尋食譜" onChange={(e) => props.onChangeSearch(e)} />
        </fieldset>
      </div>
    );
}

export default SortBySearch;