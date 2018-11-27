import React from 'react';
import PropTypes from 'prop-types';

export default function SearchForm({ onSearchSubmitted }) {
  let timeout = null;
  let searchField = null;

  const searchSubmitted = e => {
    //search only if valid input
    if (searchField.value.trim() === '') {
      return;
    }

    clearTimeout(timeout);
    //this will avoid making  service call on every input character in textbox
    // added 500ms delay for user to complete the typing
    timeout = setTimeout(function() {
      onSearchSubmitted(searchField.value);
    }, 500);
  };

  return (
    <div>
      <h6 className="__starwar__Search-info-text-small">
        Search for your favorite Star Wars Character in the search box below.
        Click on thier name to find out more information about them.
      </h6>
      <h3 className="__starwar__Search-info-text">Search:</h3>
      <div>
        <input
          className="__starwar__searchField"
          ref={e => (searchField = e)}
          type="text"
          onKeyUp={searchSubmitted}
          placeholder="Type actor name.."
        />
      </div>
    </div>
  );
}

SearchForm.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired,
};
