import React from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import headshot from '../images/headshot.JPG';
import SocialMedia from './SocialMedia';

const Bio = props => {
    return <>
        <div/>
        <Segment className='section-holder' style={{marginTop: '50'}}>
            <Header as='h1' dividing icon textAlign='center'>
                <Image src={headshot} circular/>
                <Header.Content>Austin Harlow</Header.Content>
            </Header>
            <p>Full Stack Software Developer</p>
            <SocialMedia />
        </Segment>
    </>
}

export default Bio;