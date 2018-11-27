import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from '../search-form';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

describe('search-form-test-suit', function() {
  it('search form is of div type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SearchForm onSearchSubmitted={() => {}} />);
    const mountedSearchform = renderer.getRenderOutput();
    expect(mountedSearchform.type).toBe('div');
  });

  it('search form contain h6 tag', () => {
    let searchFormTest = shallow(<SearchForm onSearchSubmitted={() => {}} />);
    const htmlTag = searchFormTest.find('h6');
    expect(htmlTag.length).toBe(1);
  });

  it('search form contain h3 tag', () => {
    let searchFormTest = shallow(<SearchForm onSearchSubmitted={() => {}} />);
    const htmlTag = searchFormTest.find('h3');
    expect(htmlTag.length).toBe(1);
  });

  it('search form contain input tag', () => {
    let searchFormTest = shallow(<SearchForm onSearchSubmitted={() => {}} />);
    const htmlTag = searchFormTest.find('input');
    expect(htmlTag.length).toBe(1);
  });
});
