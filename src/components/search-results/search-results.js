import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../model/starwar-character';
import SearchResult from '../search-result/search-result';

 export default function SearchResults ({results}) {
     console.log("results" + JSON.stringify(results));
     if(results) {
        return (
            <div>
                {results.map((item) => <SearchResult result={item}/>)}
            </div>
        ); 
     }
     else {
         return (
             <div>undefined results</div>
         );
     }
 }

 SearchResults.propTypes = { 
     results: PropTypes.arrayOf(CustomTypes.SearchResult), 
 }