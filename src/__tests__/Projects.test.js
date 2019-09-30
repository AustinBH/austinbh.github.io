import React from 'react';
import { shallow } from 'enzyme';
import { Header, Icon } from 'semantic-ui-react';
import Projects from '../components/Projects';

it('renders without crashing', () => {
    shallow(<Projects />)
});

it('contains my the technologies used section', () => {
    const wrapper = shallow(<Projects />)
    const section = <Header as='h3' icon textAlign='center'>
        <Icon name='lab' circular size='mini' />
        <Header.Content>Projects</Header.Content>
    </Header>
    expect(wrapper.contains(section)).toEqual(true);
})