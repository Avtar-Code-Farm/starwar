import React from 'react';
import PropTypes from 'prop-types';
import styles from './star-display.css';
import * as CustomTypes from '../../model/starwar-character'

export default function StarDisplay ({ isShown, star }) {
    if(isShown){
        return (
            <div className={styles.container}>
                <div>
                    <span>Name: </span> <span>{star.name}</span>
                </div>
                <div>
                    <span>Name: </span> <span>{star.hair_color}</span>
                </div>
                <div>
                    <span>Name: </span> <span>{star.skin_color}</span>
                </div>
                <div>
                    <span>Name: </span> <span>{star.eye_color}</span>
                </div>
                <div>
                    <span>Name: </span> <span>{star.birth_year}</span>
                </div>
                <div>
                    <span>Name: </span> <span>{star.gender}</span>
                </div>
            </div>
        );
    } else {
        return <div>No Star selected</div>
    }
}

StarDisplay.propTypes = {
    isShown: PropTypes.bool.isRequired,
    star: CustomTypes.SearchResult,
};