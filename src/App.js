import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from "react-router-dom";
import Page from './Page';
import API from './api';
// import LoadingImg from './assets/loading.gif'
import './App.css';

class App extends Component {
  
  state = {
    dishes:[],
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
      dishes,
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

  checkIngredientsToMatches(matchesIngredientsArr, dishes) {
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

  checkUsagesToMatches(matchesIngredientsArr, dishes) {
    const matchArray = dishes.filter(dish => {
      return matchesIngredientsArr.every(value => {
        return dish.usages.indexOf(value) !== -1;
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
        this.checkIngredientsToMatches(this.state.checkedIngredients, dishes);
      });
    } else if (isChecked === false) {
      this.setState({
        checkedIngredients: this.state.checkedIngredients.filter((val) => val !== checkedItem)
      }, () => {
        this.checkIngredientsToMatches(this.state.checkedIngredients, dishes);
      });
    }
  }

  onHandleChangeUsages = (e) => {
    const checkedItem = e.target.name;
    const isChecked = e.target.checked;
    const dishes = this.state.dishes;

    if(isChecked === true) {
      this.setState({
        checkedUsages: [...this.state.checkedUsages, checkedItem]
      }, () => {
        this.checkUsagesToMatches(this.state.checkedUsages, dishes);
      });
    } else if (isChecked === false) {
      this.setState({
        checkedUsages: this.state.checkedUsages.filter((val) => val !== checkedItem)
      }, () => {
        this.checkUsagesToMatches(this.state.checkedUsages, dishes);
      });
    }


  }

  onClickPage = (event) => {
    console.log(event.target.id)
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
              <Route  
                  exact 
                  path="/" 
                  render={() => 
                    <Page
                      onClickPage={this.onClickPage}
                      onChangeSearch={this.onChangeSearch}
                      onHandleChangeIngredients={this.onHandleChangeIngredients}
                      {...this.state} /> 
                  }
              />
              <Route  
                  exact 
                  path="/SortByUsages" 
                  render={() => 
                    <Page
                      onClickPage={this.onClickPage}
                      onHandleChangeUsages={this.onHandleChangeUsages}
                      {...this.state} /> 
                  }
              />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
