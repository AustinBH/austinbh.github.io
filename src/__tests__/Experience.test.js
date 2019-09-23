import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../components/ResumeAdditions/Experience';

it('renders without crashing', () => {
    shallow(<Experience />)
});

it('contains my job title', () => {
    const wrapper = shallow(<Experience />)
    const title = <em>Seller Support Associate</em>
    expect(wrapper.contains(title)).toEqual(true);
})