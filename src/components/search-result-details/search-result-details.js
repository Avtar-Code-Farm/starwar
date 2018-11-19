import React from 'react';
import * as CustomTypes from '../../model/starwar-character'

export default function SearchResult ({result}) {
    console.log("result " + JSON.stringify(result));
    
    const {name} = result;
    return (
        <div>
            <label>{name}</label>
        </div>        
    );
}

SearchResult.PropTypes = {
    results: CustomTypes.SearchResult,
}