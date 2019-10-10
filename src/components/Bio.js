import React from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import headshot from '../images/headshot.svg';
import SocialMedia from './SocialMedia';

const Bio = props => {
    return <Segment className='section-holder bio'>
            <Header as='h1' dividing icon textAlign='center'>
                <Image src={headshot} circular alt='headshot'/>
                <Header.Content>Austin Harlow</Header.Content>
            </Header>
            <p>Software Engineer</p>
            <SocialMedia />
        </Segment>
}

export default Bio;