import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { shallow } from 'enzyme';
import Blog from '../components/Blog';

it('renders without crashing', () => {
    shallow(<Blog />)
});

it('contains a header with the content blog', () => {
    const wrapper = shallow(<Blog />)
    const header = <Header as='h3' dividing icon textAlign='center'>
        <Icon name='book' circular size='mini' />
        <Header.Content>Blog</Header.Content>
    </Header>
    expect(wrapper.contains(header)).toEqual(true);
})