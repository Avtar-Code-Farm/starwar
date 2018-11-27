import { connect } from 'react-redux';
import SearchForm from './search-form';
import { searchPerformed } from '../../action/search';

//this container helps to connect Searched Text from Search-form compoment
//with Store and Store with Search-Results component
//This will be called each time user type new key in Search-Form input box
function mapDispatchedFromProps(dispatch) {
  console.log('search form container: mapDispatchedFromProps called');
  return {
    onSearchSubmitted: searchText => dispatch(searchPerformed(searchText)),
  };
}

//passing mapDispatchedFromProps function to connect which in turn return another function as return type
//Return function is a function which will be called with the react component or return a version of that component
//which is connected to react store and which uses our mapSateToProps function to get updated state
export default connect(
  () => ({}),
  mapDispatchedFromProps
)(SearchForm);
