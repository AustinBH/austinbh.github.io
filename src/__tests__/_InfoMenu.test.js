import React from 'react';
import { shallow } from 'enzyme';
import InfoMenu from '../components/InfoMenu';

it('renders without crashing', () => {
    shallow(<InfoMenu />)
});

it('includes a blank div', () => {
    const wrapper = shallow(<InfoMenu />)
    const menu = <div/>
    expect(wrapper.contains(menu)).toEqual(true);
})