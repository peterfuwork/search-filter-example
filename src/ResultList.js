import React from 'react';

function ResultList(props) {
    const { filteredDishes } = props;
    return (
        <div className="container">
            <ul className="dishes row">
                { filteredDishes }
            </ul>
        </div>
    );
}

export default ResultList;