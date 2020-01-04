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
      filteredDishes: matchArray,
      currentPage: 1
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
        console.log(this.state.checkedUsages)
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
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  resetAllCheckboxes = () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
    this.setState({
      filteredDishes: this.state.dishes,
      checkedUsages: [],
      checkedIngredients: []
    })
  }

  resetWhenChangePage = (event, props) => {
    const path = event.target.dataset.link
    this.setState({
      filteredDishes: this.state.dishes,
      checkedUsages: [],
      checkedIngredients: []
    },() => {
      props.history.push(path)
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
                  render={(props) => 
                    <Page
                      onClickPage={this.onClickPage}
                      onChangeSearch={this.onChangeSearch}
                      resetWhenChangePage={this.resetWhenChangePage}
                      {...this.state}
                      {...props} /> 
                  }
              />
              <Route  
                  exact 
                  path="/SortByIngredients" 
                  render={(props) => 
                    <Page
                      onClickPage={this.onClickPage}
                      onHandleChangeIngredients={this.onHandleChangeIngredients}
                      resetAllCheckboxes={this.resetAllCheckboxes}
                      resetWhenChangePage={this.resetWhenChangePage}
                      {...this.state}
                      {...props} /> 
                  }
              />
              <Route  
                  exact 
                  path="/SortByUsages" 
                  render={(props) => 
                    <Page
                      onClickPage={this.onClickPage}
                      onHandleChangeUsages={this.onHandleChangeUsages}
                      resetAllCheckboxes={this.resetAllCheckboxes}
                      resetWhenChangePage={this.resetWhenChangePage}
                      {...this.state}
                      {...props} /> 
                  }
              />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
