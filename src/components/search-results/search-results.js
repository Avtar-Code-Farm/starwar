import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../model/starwar-character';
import SearchResult from '../search-result/search-result';

 export default function SearchResults ({results, onResultSelected}) {



     console.log("search-result component" + JSON.stringify(results));
     if(results) {
        return (
            <div>
                <div>
                    <h3 className="Search-info-text">Characters:</h3>
                    {results.map((item) => <SearchResult result={item} onResultSelected={onResultSelected}/>)}
                </div>
            </div>
        ); 
     }
     else {
        onResultSelected(null);
         return (
             <div>
                 <h3 className="Search-info-text">Characters:</h3>
                 <div class="loader"></div>
             </div>
         );
     }
 }

 SearchResults.propTypes = { 
     results: PropTypes.arrayOf(CustomTypes.SearchResult),
     onResultSelected: PropTypes.func.isRequired,      
 }