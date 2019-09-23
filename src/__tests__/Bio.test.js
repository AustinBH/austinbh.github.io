import React from 'react';
import { shallow } from 'enzyme';
import Bio from '../components/Bio';

it('renders without crashing', () => {
    shallow(<Bio />)
});

it('contains a p tag with my title in it', () => {
    const wrapper = shallow(<Bio />)
    const pTag = <p>Software Engineer</p>
    expect(wrapper.contains(pTag)).toEqual(true);
})