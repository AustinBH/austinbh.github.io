import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const Bio = props => {
    return <>
        <div/>
        <Segment className='section-holder' style={{marginTop: '50'}}>
            <Header as='h1' dividing content='Austin Harlow' />
            <p>Full Stack Developer</p>
        </Segment>
    </>
}

export default Bio;