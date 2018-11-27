import React from 'react';
import { shallow } from 'enzyme';
import StarDisplay from '../star-display';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

describe('StarDisplay-test-suit', function() {
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

  it('StarDisplay renders and is of div type', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<StarDisplay isShown={true} star={testRecord} />);
    const mountedStarDisplayResult = renderer.getRenderOutput();
    expect(mountedStarDisplayResult.type).toBe('div');
  });

  it('StarDisplay show all the label for record', () => {
    let starDisplayTest = shallow(
      <StarDisplay isShown={true} star={testRecord} />
    );
    const htmlTag = starDisplayTest.find('label');
    expect(htmlTag.length).toBe(11);
  });

  it('StarDisplay show no label', () => {
    let starDisplayTest = shallow(
      <StarDisplay isShown={false} star={testRecord} />
    );
    const htmlTag = starDisplayTest.find('label');
    expect(htmlTag.length).toBe(0);
  });
});
