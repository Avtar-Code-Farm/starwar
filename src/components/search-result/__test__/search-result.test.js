import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from '../search-result';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

describe('search-result-test-suit', function() {
  const testRecord = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  };

  it('search-result renders and is of div type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SearchResult result={testRecord} onResultSelected={() => {}} />
    );
    const mountedSearchResult = renderer.getRenderOutput();
    expect(mountedSearchResult.type).toBe('div');
  });

  it('search form contain input tag', () => {
    let searchResultTest = shallow(
      <SearchResult result={testRecord} onResultSelected={() => {}} />
    );
    const htmlTag = searchResultTest.find('input');
    expect(htmlTag.length).toBe(1);
  });

  it('test onResultSelected callback', () => {
    let mockFn = jest.fn();

    let wrapper = shallow(
      <SearchResult result={testRecord} onResultSelected={mockFn} />
    );
    wrapper
      .find('input')
      .props()
      .onClick();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
