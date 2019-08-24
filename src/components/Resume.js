import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';

const Resume = props => {
    return <Segment className='section-holder'>
        <Header as='h1' dividing icon textAlign='center'>
            <Icon name='file pdf' circular />
            <Header.Content>Resume</Header.Content>
        </Header>
        <a
            href='https://docs.google.com/document/d/1ZhfCdV35E5LYpiLtYayQuO2wdbALZLm-UZ7V_AdJVgI/'
            target='_blank'
            rel='noopener noreferrer'
        >
            Google Docs
        </a>
    </Segment>
    
}

export default Resume;