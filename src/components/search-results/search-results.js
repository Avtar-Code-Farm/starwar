import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../model/starwar-character';
import SearchResult from '../search-result/search-result';

// Component to construct a list of Search Results based on props
export default function SearchResults({ results, onResultSelected }) {
  console.log('search-result component' + JSON.stringify(results));
  if (results) {
    //loop through each result item and create collection of searchResult objects for UI
    let searchResultList = results.map((item, id) => {
      return (
        <SearchResult
          key={id}
          result={item}
          onResultSelected={onResultSelected}
        />
      );
    });

    return (
      <div>
        <div>
          <h3 className="__starwar__Search-info-text">Characters:</h3>
          {searchResultList}
        </div>
      </div>
    );
  } else {
    //dispatch null to clear Star display component
    onResultSelected(null);
    return (
      <div>
        <h3 className="__starwar__Search-info-text">Characters:</h3>
        <p> Loading...</p>
        <div class="__starwar__loader" />
      </div>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(CustomTypes.SearchResult),
  onResultSelected: PropTypes.func.isRequired,
};
