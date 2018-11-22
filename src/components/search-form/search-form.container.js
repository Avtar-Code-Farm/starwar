import { connect } from 'react-redux';
import SearchForm from './search-form';
import { searchPerformed } from '../../action/search';

function mapDispatchedFromProps(dispatch) {
  console.log('search form container: mapDispatchedFromProps called');
  return {
    onSearchSubmitted: searchText => dispatch(searchPerformed(searchText)),
  };
}

export default connect(
  () => ({}),
  mapDispatchedFromProps
)(SearchForm);
