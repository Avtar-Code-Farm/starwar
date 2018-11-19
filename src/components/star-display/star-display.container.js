import { connect } from 'react-redux';
import StarDisplay from './star-display';

function mapStateToProps (state) {
    console.log("state.SearchResults" + JSON.stringify(state.starDisplay));
    return {
        isShown: state.starDisplay.isShown,
        star: state.starDisplay.star,
    };
}

export default connect(mapStateToProps)(StarDisplay);