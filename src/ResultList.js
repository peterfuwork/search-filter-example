import React from 'react';

function ResultList(props) {
    const { filteredDishes } = props;
    return (
        <ul className="dishes">
            { filteredDishes }
        </ul>
    );
}

export default ResultList;