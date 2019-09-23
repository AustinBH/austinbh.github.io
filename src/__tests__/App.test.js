import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import InfoMenu from '../components/InfoMenu';
import Bio from '../components/Bio';
import Signature from '../components/Signature';

it('renders without crashing', () => {
  shallow(<App />)
});

it('includes a div with the class name of App-header', () => {
  const wrapper = shallow(<App />)
  const bigDiv = <div className='App-header'>
    <Bio />
    <InfoMenu />
    <Signature />
  </div>
  expect(wrapper.contains(bigDiv)).toEqual(true);
})