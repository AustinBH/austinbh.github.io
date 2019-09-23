import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from 'semantic-ui-react';
import Signature from '../components/Signature';

it('renders without crashing', () => {
    shallow(<Signature />)
});

it('contains my name', () => {
    const wrapper = shallow(<Signature />)
    const name = <p><Icon name='copyright outline' /> Austin Harlow</p>
    expect(wrapper.contains(name)).toEqual(true);
})