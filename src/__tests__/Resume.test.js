import React from 'react';
import { shallow } from 'enzyme';
import Resume from '../components/Resume';

it('renders without crashing', () => {
    shallow(<Resume />)
});

it('contains my resume blurb', () => {
    const wrapper = shallow(<Resume />)
    const blurb = <p>Full Stack Software Engineer with a passion for creative work in a fast-paced collaborative work environment.
        With experience in Ruby on Rails, JavaScript, and React and a background in customer service, I discovered web development through my friends and coworkers at Amazon.
        I grew up hiking all over the American West, and I bring the same tenacity and creativity to every project and assignment that I developed when learning how to live on nothing but what fish I could catch and what I had in my pack.</p>
    expect(wrapper.contains(blurb)).toEqual(true);
})