import React from 'react';

function ResultList(props) {
    const { filterDishes } = props;
  return (
    <ul>
        { filterDishes }
    </ul>
  );
}

export default ResultList;