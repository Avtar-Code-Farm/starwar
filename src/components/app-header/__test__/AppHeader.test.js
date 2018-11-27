import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from '../index';

describe('AppHeader-test-suit', function() {
  let appPage;

  beforeEach(() => {
    appPage = shallow(<AppHeader />);
  });

  it('renders image', () => {
    appPage = shallow(<AppHeader />);
    let image = appPage.find('img');
    expect(image.length).toBe(1);
  });
});
