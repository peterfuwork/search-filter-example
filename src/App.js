import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import API from './api';
import './App.css';

class App extends Component {
  state = {
    filterDishes:[],
    checkedIngredients:[]
  }

  async componentDidMount() {

    const res = await axios.get(API.api);
    const dishes = res.data;
    
    this.setState({
      dishes,
      filterDishes: dishes
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
        console.log(ingredientsStr.trim().replace(/\s/g, ''))
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
      filterDishes: matchArray
    })
  }

  onChangeSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const dishes = this.state.dishes;
    const inputBoxName = e.target.name;
    const matchArray = this.findMatches(value, dishes, inputBoxName);
    this.setState({ 
      filterDishes: matchArray
    })
  }

  onHandleChange = (e) => {

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

  render() {
    const { dishes, filterDishes } = this.state;
    const list = filterDishes.map(dish => {
      return (
        <li className="dish-list" key={dish.name}>
          <div className="dish-img-wrapper">
            <img className="dish-img" src="https://via.placeholder.com/150" />
          </div>
          <h4>{dish.name}</h4>
          <ul className="recipes">
              {dish.recipes.map(recipe => {
                return (
                  <li className="recipe-list" key={recipe}>{recipe}</li>
                )
              })}
          </ul>
        </li>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            filterDishes={list} 
            onChangeSearch={this.onChangeSearch}
            onHandleChange={this.onHandleChange} />
          <ResultList filterDishes={list} />
        </header>
      </div>
    );
  }
}

export default App;
