import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../model/starwar-character';

export default function StarDisplay({ isShown, star }) {
  if (isShown) {
    return (
      <div className="displayRecordContainer">
        <div className="displayRecordHeaderContainer">
          <strong>
            <label className="displayRecordLabelHeading">{star.name}</label>
          </strong>
        </div>
        <div>
          <strong>
            <label className="displayRecordLabel">Hair Color</label>
          </strong>
        </div>
        <div>
          <label className="displayRecordText">{star.hair_color}</label>
        </div>

        <div>
          <strong>
            <label className="displayRecordLabel">Skin Color</label>
          </strong>
        </div>
        <div>
          <label className="displayRecordText">{star.skin_color}</label>
        </div>

        <div>
          <strong>
            <label className="displayRecordLabel">Eye Color</label>
          </strong>
        </div>
        <div>
          <label className="displayRecordText">{star.eye_color}</label>
        </div>

        <div>
          <strong>
            <label className="displayRecordLabel">Birth Year</label>
          </strong>
        </div>
        <div>
          <label className="displayRecordText">{star.birth_year}</label>
        </div>

        <div>
          <strong>
            <label className="displayRecordLabel">Gender</label>
          </strong>
        </div>
        <div>
          <label className="displayRecordText">{star.gender}</label>
        </div>
      </div>
    );
  } else {
    return <div>No Star selected</div>;
  }
}

StarDisplay.propTypes = {
  isShown: PropTypes.bool.isRequired,
  star: CustomTypes.SearchResult,
};
