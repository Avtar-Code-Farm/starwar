//this container helps to connect Star-Display component with Store and Store with Star-Display component
// this will be called each time user select star war character from search-results
import { connect } from 'react-redux';
import StarDisplay from './star-display';

function mapStateToProps(state) {
  console.log('state.SearchResults' + JSON.stringify(state.starDisplay));
  return {
    isShown: state.starDisplay.isShown,
    star: state.starDisplay.star,
  };
}

export default connect(mapStateToProps)(StarDisplay);
