import React from 'react';
import SearchResults from '../search-results';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
const results = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: '2 Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'black',
    birth_year: '18BBY',
    gender: 'female',
  },
];

describe('Search-Results-test-suit', function() {
  it('Results component renders', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SearchResults results={results} onResultSelected={() => {}} />
    );
    const mountedResulstsComponent = renderer.getRenderOutput();
    expect(mountedResulstsComponent.type).toBe('div');
  });

  it('Renders search results objects', () => {
    const searchResultsUI = shallow(
      <SearchResults results={results} onResultSelected={() => {}} />
    );
    const searchResultRecords = searchResultsUI.find('SearchResult');
    expect(searchResultRecords.length).toBe(results.length);
  });

  it('Renders no results objects', () => {
    const searchResultsUI = shallow(
      <SearchResults results={null} onResultSelected={() => {}} />
    );
    const searchResultRecords = searchResultsUI.find('SearchResult');
    expect(searchResultRecords.length).toBe(0);
  });
});
