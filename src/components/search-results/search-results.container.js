//this container helps to connect Search-results component with Store and Store with Search-results component
// this will be called each time user perform new search

import { connect } from 'react-redux';
import SearchResults from './search-results';
import { showStarDisplay, hideGiphyDisplay } from '../../action/star-display';

function mapStateToProps(state) {
  console.log('state.SearchResults' + JSON.stringify(state));

  return {
    results: state.search.results,
  };
}

function mapDispatchedFromProps(dispatch) {
  console.log('result selected : mapDispatchedFromProps called');
  return {
    onResultSelected: starObject => {
      if (starObject) {
        dispatch(showStarDisplay(starObject));
      } else {
        // hide in case of null star Object
        dispatch(hideGiphyDisplay());
      }
    },
  };
}

//Connects a SearchResults component to a Redux store
export default connect(
  mapStateToProps,
  mapDispatchedFromProps
)(SearchResults);
