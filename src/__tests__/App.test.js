import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  shallow(<App />)
});

it('includes an empty div', () => {
  const wrapper = shallow(<App />)
  const div = <div/>
  expect(wrapper.contains(div)).toEqual(true);
})