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

      <div>
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="App-header-text">Star Wars Character Search</h2>
        </div>
 
        <div class="row">
          <div class="columnfirst">
            <div class="columnFirstContent">
                <SearchForm />
                <div class="resultContainer">
                    <SearchResults />
                </div>
            </div>
          </div>
          <div class="columnsecond">
            <div class="columnSecondContent">
              <StarDisplay />  
            </div>
          </div>
      </div>
      <h2 className="App-header-text">Star Wars Character Search</h2>
      </div>

      
      // <div className="App">
      //     <div className="App-header">
      //         <img src={logo} className="App-logo" alt="logo" />
      //         <h2 className="App-header-text">Star Wars Character Search</h2>
      //     </div>
      //   <div>
      //   <div class="split left">
      //     <div class="centered">
      //       <SearchForm />
      //       <SearchResults />
      //     </div>
      //   </div>

      //   <div class="split right">
      //     <div class="centered">
      //         <StarDisplay />
      //     </div>
      //     </div>
      //     </div>
      // </div>


      // <div className="App">
      
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2 className="App-header-text">Star Wars Character Search</h2>
      //   </div>
      //   <div> 
      //     <SearchForm />
      //     <div className="layout">
      //       
      //       
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
