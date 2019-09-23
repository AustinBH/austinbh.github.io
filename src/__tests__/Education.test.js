import React from 'react';
import { shallow } from 'enzyme';
import Education from '../components/ResumeAdditions/Education';

it('renders without crashing', () => {
    shallow(<Education />)
});

it('contains my university degree', () => {
    const wrapper = shallow(<Education />)
    const degree = <em>B.A. History</em>
    expect(wrapper.contains(degree)).toEqual(true);
})