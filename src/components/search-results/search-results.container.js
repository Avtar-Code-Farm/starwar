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

export default connect(
  mapStateToProps,
  mapDispatchedFromProps
)(SearchResults);
