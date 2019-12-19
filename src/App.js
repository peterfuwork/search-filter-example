import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import './App.css';

class App extends Component {
  state = {
    filterDishes:[],
    checkedIngredients:[],
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
      },
      {
        'name': '熱水',
        'recipes': [
          '冰塊'
        ],
        'recipeObj': {
          '冰塊': 4
        }
      },
      {
        'name': '蜂糖水',
        'recipes': [
          '冰塊',
          '蜂蜜'
        ],
        'recipeObj': {
          '冰塊': 3,
          '蜂蜜': 1
        }
      },
      {
        'name': '甜菜粥',
        'recipes': [
          '蜂蜜',
          '油菜'
        ],
        'recipeObj': {
          '蜂蜜': 2,
          '油菜': 2
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
            onChangeSearch={this.onChangeSearch}
            onHandleChange={this.onHandleChange} />
          <ResultList filterDishes={list} />
        </header>
      </div>
    );
  }
}

export default App;
