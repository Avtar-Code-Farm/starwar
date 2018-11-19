import axios from 'axios';
import {put, call} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';
import { searchSuccess, searchError, SEARCH_PERFORMED } from '../action/search';

function* doSearch({searchTerm}) {
    console.log("doSearch called " + searchTerm);
    try {
        const searchResults = yield call(
            axios.get,
            'https://swapi.co/api/people',
            {
                params: {                    
                    search:searchTerm                    
                }
            }
        );
        console.log("Searchresult yielded: " + JSON.stringify(searchResults));
        yield put(searchSuccess(searchResults.data.results));
    } catch(e) {
        console.log("error while service request " + e);
        yield put(searchError());
    }
}

export default function* () {
  yield takeLatest(SEARCH_PERFORMED, doSearch);
}
