import React from 'react';
import PropTypes from 'prop-types';
import * as CustomTypes from '../../model/starwar-character';

// functional component to display selected star world actor detail
export default function StarDisplay({ isShown, star }) {
  if (isShown) {
    return (
      <div className="__starwar__displayRecordContainer">
        <div className="__starwar__displayRecordHeaderContainer">
          <strong>
            <label className="__starwar__displayRecordLabelHeading">
              {star.name}
            </label>
          </strong>
        </div>
        <div>
          <strong>
            <label className="__starwar__displayRecordLabel">Hair Color</label>
          </strong>
        </div>
        <div>
          <label className="__starwar__displayRecordText">
            {star.hair_color}
          </label>
        </div>

        <div>
          <strong>
            <label className="__starwar__displayRecordLabel">Skin Color</label>
          </strong>
        </div>
        <div>
          <label className="__starwar__displayRecordText">
            {star.skin_color}
          </label>
        </div>

        <div>
          <strong>
            <label className="__starwar__displayRecordLabel">Eye Color</label>
          </strong>
        </div>
        <div>
          <label className="__starwar__displayRecordText">
            {star.eye_color}
          </label>
        </div>

        <div>
          <strong>
            <label className="__starwar__displayRecordLabel">Birth Year</label>
          </strong>
        </div>
        <div>
          <label className="__starwar__displayRecordText">
            {star.birth_year}
          </label>
        </div>

        <div>
          <strong>
            <label className="__starwar__displayRecordLabel">Gender</label>
          </strong>
        </div>
        <div>
          <label className="__starwar__displayRecordText">{star.gender}</label>
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
