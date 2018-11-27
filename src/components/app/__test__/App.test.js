import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';

describe('App-Page-test-suit', function() {
  let appPage;

  beforeEach(() => {
    appPage = shallow(<App />);
  });

  it('renders image', () => {
    let image = appPage.find('AppHeader');
    expect(image.length).toBe(1);
  });
});
