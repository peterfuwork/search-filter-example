import React from 'react';

function ResultList(props) {
    const { filterDishes } = props;
    return (
        <ul className="dishes">
            { filterDishes }
        </ul>
    );
}

export default ResultList;