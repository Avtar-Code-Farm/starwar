import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../model/starwar-character';
import SearchResult from '../search-result/search-result';

 export default function SearchResults ({results}) {
     console.log("search-result component" + JSON.stringify(results));
     if(results) {
        return (
            <div>
                <div>
                    {results.map((item) => <SearchResult result={item}/>)}
                </div>
            </div>
        ); 
     }
     else {
         return (
             <div></div>
         );
     }
 }

 SearchResults.propTypes = { 
     results: PropTypes.arrayOf(CustomTypes.SearchResult),      
 }