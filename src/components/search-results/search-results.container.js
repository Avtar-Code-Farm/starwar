import { connect } from 'react-redux';
import SearchResults from './search-results';

function mapStateToProps (state) {    
    console.log("state.SearchResults" + JSON.stringify(state));
    
    return {
        results: state.results,
    };
}

export default connect(mapStateToProps)(SearchResults);