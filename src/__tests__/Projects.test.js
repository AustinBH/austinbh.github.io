import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../components/Projects';

it('renders without crashing', () => {
    shallow(<Projects />)
});

it('contains my the technologies used section', () => {
    const wrapper = shallow(<Projects />)
    const section = <p>Technologies Used:</p>
    expect(wrapper.contains(section)).toEqual(true);
})