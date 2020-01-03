import React from 'react';
import { Link } from "react-router-dom";
import SortBySearch from './SortBySearch';
import SortByIngredients from './SortByIngredients';
import SortByUsages from './SortByUsages';
import ResultList from './ResultList';

const Page = (props) => {
    const { currentPage, dishPerPage, filteredDishes } = props;
    const indexOfLastDish = currentPage * dishPerPage;
    const indexOfFirstDish = indexOfLastDish - dishPerPage;
    const currentDishes = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);

    const renderDish = currentDishes.map(dish => {
      return (
        <li className="col-sm-6 dish-list" key={dish.name}>
          <div className="border">
            <div className="dish-img-wrapper">
              { 
                dish.image === " " ? 
                <img className="dish-img-placeholder" src="https://via.placeholder.com/150" /> :
                <img 
                 className="dish-img"
                 data-image={dish.name}
                  src={dish.image} />
              }
            </div>
            <div className="information">
              <h4>{dish.name}</h4>
              <ul className="recipes">
                  {dish.recipes.map(recipe => {
                    const quantity = dish.recipeObj;
                    return (
                      <li className="recipe-list" key={recipe}>
                        {recipe}:
                        <span className="quantity">&nbsp;{quantity[recipe]}</span>
                      </li>
                    )
                  })}
              </ul>
              <br />
              <ul className="usages">
                {dish.usages.map(usage => {
                  const desc = dish.usageObj;
                  return (
                  <li className="usage-list" key={usage}>
                    {usage}:
                    <span className="desc">&nbsp;{desc[usage]}</span>
                  </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </li>
      );
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredDishes.length / dishPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <span
                className={(currentPage === number ? 'active ' : '')}
                key={number}
                id={number}
                onClick={props.onClickPage}
            >
                {number}
            </span>
        );
    });

    console.log(props)

    return (
        <div className="container">
            {   
              props.match.path === '/' ?
              <div className="sorting">
                <Link className="link" to="/SortByIngredients">Sort By Ingredients</Link><br />
                <Link className="link" to="/SortByUsages">Sort By Usages</Link>
                <SortBySearch
                    filteredDishes={renderDish}
                    onChangeSearch={props.onChangeSearch}
                />
              </div> :
              props.match.path === '/SortByIngredients' ?
              <div className="sorting">
                <Link className="link" to="/">Sort By Search</Link><br />
                <Link className="link" to="/SortByUsages">Sort By Usages</Link>
                <SortByIngredients
                    filteredDishes={renderDish} 
                    onHandleChangeIngredients={props.onHandleChangeIngredients}
                />
              </div> :
              <div className="sorting">
                <Link className="link" to="/">Sort By Search</Link><br />
                <Link className="link" to="/SortByIngredients">Sort By Ingredients</Link>
                <SortByUsages
                    filteredDishes={renderDish} 
                    onHandleChangeUsages={props.onHandleChangeUsages}
                />
              </div>
            }
              <div className="pagination">
                  { renderPageNumbers }
              </div>
            <ResultList filteredDishes={renderDish} />
        </div>
    );
}

export default Page;