import React from 'react'
import PropTypes from 'prop-types'

export default function SearchForm ({ onSearchSubmitted }) {
    let searchField = null;
    const searchSubmitted = (e) => {
        e.preventDefault();
        onSearchSubmitted(searchField.value);
    }
    return (
        <div>
            <h6 className="Search-info-text">Search for your favorite Star Wars Character in the search box below. Click on thier name to find out more information about them</h6>
            <h3 className="Search-info-text">Search:</h3>
            <form onSubmit={searchSubmitted}>
                <input ref={(e) => searchField = e} type="text" placeholder="Find Star World actors" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

SearchForm.propTypes = {
    onSearchSubmitted: PropTypes.func.isRequired,
};
