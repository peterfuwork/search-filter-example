import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import './App.css';

class App extends Component {
  state = {
    filterDishes:[],
    dishes: [
      {
        'name': 'lemon pie',
        'recipe': [
          'lemon',
          'egg',
          'sugar'
        ],
      },
      {
        'name': 'apple cider',
        'recipe': [
          'apple',
          'water'
        ]
      },
      {
        'name': 'orange juice',
        'recipe': [
          'orange'
        ]
      },
      {
        'name': 'strawberry cake',
        'recipe': [
          'strawberry',
          'sugar',
          'egg',
          'cream',
          'milk'
        ]
      }
    ]
  }

  componentDidMount() {
    this.setState({
      filterDishes: this.state.dishes
    })
  }

  findMatches(wordToMatch, dishes) {
    return dishes.filter(dish => {
      if (wordToMatch === '\\') {
        wordToMatch = "";
      }
      // here we need to figure out if the title or article number matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return dish.name.match(regex);
    });
  }

  onChangeSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const dishes = this.state.dishes;
    const matchArray = this.findMatches(value, dishes);
    console.log(matchArray)
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
              {dish.recipe.map(recipe => {
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
          <SearchBar dishes={dishes} filterDishes={list} onChangeSearch={this.onChangeSearch} />
          <ResultList filterDishes={list} />
        </header>
      </div>
    );
  }
}

export default App;
