import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../model/starwar-character';

// Component to return UI for each search result
export default function SearchResult({ result, onResultSelected }) {
  console.log('result ' + JSON.stringify(result));
  const onResultClick = e => {
    console.log('I am called');
    onResultSelected(result);
  };

  const { name } = result;
  return (
    <div>
      <input
        className="__starwar__resultText"
        value={name}
        onClick={onResultClick}
      />
    </div>
  );
}

SearchResult.propTypes = {
  result: CustomTypes.SearchResult.isRequired,
  onResultSelected: PropTypes.func.isRequired,
};
