import React from 'react';
import PropTypes from 'prop-types'
import * as CustomTypes from '../../model/starwar-character'

export default function SearchResult ({result, onResultSelected}) {
    console.log("result " + JSON.stringify(result));
    let resultTextControl = null;
    const onResultClick= (e) => {
        console.log("resultTextControl: " + resultTextControl.value);
        onResultSelected(result);
    }

    const {name} = result;
    return (
        <div >
            <input className="resultText"  value={name} 
                ref={(e) => resultTextControl = e}
                onClick={onResultClick} />
        </div>        
    );
}

SearchResult.PropTypes = {
    results: CustomTypes.SearchResult,
    onResultSelected: PropTypes.func.isRequired,
}