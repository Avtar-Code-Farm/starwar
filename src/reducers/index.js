import { combineReducers } from 'redux';
import searchReducer from './search';
import starDisplayReducer from './star-display';

export default combineReducers({
    search: searchReducer,
    starDisplay: starDisplayReducer,
});
