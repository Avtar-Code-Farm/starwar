import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import SearchForm from './search-form/search-form.container';
import SearchResults from './search-results/search-results.container';
import StarDisplay from './star-display/star-display.container';

const results = [
  {
    name: "Luke Skywalker", 
    height: "172", 
    mass: "77", 
    hair_color: "blond", 
    skin_color: "fair", 
    eye_color: "blue", 
    birth_year: "19BBY", 
    gender: "male", 
  },
  {
    name: "2 Luke Skywalker", 
    height: "172", 
    mass: "77", 
    hair_color: "blond", 
    skin_color: "fair", 
    eye_color: "black", 
    birth_year: "18BBY", 
    gender: "female", 
  },
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-header-text">Star Wars Character Search</h2>
        </div>
        <div> 
          <SearchForm />
          <SearchResults />
          <StarDisplay />
        </div>
      </div>
    );
  }
}

export default App;
