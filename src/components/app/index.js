import React, { Component } from 'react';

import '../app-css/elements.css';
import '../app-css/skeleton.css';
import SearchForm from '../search-form/search-form.container';
import SearchResults from '../search-results/search-results.container';
import StarDisplay from '../star-display/star-display.container';
import AppHeader from '../app-header';

// Main component for this application
// it contains : header and main content
// main content includes two major section:
// 1) SearchForm & SearchResults component for user to search star war character and display result
// 2) StarDisplay component to display the details of selected star war character
class App extends Component {
  render() {
    return (
      <div>
        <div class="__top__content">
          <AppHeader />
        </div>
        <div class="__app__container">
          <div class="__main__content">
            <SearchForm />
            <div>
              <SearchResults />
            </div>
          </div>
          <div class="__main__content_right">
            <div class="__starwar__rightContent">
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
