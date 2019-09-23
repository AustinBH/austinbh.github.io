import React from 'react';
import { shallow } from 'enzyme';
import About from '../components/About';

it('renders without crashing', () => {
    shallow(<About />)
});

it('includes a paragraph with info about me', () => {
    const wrapper = shallow(<About />)
    const para = <p>
        My name is Austin Harlow and I am a Software Engineer with a passion for learning and creating new things.
        My goal is to create applications that are both functional and interesting.
    </p>
    expect(wrapper.contains(para)).toEqual(true);
})