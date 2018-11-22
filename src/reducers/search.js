import { SEARCH_SUCCESS, SEARCH_PERFORMED } from '../action/search';

const initialState = {
  results: [],
};

function searchTransform(rawResult) {
  console.log('Search Transform result: ' + JSON.stringify(rawResult));
  return {
    name: rawResult.name,
    hair_color: rawResult.hair_color,
    skin_color: rawResult.skin_color,
    eye_color: rawResult.eye_color,
    birth_year: rawResult.birth_year,
    gender: rawResult.gender,
  };
}

export default (state, action) => {
  console.log(
    'search reducer: ' +
      JSON.stringify(state) +
      ' action: ' +
      JSON.stringify(action) +
      JSON.stringify(action.results)
  );

  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case SEARCH_SUCCESS:
      console.log(
        'Search_Sucesss : Transform:1 ' + JSON.stringify(action.results)
      );
      // console.log("Search_Sucesss : Transform:3 " + JSON.stringify(action.results.map(searchTransform)));

      action.results.forEach(function(message) {
        console.log(message);
        searchTransform(message);
      });
      return {
        state,
        results: action.results.map(searchTransform),
      };
    case SEARCH_PERFORMED:
      console.log('Search SEARCH_PERFORMED');
      return {
        state,
      };
    default:
      return state;
  }
};
