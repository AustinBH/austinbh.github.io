import React from 'react';
import { shallow } from 'enzyme';
import { Header, Icon } from 'semantic-ui-react';
import TechnicalSkills from '../components/ResumeAdditions/TechnicalSkills';

it('renders without crashing', () => {
    shallow(<TechnicalSkills />)
});

it('contains a header', () => {
    const wrapper = shallow(<TechnicalSkills />)
    const header = <Header as='h3' style={{ cursor: 'pointer' }}>
        <Icon name='computer' />
        Technical Skills
        </Header>
    expect(wrapper.contains(header)).toEqual(true);
})