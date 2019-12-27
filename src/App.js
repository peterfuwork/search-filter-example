import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import API from './api';
import LoadingImg from './assets/loading.gif'
import './App.css';

class App extends Component {
  
  state = {
    filteredDishes:[],
    checkedIngredients:[],
    checkedUsages:[],
    currentPage: 1,
    dishPerPage: 12
  }

  async componentDidMount() {

    const res = await axios.get(API.api);
    const dishes = res.data;
    this.setState({
      filteredDishes: dishes
    })
  }

  

  findMatches(wordToMatch, dishes, inputBoxName) {
    const newWord = wordToMatch.trim().replace(/\s/g, '');
    return dishes.filter(dish => {
      if(inputBoxName === 'dish'){
        return dish.name.trim().replace(/\s/g, '').includes(newWord)
      } else if (inputBoxName === 'ingredient') {
        let ingredientsStr = '';
        dish.recipes.map(recipe => ingredientsStr += recipe)
        return ingredientsStr.trim().replace(/\s/g, '').includes(newWord)
      } else {
        return null;
      }
    });
  }

  checkToMatches(matchesIngredientsArr, dishes) {
    const matchArray = dishes.filter(dish => {
      return matchesIngredientsArr.every(value => {
        return dish.recipes.indexOf(value) !== -1;
      })
    });
    this.setState({ 
      filteredDishes: matchArray,
      currentPage: 1
    })
  }

  onChangeSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const dishes = this.state.dishes;
    const inputBoxName = e.target.name;
    const matchArray = this.findMatches(value, dishes, inputBoxName);
    this.setState({ 
      filteredDishes: matchArray
    })
  }

  onHandleChangeIngredients = (e) => {

    const checkedItem = e.target.name;
    const isChecked = e.target.checked;
    const dishes = this.state.dishes;

    if(isChecked === true) {
      this.setState({
        checkedIngredients: [...this.state.checkedIngredients, checkedItem]
      }, () => {
        this.checkToMatches(this.state.checkedIngredients, dishes);
      });
    } else if (isChecked === false) {
      this.setState({
        checkedIngredients: this.state.checkedIngredients.filter((val) => val !== checkedItem)
      }, () => {
        this.checkToMatches(this.state.checkedIngredients, dishes);
      });
    }
  }

  onHandleChangeUsages = (e) => {
    console.log(e.target.value)
  }

  onClickPage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    const { currentPage, dishPerPage, filteredDishes } = this.state;

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
                onClick={this.onClickPage}
            >
                {number}
            </span>
        );
    });

    

    return (
      <div className="App">
        <div className="App-header">
          <SearchBar 
            filteredDishes={renderDish} 
            onChangeSearch={this.onChangeSearch}
            onHandleChangeIngredients={this.onHandleChangeIngredients}
            onHandleChangeUsages={this.onHandleChangeUsages} />
          <div className="pagination">
            { renderPageNumbers }
          </div>
          <ResultList filteredDishes={renderDish} />
        </div>
      </div>
    );
  }
}

export default App;
