import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/elements.css'
import './css/skeleton.css'
import SearchForm from './search-form/search-form.container';
import SearchResults from './search-results/search-results.container';
import StarDisplay from './star-display/star-display.container';

class App extends Component {

  render() {
    return (
      <div>
        <div class="Top">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="App-header-text">Star Wars Character Search</span>
            </div>
        </div>

        <div class="Container">
            <div class="mainContent">
                <SearchForm />
                <div >
                    <SearchResults />
                </div>
            </div>
            <div class="Right">
              <div class="rightContent">
                    <StarDisplay />  
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;



// const results = [
//   {
//     name: "Luke Skywalker", 
//     height: "172", 
//     mass: "77", 
//     hair_color: "blond", 
//     skin_color: "fair", 
//     eye_color: "blue", 
//     birth_year: "19BBY", 
//     gender: "male", 
//   },
//   {
//     name: "2 Luke Skywalker", 
//     height: "172", 
//     mass: "77", 
//     hair_color: "blond", 
//     skin_color: "fair", 
//     eye_color: "black", 
//     birth_year: "18BBY", 
//     gender: "female", 
//   },
// ];