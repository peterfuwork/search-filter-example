import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import './App.css';

class App extends Component {
  state = {
    filterDishes:[],
    dishes: [
      {
        'name': 'golden corn fritter',
        'recipes': [
          'corn'
        ],
        'recipeObj': {
          'corn': 4
        }
      },
      {
        'name': 'honey egg drop soup',
        'recipes': [
          'honey',
          'egg'
        ],
        'recipeObj': {
          'honey': 2,
          'egg': 2
        }
      },
      {
        'name': 'spicy pot',
        'recipes': [
          'meat',
          'mushroom',
          'vegetable',
          'cayenne pepper'
        ],
        'recipeObj': {
          'meat': 1,
          'mushroom': 1,
          'vegetable': 1,
          'cayenne pepper': 1
        }
      },
      {
        'name': 'milk pudding',
        'recipes': [
          'ice cube',
          'honey',
          'milk'
        ],
        'recipeObj': {
          'ice cube': 1,
          'honey': 1,
          'milk': 1
        }
      }
    ]
  }

  componentDidMount() {
    this.setState({
      filterDishes: this.state.dishes
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

  render() {
    const { dishes, filterDishes } = this.state;
    const list = filterDishes.map(dish => {
      return (
        <li key={dish.name}>
          {dish.name}
          <ul>
              {dish.recipes.map(recipe => {
                return (
                  <li key={recipe}>{recipe}</li>
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
            dishes={dishes} 
            filterDishes={list} 
            onChangeSearch={this.onChangeSearch} />
          <ResultList filterDishes={list} />
        </header>
      </div>
    );
  }
}

export default App;
