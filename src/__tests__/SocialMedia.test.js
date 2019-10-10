import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'semantic-ui-react';
import SocialMedia from '../components/SocialMedia';

it('renders without crashing', () => {
    shallow(<SocialMedia />)
});

it('contains my email contact', () => {
    const wrapper = shallow(<SocialMedia />)
    const email = <Button className='project-button' icon='telegram plane' color='vk' content='Email' href='mailto:harlowaustin2@gmail.com' />
    expect(wrapper.contains(email)).toEqual(true);
})