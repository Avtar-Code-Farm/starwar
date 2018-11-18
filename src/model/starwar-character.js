import PropTypes from 'prop-types'

export const SearchResult = PropTypes.shape ({
    name: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired, 
    skin_color: PropTypes.string.isRequired, 
    eye_color: PropTypes.string.isRequired, 
    birth_year: PropTypes.string.isRequired, 
    gender: PropTypes.string.isRequired,     
});