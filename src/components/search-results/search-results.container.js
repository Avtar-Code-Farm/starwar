import { connect } from 'react-redux';
import SearchResults from './search-results';
import { showStarDisplay } from '../../action/star-display';
function mapStateToProps (state) {    
    console.log("state.SearchResults" + JSON.stringify(state));
    
    return {
        results: state.search.results,
    };
}

function mapDispatchedFromProps(dispatch){
    console.log("result selected : mapDispatchedFromProps called")
    return {
        onResultSelected: (starObject) => dispatch(showStarDisplay(starObject))
    };
}

export default connect(mapStateToProps, mapDispatchedFromProps)(SearchResults);